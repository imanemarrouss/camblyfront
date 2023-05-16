import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ClassAverageBonusProfService} from 'src/app/controller/service/ClassAverageBonusProf.service';
import {ClassAverageBonusProfDto} from 'src/app/controller/model/ClassAverageBonusProf.model';
import {ClassAverageBonusProfCriteria} from 'src/app/controller/criteria/ClassAverageBonusProfCriteria.model';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
import {SalaryDto} from 'src/app/controller/model/Salary.model';
import {SalaryService} from 'src/app/controller/service/Salary.service';
@Component({
  selector: 'app-class-average-bonus-prof-create-admin',
  templateUrl: './class-average-bonus-prof-create-admin.component.html'
})
export class ClassAverageBonusProfCreateAdminComponent extends AbstractCreateController<ClassAverageBonusProfDto, ClassAverageBonusProfCriteria, ClassAverageBonusProfService>  implements OnInit {



    private _validProfRef = true;
    private _validSalaryCode = true;

    constructor(private datePipe: DatePipe, private classAverageBonusProfService: ClassAverageBonusProfService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  
, private profService: ProfService, private salaryService: SalaryService
    ) {
        super(datePipe, classAverageBonusProfService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
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



    public async openCreateProf(prof: string) {
    const isPermistted = await this.roleService.isPermitted('Prof', 'add');
    if(isPermistted) {
         this.prof = new ProfDto();
         this.createProfDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
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
