import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {TypeTeacherService} from 'src/app/controller/service/TypeTeacher.service';
import {TypeTeacherDto} from 'src/app/controller/model/TypeTeacher.model';
import {TypeTeacherCriteria} from 'src/app/controller/criteria/TypeTeacherCriteria.model';



@Component({
  selector: 'app-type-teacher-edit-admin',
  templateUrl: './type-teacher-edit-admin.component.html'
})
export class TypeTeacherEditAdminComponent extends AbstractEditController<TypeTeacherDto, TypeTeacherCriteria, TypeTeacherService>   implements OnInit {


    private _validTypeTeacherLibelle = true;
    private _validTypeTeacherCode = true;




    constructor(private datePipe: DatePipe, private typeTeacherService: TypeTeacherService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, typeTeacherService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}

    public setValidation(value : boolean){
        this.validTypeTeacherLibelle = value;
        this.validTypeTeacherCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTypeTeacherLibelle();
        this.validateTypeTeacherCode();
    }
    public validateTypeTeacherLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTypeTeacherLibelle = false;
        } else {
            this.validTypeTeacherLibelle = true;
        }
    }
    public validateTypeTeacherCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validTypeTeacherCode = false;
        } else {
            this.validTypeTeacherCode = true;
        }
    }






    get validTypeTeacherLibelle(): boolean {
        return this._validTypeTeacherLibelle;
    }
    set validTypeTeacherLibelle(value: boolean) {
        this._validTypeTeacherLibelle = value;
    }
    get validTypeTeacherCode(): boolean {
        return this._validTypeTeacherCode;
    }
    set validTypeTeacherCode(value: boolean) {
        this._validTypeTeacherCode = value;
    }

}
