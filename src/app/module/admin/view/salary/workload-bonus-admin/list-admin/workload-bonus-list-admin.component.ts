import {Component, OnInit} from '@angular/core';
import {WorkloadBonusService} from 'src/app/controller/service/WorkloadBonus.service';
import {WorkloadBonusDto} from 'src/app/controller/model/WorkloadBonus.model';
import {WorkloadBonusCriteria} from 'src/app/controller/criteria/WorkloadBonusCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-workload-bonus-list-admin',
  templateUrl: './workload-bonus-list-admin.component.html'
})
export class WorkloadBonusListAdminComponent extends AbstractListController<WorkloadBonusDto, WorkloadBonusCriteria, WorkloadBonusService>  implements OnInit {

    fileName = 'WorkloadBonus';

  
    constructor(datePipe: DatePipe, workloadBonusService: WorkloadBonusService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, workloadBonusService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadWorkloadBonuss(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('WorkloadBonus', 'list');
        isPermistted ? this.service.findAll().subscribe(workloadBonuss => this.items = workloadBonuss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'nombreSession', header: 'Nombre session'},
            {field: 'prix', header: 'Prix'},
        ];
    }



	public initDuplicate(res: WorkloadBonusDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Nombre session': e.nombreSession ,
                 'Prix': e.prix ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Nombre session Min': this.criteria.nombreSessionMin ? this.criteria.nombreSessionMin : environment.emptyForExport ,
            'Nombre session Max': this.criteria.nombreSessionMax ? this.criteria.nombreSessionMax : environment.emptyForExport ,
            'Prix Min': this.criteria.prixMin ? this.criteria.prixMin : environment.emptyForExport ,
            'Prix Max': this.criteria.prixMax ? this.criteria.prixMax : environment.emptyForExport ,
        }];
      }
}
