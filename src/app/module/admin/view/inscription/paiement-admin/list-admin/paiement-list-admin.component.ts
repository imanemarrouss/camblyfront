import {Component, OnInit} from '@angular/core';
import {PaiementService} from 'src/app/controller/service/Paiement.service';
import {PaiementDto} from 'src/app/controller/model/Paiement.model';
import {PaiementCriteria} from 'src/app/controller/criteria/PaiementCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { ProfService } from 'src/app/controller/service/Prof.service';
import { GroupeEtudiantService } from 'src/app/controller/service/GroupeEtudiant.service';

import {GroupeEtudiantDto} from 'src/app/controller/model/GroupeEtudiant.model';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-paiement-list-admin',
  templateUrl: './paiement-list-admin.component.html'
})
export class PaiementListAdminComponent extends AbstractListController<PaiementDto, PaiementCriteria, PaiementService>  implements OnInit {

    fileName = 'Paiement';

    profs :Array<ProfDto>;
    groupeEtudiants :Array<GroupeEtudiantDto>;
  
    constructor(datePipe: DatePipe, paiementService: PaiementService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private profService: ProfService, private groupeEtudiantService: GroupeEtudiantService) {
        super(datePipe, paiementService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadProf();
      this.loadGroupeEtudiant();
    }

    public async loadPaiements(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Paiement', 'list');
        isPermistted ? this.service.findAll().subscribe(paiements => this.items = paiements,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'datePaiement', header: 'Date paiement'},
            {field: 'groupeEtudiant?.id', header: 'Groupe etudiant'},
        ];
    }


    public async loadProf(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Paiement', 'list');
        isPermistted ? this.profService.findAllOptimized().subscribe(profs => this.profs = profs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadGroupeEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Paiement', 'list');
        isPermistted ? this.groupeEtudiantService.findAll().subscribe(groupeEtudiants => this.groupeEtudiants = groupeEtudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: PaiementDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Prof': e.prof?.ref ,
                'Date paiement': this.datePipe.transform(e.datePaiement , 'dd/MM/yyyy hh:mm'),
                'Groupe etudiant': e.groupeEtudiant?.id ,
            }
        });

        this.criteriaData = [{
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
            'Date paiement Min': this.criteria.datePaiementFrom ? this.datePipe.transform(this.criteria.datePaiementFrom , this.dateFormat) : environment.emptyForExport ,
            'Date paiement Max': this.criteria.datePaiementTo ? this.datePipe.transform(this.criteria.datePaiementTo , this.dateFormat) : environment.emptyForExport ,
        //'Groupe etudiant': this.criteria.groupeEtudiant?.id ? this.criteria.groupeEtudiant?.id : environment.emptyForExport ,
        }];
      }
}
