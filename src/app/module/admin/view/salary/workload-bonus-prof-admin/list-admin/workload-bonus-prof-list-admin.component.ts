import {Component, OnInit} from '@angular/core';
import {WorkloadBonusProfService} from 'src/app/controller/service/WorkloadBonusProf.service';
import {WorkloadBonusProfDto} from 'src/app/controller/model/WorkloadBonusProf.model';
import {WorkloadBonusProfCriteria} from 'src/app/controller/criteria/WorkloadBonusProfCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { WorkloadBonusService } from 'src/app/controller/service/WorkloadBonus.service';
import { ProfService } from 'src/app/controller/service/Prof.service';
import { SalaryService } from 'src/app/controller/service/Salary.service';

import {SalaryDto} from 'src/app/controller/model/Salary.model';
import {WorkloadBonusDto} from 'src/app/controller/model/WorkloadBonus.model';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-workload-bonus-prof-list-admin',
  templateUrl: './workload-bonus-prof-list-admin.component.html'
})
export class WorkloadBonusProfListAdminComponent extends AbstractListController<WorkloadBonusProfDto, WorkloadBonusProfCriteria, WorkloadBonusProfService>  implements OnInit {

    fileName = 'WorkloadBonusProf';

    workloadBonuss :Array<WorkloadBonusDto>;
    profs :Array<ProfDto>;
    salarys :Array<SalaryDto>;
  
    constructor(datePipe: DatePipe, workloadBonusProfService: WorkloadBonusProfService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private workloadBonusService: WorkloadBonusService, private profService: ProfService, private salaryService: SalaryService) {
        super(datePipe, workloadBonusProfService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadWorkloadBonus();
      this.loadProf();
      this.loadSalary();
    }

    public async loadWorkloadBonusProfs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('WorkloadBonusProf', 'list');
        isPermistted ? this.service.findAll().subscribe(workloadBonusProfs => this.items = workloadBonusProfs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'workloadBonus?.code', header: 'Workload bonus'},
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'mois', header: 'Mois'},
            {field: 'annee', header: 'Annee'},
            {field: 'salary?.code', header: 'Salary'},
        ];
    }


    public async loadWorkloadBonus(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('WorkloadBonusProf', 'list');
        isPermistted ? this.workloadBonusService.findAllOptimized().subscribe(workloadBonuss => this.workloadBonuss = workloadBonuss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadProf(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('WorkloadBonusProf', 'list');
        isPermistted ? this.profService.findAllOptimized().subscribe(profs => this.profs = profs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadSalary(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('WorkloadBonusProf', 'list');
        isPermistted ? this.salaryService.findAllOptimized().subscribe(salarys => this.salarys = salarys,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: WorkloadBonusProfDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Workload bonus': e.workloadBonus?.code ,
                'Prof': e.prof?.ref ,
                 'Mois': e.mois ,
                 'Annee': e.annee ,
                'Salary': e.salary?.code ,
            }
        });

        this.criteriaData = [{
        //'Workload bonus': this.criteria.workloadBonus?.code ? this.criteria.workloadBonus?.code : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
            'Mois Min': this.criteria.moisMin ? this.criteria.moisMin : environment.emptyForExport ,
            'Mois Max': this.criteria.moisMax ? this.criteria.moisMax : environment.emptyForExport ,
            'Annee Min': this.criteria.anneeMin ? this.criteria.anneeMin : environment.emptyForExport ,
            'Annee Max': this.criteria.anneeMax ? this.criteria.anneeMax : environment.emptyForExport ,
        //'Salary': this.criteria.salary?.code ? this.criteria.salary?.code : environment.emptyForExport ,
        }];
      }
}
