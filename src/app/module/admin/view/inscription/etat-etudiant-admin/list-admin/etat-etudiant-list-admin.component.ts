import {Component, OnInit} from '@angular/core';
import {EtatEtudiantService} from 'src/app/controller/service/EtatEtudiant.service';
import {EtatEtudiantDto} from 'src/app/controller/model/EtatEtudiant.model';
import {EtatEtudiantCriteria} from 'src/app/controller/criteria/EtatEtudiantCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-etat-etudiant-list-admin',
  templateUrl: './etat-etudiant-list-admin.component.html'
})
export class EtatEtudiantListAdminComponent extends AbstractListController<EtatEtudiantDto, EtatEtudiantCriteria, EtatEtudiantService>  implements OnInit {

    fileName = 'EtatEtudiant';

  
    constructor(datePipe: DatePipe, etatEtudiantService: EtatEtudiantService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, etatEtudiantService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadEtatEtudiants(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EtatEtudiant', 'list');
        isPermistted ? this.service.findAll().subscribe(etatEtudiants => this.items = etatEtudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'username', header: 'Username'},
            {field: 'firstName', header: 'First name'},
            {field: 'lastName', header: 'Last name'},
            {field: 'nationnalite', header: 'Nationnalite'},
            {field: 'schedule1', header: 'Schedule1'},
            {field: 'schedule2', header: 'Schedule2'},
            {field: 'lastClass', header: 'Last class'},
            {field: 'nbrClass', header: 'Nbr class'},
            {field: 'etat', header: 'Etat'},
            {field: 'etatNumber', header: 'Etat number'},
        ];
    }



	public initDuplicate(res: EtatEtudiantDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                 'Username': e.username ,
                 'First name': e.firstName ,
                 'Last name': e.lastName ,
                 'Nationnalite': e.nationnalite ,
                 'Schedule1': e.schedule1 ,
                 'Schedule2': e.schedule2 ,
                 'Last class': e.lastClass ,
                 'Nbr class': e.nbrClass ,
                 'Etat': e.etat ,
                 'Etat number': e.etatNumber ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Username': this.criteria.username ? this.criteria.username : environment.emptyForExport ,
            'First name': this.criteria.firstName ? this.criteria.firstName : environment.emptyForExport ,
            'Last name': this.criteria.lastName ? this.criteria.lastName : environment.emptyForExport ,
            'Nationnalite': this.criteria.nationnalite ? this.criteria.nationnalite : environment.emptyForExport ,
            'Schedule1': this.criteria.schedule1 ? this.criteria.schedule1 : environment.emptyForExport ,
            'Schedule2': this.criteria.schedule2 ? this.criteria.schedule2 : environment.emptyForExport ,
            'Last class': this.criteria.lastClass ? this.criteria.lastClass : environment.emptyForExport ,
            'Nbr class': this.criteria.nbrClass ? this.criteria.nbrClass : environment.emptyForExport ,
            'Etat': this.criteria.etat ? this.criteria.etat : environment.emptyForExport ,
            'Etat number Min': this.criteria.etatNumberMin ? this.criteria.etatNumberMin : environment.emptyForExport ,
            'Etat number Max': this.criteria.etatNumberMax ? this.criteria.etatNumberMax : environment.emptyForExport ,
        }];
      }
}
