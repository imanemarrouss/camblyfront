import {Component, OnInit} from '@angular/core';
import {EtudiantCoursService} from 'src/app/controller/service/EtudiantCours.service';
import {EtudiantCoursDto} from 'src/app/controller/model/EtudiantCours.model';
import {EtudiantCoursCriteria} from 'src/app/controller/criteria/EtudiantCoursCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { EtudiantService } from 'src/app/controller/service/Etudiant.service';
import { ProfService } from 'src/app/controller/service/Prof.service';
import { CoursService } from 'src/app/controller/service/Cours.service';

import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-etudiant-cours-list-admin',
  templateUrl: './etudiant-cours-list-admin.component.html'
})
export class EtudiantCoursListAdminComponent extends AbstractListController<EtudiantCoursDto, EtudiantCoursCriteria, EtudiantCoursService>  implements OnInit {

    fileName = 'EtudiantCours';

     yesOrNoPayer :any[] =[];
    etudiants :Array<EtudiantDto>;
    profs :Array<ProfDto>;
    courss :Array<CoursDto>;
  
    constructor(datePipe: DatePipe, etudiantCoursService: EtudiantCoursService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private etudiantService: EtudiantService, private profService: ProfService, private coursService: CoursService) {
        super(datePipe, etudiantCoursService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadEtudiant();
      this.loadProf();
      this.loadCours();
    this.yesOrNoPayer =  [{label: 'Payer', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }

    public async loadEtudiantCourss(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EtudiantCours', 'list');
        isPermistted ? this.service.findAll().subscribe(etudiantCourss => this.items = etudiantCourss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'etudiant?.ref', header: 'Etudiant'},
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'cours?.libelle', header: 'Cours'},
            {field: 'payer', header: 'Payer'},
            {field: 'dateFin', header: 'Date fin'},
        ];
    }


    public async loadEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EtudiantCours', 'list');
        isPermistted ? this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadProf(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EtudiantCours', 'list');
        isPermistted ? this.profService.findAllOptimized().subscribe(profs => this.profs = profs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadCours(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EtudiantCours', 'list');
        isPermistted ? this.coursService.findAllOptimized().subscribe(courss => this.courss = courss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: EtudiantCoursDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Etudiant': e.etudiant?.ref ,
                'Prof': e.prof?.ref ,
                'Cours': e.cours?.libelle ,
                'Payer': e.payer? 'Vrai' : 'Faux' ,
                'Date fin': this.datePipe.transform(e.dateFin , 'dd/MM/yyyy hh:mm'),
            }
        });

        this.criteriaData = [{
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
        //'Cours': this.criteria.cours?.libelle ? this.criteria.cours?.libelle : environment.emptyForExport ,
            'Payer': this.criteria.payer ? (this.criteria.payer ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Date fin Min': this.criteria.dateFinFrom ? this.datePipe.transform(this.criteria.dateFinFrom , this.dateFormat) : environment.emptyForExport ,
            'Date fin Max': this.criteria.dateFinTo ? this.datePipe.transform(this.criteria.dateFinTo , this.dateFormat) : environment.emptyForExport ,
        }];
      }
}
