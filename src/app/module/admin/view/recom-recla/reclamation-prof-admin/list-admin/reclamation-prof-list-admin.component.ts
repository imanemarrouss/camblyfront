import {Component, OnInit} from '@angular/core';
import {ReclamationProfService} from 'src/app/controller/service/ReclamationProf.service';
import {ReclamationProfDto} from 'src/app/controller/model/ReclamationProf.model';
import {ReclamationProfCriteria} from 'src/app/controller/criteria/ReclamationProfCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { AdminService } from 'src/app/controller/service/Admin.service';
import { ProfService } from 'src/app/controller/service/Prof.service';
import { TypeReclamationProfService } from 'src/app/controller/service/TypeReclamationProf.service';

import {TypeReclamationProfDto} from 'src/app/controller/model/TypeReclamationProf.model';
import {AdminDto} from 'src/app/controller/model/Admin.model';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-reclamation-prof-list-admin',
  templateUrl: './reclamation-prof-list-admin.component.html'
})
export class ReclamationProfListAdminComponent extends AbstractListController<ReclamationProfDto, ReclamationProfCriteria, ReclamationProfService>  implements OnInit {

    fileName = 'ReclamationProf';

     yesOrNoTraite :any[] =[];
     yesOrNoPostView :any[] =[];
    admins :Array<AdminDto>;
    profs :Array<ProfDto>;
    typeReclamationProfs :Array<TypeReclamationProfDto>;
  
    constructor(datePipe: DatePipe, reclamationProfService: ReclamationProfService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private adminService: AdminService, private profService: ProfService, private typeReclamationProfService: TypeReclamationProfService) {
        super(datePipe, reclamationProfService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadAdmin();
      this.loadProf();
      this.loadTypeReclamationProf();
    this.yesOrNoTraite =  [{label: 'Traite', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoPostView =  [{label: 'PostView', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }

    public async loadReclamationProfs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ReclamationProf', 'list');
        isPermistted ? this.service.findAll().subscribe(reclamationProfs => this.items = reclamationProfs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'dateReclamation', header: 'Date reclamation'},
            {field: 'traite', header: 'Traite'},
            {field: 'dateTraitement', header: 'Date traitement'},
            {field: 'dateReponse', header: 'Date reponse'},
            {field: 'postView', header: 'Post view'},
            {field: 'objetReclamationProf', header: 'Objet reclamation prof'},
            {field: 'admin?.id', header: 'Admin'},
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'typeReclamationProf?.libelle', header: 'Type reclamation prof'},
        ];
    }


    public async loadAdmin(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ReclamationProf', 'list');
        isPermistted ? this.adminService.findAll().subscribe(admins => this.admins = admins,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadProf(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ReclamationProf', 'list');
        isPermistted ? this.profService.findAllOptimized().subscribe(profs => this.profs = profs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadTypeReclamationProf(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ReclamationProf', 'list');
        isPermistted ? this.typeReclamationProfService.findAllOptimized().subscribe(typeReclamationProfs => this.typeReclamationProfs = typeReclamationProfs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: ReclamationProfDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                'Date reclamation': this.datePipe.transform(e.dateReclamation , 'dd/MM/yyyy hh:mm'),
                 'Message': e.message ,
                'Traite': e.traite? 'Vrai' : 'Faux' ,
                'Date traitement': this.datePipe.transform(e.dateTraitement , 'dd/MM/yyyy hh:mm'),
                'Date reponse': this.datePipe.transform(e.dateReponse , 'dd/MM/yyyy hh:mm'),
                'Post view': e.postView? 'Vrai' : 'Faux' ,
                 'Commentaire traiteur': e.commentaireTraiteur ,
                 'Objet reclamation prof': e.objetReclamationProf ,
                'Admin': e.admin?.id ,
                'Prof': e.prof?.ref ,
                'Type reclamation prof': e.typeReclamationProf?.libelle ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Date reclamation Min': this.criteria.dateReclamationFrom ? this.datePipe.transform(this.criteria.dateReclamationFrom , this.dateFormat) : environment.emptyForExport ,
            'Date reclamation Max': this.criteria.dateReclamationTo ? this.datePipe.transform(this.criteria.dateReclamationTo , this.dateFormat) : environment.emptyForExport ,
            'Message': this.criteria.message ? this.criteria.message : environment.emptyForExport ,
            'Traite': this.criteria.traite ? (this.criteria.traite ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Date traitement Min': this.criteria.dateTraitementFrom ? this.datePipe.transform(this.criteria.dateTraitementFrom , this.dateFormat) : environment.emptyForExport ,
            'Date traitement Max': this.criteria.dateTraitementTo ? this.datePipe.transform(this.criteria.dateTraitementTo , this.dateFormat) : environment.emptyForExport ,
            'Date reponse Min': this.criteria.dateReponseFrom ? this.datePipe.transform(this.criteria.dateReponseFrom , this.dateFormat) : environment.emptyForExport ,
            'Date reponse Max': this.criteria.dateReponseTo ? this.datePipe.transform(this.criteria.dateReponseTo , this.dateFormat) : environment.emptyForExport ,
            'Post view': this.criteria.postView ? (this.criteria.postView ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Commentaire traiteur': this.criteria.commentaireTraiteur ? this.criteria.commentaireTraiteur : environment.emptyForExport ,
            'Objet reclamation prof': this.criteria.objetReclamationProf ? this.criteria.objetReclamationProf : environment.emptyForExport ,
        //'Admin': this.criteria.admin?.id ? this.criteria.admin?.id : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
        //'Type reclamation prof': this.criteria.typeReclamationProf?.libelle ? this.criteria.typeReclamationProf?.libelle : environment.emptyForExport ,
        }];
      }
}
