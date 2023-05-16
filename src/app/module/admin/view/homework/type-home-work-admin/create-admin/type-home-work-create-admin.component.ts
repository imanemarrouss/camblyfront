import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TypeHomeWorkService} from 'src/app/controller/service/TypeHomeWork.service';
import {TypeHomeWorkDto} from 'src/app/controller/model/TypeHomeWork.model';
import {TypeHomeWorkCriteria} from 'src/app/controller/criteria/TypeHomeWorkCriteria.model';
@Component({
  selector: 'app-type-home-work-create-admin',
  templateUrl: './type-home-work-create-admin.component.html'
})
export class TypeHomeWorkCreateAdminComponent extends AbstractCreateController<TypeHomeWorkDto, TypeHomeWorkCriteria, TypeHomeWorkService>  implements OnInit {



   private _validTypeHomeWorkCode = true;
   private _validTypeHomeWorkLib = true;

    constructor(private datePipe: DatePipe, private typeHomeWorkService: TypeHomeWorkService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, typeHomeWorkService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validTypeHomeWorkCode = value;
        this.validTypeHomeWorkLib = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTypeHomeWorkCode();
        this.validateTypeHomeWorkLib();
    }

    public validateTypeHomeWorkCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validTypeHomeWorkCode = false;
        } else {
            this.validTypeHomeWorkCode = true;
        }
    }
    public validateTypeHomeWorkLib(){
        if (this.stringUtilService.isEmpty(this.item.lib)) {
        this.errorMessages.push('Lib non valide');
        this.validTypeHomeWorkLib = false;
        } else {
            this.validTypeHomeWorkLib = true;
        }
    }






    get validTypeHomeWorkCode(): boolean {
        return this._validTypeHomeWorkCode;
    }

    set validTypeHomeWorkCode(value: boolean) {
         this._validTypeHomeWorkCode = value;
    }
    get validTypeHomeWorkLib(): boolean {
        return this._validTypeHomeWorkLib;
    }

    set validTypeHomeWorkLib(value: boolean) {
         this._validTypeHomeWorkLib = value;
    }



}
