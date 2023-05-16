import {Component, OnInit} from '@angular/core';
import {ClassAverageBonusProfService} from 'src/app/controller/service/ClassAverageBonusProf.service';
import {ClassAverageBonusProfDto} from 'src/app/controller/model/ClassAverageBonusProf.model';
import {ClassAverageBonusProfCriteria} from 'src/app/controller/criteria/ClassAverageBonusProfCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { ProfService } from 'src/app/controller/service/Prof.service';
import { SalaryService } from 'src/app/controller/service/Salary.service';

import {SalaryDto} from 'src/app/controller/model/Salary.model';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-class-average-bonus-prof-list-admin',
  templateUrl: './class-average-bonus-prof-list-admin.component.html'
})
export class ClassAverageBonusProfListAdminComponent extends AbstractListController<ClassAverageBonusProfDto, ClassAverageBonusProfCriteria, ClassAverageBonusProfService>  implements OnInit {

    fileName = 'ClassAverageBonusProf';

    profs :Array<ProfDto>;
    salarys :Array<SalaryDto>;
  
    constructor(datePipe: DatePipe, classAverageBonusProfService: ClassAverageBonusProfService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private profService: ProfService, private salaryService: SalaryService) {
        super(datePipe, classAverageBonusProfService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadProf();
      this.loadSalary();
    }

    public async loadClassAverageBonusProfs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ClassAverageBonusProf', 'list');
        isPermistted ? this.service.findAll().subscribe(classAverageBonusProfs => this.items = classAverageBonusProfs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'mois', header: 'Mois'},
            {field: 'annee', header: 'Annee'},
            {field: 'salary?.code', header: 'Salary'},
        ];
    }


    public async loadProf(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ClassAverageBonusProf', 'list');
        isPermistted ? this.profService.findAllOptimized().subscribe(profs => this.profs = profs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadSalary(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ClassAverageBonusProf', 'list');
        isPermistted ? this.salaryService.findAllOptimized().subscribe(salarys => this.salarys = salarys,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: ClassAverageBonusProfDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Prof': e.prof?.ref ,
                 'Mois': e.mois ,
                 'Annee': e.annee ,
                'Salary': e.salary?.code ,
            }
        });

        this.criteriaData = [{
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
            'Mois Min': this.criteria.moisMin ? this.criteria.moisMin : environment.emptyForExport ,
            'Mois Max': this.criteria.moisMax ? this.criteria.moisMax : environment.emptyForExport ,
            'Annee Min': this.criteria.anneeMin ? this.criteria.anneeMin : environment.emptyForExport ,
            'Annee Max': this.criteria.anneeMax ? this.criteria.anneeMax : environment.emptyForExport ,
        //'Salary': this.criteria.salary?.code ? this.criteria.salary?.code : environment.emptyForExport ,
        }];
      }
}
