import {Component, OnInit} from '@angular/core';
import {EtatEtudiantScheduleService} from 'src/app/controller/service/EtatEtudiantSchedule.service';
import {EtatEtudiantScheduleDto} from 'src/app/controller/model/EtatEtudiantSchedule.model';
import {EtatEtudiantScheduleCriteria} from 'src/app/controller/criteria/EtatEtudiantScheduleCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-etat-etudiant-schedule-list-admin',
  templateUrl: './etat-etudiant-schedule-list-admin.component.html'
})
export class EtatEtudiantScheduleListAdminComponent extends AbstractListController<EtatEtudiantScheduleDto, EtatEtudiantScheduleCriteria, EtatEtudiantScheduleService>  implements OnInit {

    fileName = 'EtatEtudiantSchedule';

  
    constructor(datePipe: DatePipe, etatEtudiantScheduleService: EtatEtudiantScheduleService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, etatEtudiantScheduleService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadEtatEtudiantSchedules(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EtatEtudiantSchedule', 'list');
        isPermistted ? this.service.findAll().subscribe(etatEtudiantSchedules => this.items = etatEtudiantSchedules,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'couleur', header: 'Couleur'},
        ];
    }



	public initDuplicate(res: EtatEtudiantScheduleDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Libelle': e.libelle ,
                 'Couleur': e.couleur ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Couleur': this.criteria.couleur ? this.criteria.couleur : environment.emptyForExport ,
        }];
      }
}
