import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ServicesService} from 'src/app/controller/service/Services.service';
import {ServicesDto} from 'src/app/controller/model/Services.model';
import {ServicesCriteria} from 'src/app/controller/criteria/ServicesCriteria.model';
@Component({
  selector: 'app-services-create-admin',
  templateUrl: './services-create-admin.component.html'
})
export class ServicesCreateAdminComponent extends AbstractCreateController<ServicesDto, ServicesCriteria, ServicesService>  implements OnInit {



   private _validServicesCode = true;
   private _validServicesLibelle = true;

    constructor(private datePipe: DatePipe, private servicesService: ServicesService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, servicesService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validServicesCode = value;
        this.validServicesLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateServicesCode();
        this.validateServicesLibelle();
    }

    public validateServicesCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validServicesCode = false;
        } else {
            this.validServicesCode = true;
        }
    }
    public validateServicesLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validServicesLibelle = false;
        } else {
            this.validServicesLibelle = true;
        }
    }






    get validServicesCode(): boolean {
        return this._validServicesCode;
    }

    set validServicesCode(value: boolean) {
         this._validServicesCode = value;
    }
    get validServicesLibelle(): boolean {
        return this._validServicesLibelle;
    }

    set validServicesLibelle(value: boolean) {
         this._validServicesLibelle = value;
    }



}
