import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {SkillService} from 'src/app/controller/service/Skill.service';
import {SkillDto} from 'src/app/controller/model/Skill.model';
import {SkillCriteria} from 'src/app/controller/criteria/SkillCriteria.model';



@Component({
  selector: 'app-skill-edit-admin',
  templateUrl: './skill-edit-admin.component.html'
})
export class SkillEditAdminComponent extends AbstractEditController<SkillDto, SkillCriteria, SkillService>   implements OnInit {


    private _validSkillCode = true;
    private _validSkillLibelle = true;




    constructor(private datePipe: DatePipe, private skillService: SkillService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, skillService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}

    public setValidation(value : boolean){
        this.validSkillCode = value;
        this.validSkillLibelle = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateSkillCode();
        this.validateSkillLibelle();
    }
    public validateSkillCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validSkillCode = false;
        } else {
            this.validSkillCode = true;
        }
    }
    public validateSkillLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validSkillLibelle = false;
        } else {
            this.validSkillLibelle = true;
        }
    }






    get validSkillCode(): boolean {
        return this._validSkillCode;
    }
    set validSkillCode(value: boolean) {
        this._validSkillCode = value;
    }
    get validSkillLibelle(): boolean {
        return this._validSkillLibelle;
    }
    set validSkillLibelle(value: boolean) {
        this._validSkillLibelle = value;
    }

}
