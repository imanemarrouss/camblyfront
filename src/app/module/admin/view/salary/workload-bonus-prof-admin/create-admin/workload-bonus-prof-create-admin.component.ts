import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

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
  selector: 'app-workload-bonus-prof-create-admin',
  templateUrl: './workload-bonus-prof-create-admin.component.html'
})
export class WorkloadBonusProfCreateAdminComponent extends AbstractCreateController<WorkloadBonusProfDto, WorkloadBonusProfCriteria, WorkloadBonusProfService>  implements OnInit {



    private _validWorkloadBonusCode = true;
    private _validProfRef = true;
    private _validSalaryCode = true;

    constructor(private datePipe: DatePipe, private workloadBonusProfService: WorkloadBonusProfService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  
, private workloadBonusService: WorkloadBonusService, private profService: ProfService, private salaryService: SalaryService
    ) {
        super(datePipe, workloadBonusProfService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.workloadBonus = new WorkloadBonusDto();
    this.workloadBonusService.findAll().subscribe((data) => this.workloadBonuss = data);
    this.prof = new ProfDto();
    this.profService.findAll().subscribe((data) => this.profs = data);
    this.salary = new SalaryDto();
    this.salaryService.findAll().subscribe((data) => this.salarys = data);
}





    public setValidation(value: boolean){
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



    public async openCreateWorkloadBonus(workloadBonus: string) {
    const isPermistted = await this.roleService.isPermitted('WorkloadBonus', 'add');
    if(isPermistted) {
         this.workloadBonus = new WorkloadBonusDto();
         this.createWorkloadBonusDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateSalary(salary: string) {
    const isPermistted = await this.roleService.isPermitted('Salary', 'add');
    if(isPermistted) {
         this.salary = new SalaryDto();
         this.createSalaryDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get workloadBonus(): WorkloadBonusDto {
        return this.workloadBonusService.item;
    }
    set workloadBonus(value: WorkloadBonusDto) {
        this.workloadBonusService.item = value;
    }
    get workloadBonuss(): Array<WorkloadBonusDto> {
        return this.workloadBonusService.items;
    }
    set workloadBonuss(value: Array<WorkloadBonusDto>) {
        this.workloadBonusService.items = value;
    }
    get createWorkloadBonusDialog(): boolean {
       return this.workloadBonusService.createDialog;
    }
    set createWorkloadBonusDialog(value: boolean) {
        this.workloadBonusService.createDialog= value;
    }
    get prof(): ProfDto {
        return this.profService.item;
    }
    set prof(value: ProfDto) {
        this.profService.item = value;
    }
    get profs(): Array<ProfDto> {
        return this.profService.items;
    }
    set profs(value: Array<ProfDto>) {
        this.profService.items = value;
    }
    get createProfDialog(): boolean {
       return this.profService.createDialog;
    }
    set createProfDialog(value: boolean) {
        this.profService.createDialog= value;
    }
    get salary(): SalaryDto {
        return this.salaryService.item;
    }
    set salary(value: SalaryDto) {
        this.salaryService.item = value;
    }
    get salarys(): Array<SalaryDto> {
        return this.salaryService.items;
    }
    set salarys(value: Array<SalaryDto>) {
        this.salaryService.items = value;
    }
    get createSalaryDialog(): boolean {
       return this.salaryService.createDialog;
    }
    set createSalaryDialog(value: boolean) {
        this.salaryService.createDialog= value;
    }




    get validWorkloadBonusCode(): boolean {
        return this._validWorkloadBonusCode;
    }
    set validWorkloadBonusCode(value: boolean) {
        this._validWorkloadBonusCode = value;
    }
    get validProfRef(): boolean {
        return this._validProfRef;
    }
    set validProfRef(value: boolean) {
        this._validProfRef = value;
    }
    get validSalaryCode(): boolean {
        return this._validSalaryCode;
    }
    set validSalaryCode(value: boolean) {
        this._validSalaryCode = value;
    }


}
