import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TypeDeQuestionService} from 'src/app/controller/service/TypeDeQuestion.service';
import {TypeDeQuestionDto} from 'src/app/controller/model/TypeDeQuestion.model';
import {TypeDeQuestionCriteria} from 'src/app/controller/criteria/TypeDeQuestionCriteria.model';
@Component({
  selector: 'app-type-de-question-create-admin',
  templateUrl: './type-de-question-create-admin.component.html'
})
export class TypeDeQuestionCreateAdminComponent extends AbstractCreateController<TypeDeQuestionDto, TypeDeQuestionCriteria, TypeDeQuestionService>  implements OnInit {



   private _validTypeDeQuestionRef = true;
   private _validTypeDeQuestionLib = true;

    constructor(private datePipe: DatePipe, private typeDeQuestionService: TypeDeQuestionService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, typeDeQuestionService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validTypeDeQuestionRef = value;
        this.validTypeDeQuestionLib = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTypeDeQuestionRef();
        this.validateTypeDeQuestionLib();
    }

    public validateTypeDeQuestionRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validTypeDeQuestionRef = false;
        } else {
            this.validTypeDeQuestionRef = true;
        }
    }
    public validateTypeDeQuestionLib(){
        if (this.stringUtilService.isEmpty(this.item.lib)) {
        this.errorMessages.push('Lib non valide');
        this.validTypeDeQuestionLib = false;
        } else {
            this.validTypeDeQuestionLib = true;
        }
    }






    get validTypeDeQuestionRef(): boolean {
        return this._validTypeDeQuestionRef;
    }

    set validTypeDeQuestionRef(value: boolean) {
         this._validTypeDeQuestionRef = value;
    }
    get validTypeDeQuestionLib(): boolean {
        return this._validTypeDeQuestionLib;
    }

    set validTypeDeQuestionLib(value: boolean) {
         this._validTypeDeQuestionLib = value;
    }



}
