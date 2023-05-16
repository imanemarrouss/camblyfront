import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {WorkloadBonusProfService} from 'src/app/controller/service/WorkloadBonusProf.service';
import {WorkloadBonusProfDto} from 'src/app/controller/model/WorkloadBonusProf.model';
import {WorkloadBonusProfCriteria} from 'src/app/controller/criteria/WorkloadBonusProfCriteria.model';

import {WorkloadBonusDto} from 'src/app/controller/model/WorkloadBonus.model';
import {WorkloadBonusService} from 'src/app/controller/service/WorkloadBonus.service';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
import {SalaryDto} from 'src/app/controller/model/Salary.model';
import {SalaryService} from 'src/app/controller/service/Salary.service';
@Component({
  selector: 'app-workload-bonus-prof-view-admin',
  templateUrl: './workload-bonus-prof-view-admin.component.html'
})
export class WorkloadBonusProfViewAdminComponent extends AbstractViewController<WorkloadBonusProfDto, WorkloadBonusProfCriteria, WorkloadBonusProfService> implements OnInit {


    constructor(private datePipe: DatePipe, private workloadBonusProfService: WorkloadBonusProfService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private workloadBonusService: WorkloadBonusService, private profService: ProfService, private salaryService: SalaryService
    ){
        super(datePipe, workloadBonusProfService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.workloadBonus = new WorkloadBonusDto();
        this.workloadBonusService.findAll().subscribe((data) => this.workloadBonuss = data);
        this.prof = new ProfDto();
        this.profService.findAll().subscribe((data) => this.profs = data);
        this.salary = new SalaryDto();
        this.salaryService.findAll().subscribe((data) => this.salarys = data);
    }


    get workloadBonus(): WorkloadBonusDto {
       return this.workloadBonusService.item;
    }
    set workloadBonus(value: WorkloadBonusDto) {
        this.workloadBonusService.item = value;
    }
    get workloadBonuss():Array<WorkloadBonusDto> {
       return this.workloadBonusService.items;
    }
    set workloadBonuss(value: Array<WorkloadBonusDto>) {
        this.workloadBonusService.items = value;
    }
    get prof(): ProfDto {
       return this.profService.item;
    }
    set prof(value: ProfDto) {
        this.profService.item = value;
    }
    get profs():Array<ProfDto> {
       return this.profService.items;
    }
    set profs(value: Array<ProfDto>) {
        this.profService.items = value;
    }
    get salary(): SalaryDto {
       return this.salaryService.item;
    }
    set salary(value: SalaryDto) {
        this.salaryService.item = value;
    }
    get salarys():Array<SalaryDto> {
       return this.salaryService.items;
    }
    set salarys(value: Array<SalaryDto>) {
        this.salaryService.items = value;
    }


}
