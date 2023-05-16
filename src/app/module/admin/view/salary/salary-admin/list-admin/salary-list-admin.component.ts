import {Component, OnInit} from '@angular/core';
import {SalaryService} from 'src/app/controller/service/Salary.service';
import {SalaryDto} from 'src/app/controller/model/Salary.model';
import {SalaryCriteria} from 'src/app/controller/criteria/SalaryCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { ProfService } from 'src/app/controller/service/Prof.service';

import {ProfDto} from 'src/app/controller/model/Prof.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-salary-list-admin',
  templateUrl: './salary-list-admin.component.html'
})
export class SalaryListAdminComponent extends AbstractListController<SalaryDto, SalaryCriteria, SalaryService>  implements OnInit {

    fileName = 'Salary';

     yesOrNoPayer :any[] =[];
    profs :Array<ProfDto>;
  
    constructor(datePipe: DatePipe, salaryService: SalaryService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private profService: ProfService) {
        super(datePipe, salaryService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadProf();
    this.yesOrNoPayer =  [{label: 'Payer', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }

    public async loadSalarys(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Salary', 'list');
        isPermistted ? this.service.findAll().subscribe(salarys => this.items = salarys,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'mois', header: 'Mois'},
            {field: 'annee', header: 'Annee'},
            {field: 'nbrSessionMensuel', header: 'Nbr session mensuel'},
            {field: 'payer', header: 'Payer'},
            {field: 'totalPayment', header: 'Total payment'},
            {field: 'totalBonusClassAverage', header: 'Total bonus class average'},
            {field: 'totalBonusWorkload', header: 'Total bonus workload'},
        ];
    }


    public async loadProf(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Salary', 'list');
        isPermistted ? this.profService.findAllOptimized().subscribe(profs => this.profs = profs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: SalaryDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                'Prof': e.prof?.ref ,
                 'Mois': e.mois ,
                 'Annee': e.annee ,
                 'Nbr session mensuel': e.nbrSessionMensuel ,
                'Payer': e.payer? 'Vrai' : 'Faux' ,
                 'Total payment': e.totalPayment ,
                 'Total bonus class average': e.totalBonusClassAverage ,
                 'Total bonus workload': e.totalBonusWorkload ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
            'Mois Min': this.criteria.moisMin ? this.criteria.moisMin : environment.emptyForExport ,
            'Mois Max': this.criteria.moisMax ? this.criteria.moisMax : environment.emptyForExport ,
            'Annee Min': this.criteria.anneeMin ? this.criteria.anneeMin : environment.emptyForExport ,
            'Annee Max': this.criteria.anneeMax ? this.criteria.anneeMax : environment.emptyForExport ,
            'Nbr session mensuel Min': this.criteria.nbrSessionMensuelMin ? this.criteria.nbrSessionMensuelMin : environment.emptyForExport ,
            'Nbr session mensuel Max': this.criteria.nbrSessionMensuelMax ? this.criteria.nbrSessionMensuelMax : environment.emptyForExport ,
            'Payer': this.criteria.payer ? (this.criteria.payer ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Total payment Min': this.criteria.totalPaymentMin ? this.criteria.totalPaymentMin : environment.emptyForExport ,
            'Total payment Max': this.criteria.totalPaymentMax ? this.criteria.totalPaymentMax : environment.emptyForExport ,
            'Total bonus class average Min': this.criteria.totalBonusClassAverageMin ? this.criteria.totalBonusClassAverageMin : environment.emptyForExport ,
            'Total bonus class average Max': this.criteria.totalBonusClassAverageMax ? this.criteria.totalBonusClassAverageMax : environment.emptyForExport ,
            'Total bonus workload Min': this.criteria.totalBonusWorkloadMin ? this.criteria.totalBonusWorkloadMin : environment.emptyForExport ,
            'Total bonus workload Max': this.criteria.totalBonusWorkloadMax ? this.criteria.totalBonusWorkloadMax : environment.emptyForExport ,
        }];
      }
}
