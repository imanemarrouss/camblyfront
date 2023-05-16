import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {StatutSocialService} from 'src/app/controller/service/StatutSocial.service';
import {StatutSocialDto} from 'src/app/controller/model/StatutSocial.model';
import {StatutSocialCriteria} from 'src/app/controller/criteria/StatutSocialCriteria.model';
@Component({
  selector: 'app-statut-social-create-admin',
  templateUrl: './statut-social-create-admin.component.html'
})
export class StatutSocialCreateAdminComponent extends AbstractCreateController<StatutSocialDto, StatutSocialCriteria, StatutSocialService>  implements OnInit {



   private _validStatutSocialCode = true;
   private _validStatutSocialLibelle = true;

    constructor(private datePipe: DatePipe, private statutSocialService: StatutSocialService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, statutSocialService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validStatutSocialCode = value;
        this.validStatutSocialLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateStatutSocialCode();
        this.validateStatutSocialLibelle();
    }

    public validateStatutSocialCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validStatutSocialCode = false;
        } else {
            this.validStatutSocialCode = true;
        }
    }
    public validateStatutSocialLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validStatutSocialLibelle = false;
        } else {
            this.validStatutSocialLibelle = true;
        }
    }






    get validStatutSocialCode(): boolean {
        return this._validStatutSocialCode;
    }

    set validStatutSocialCode(value: boolean) {
         this._validStatutSocialCode = value;
    }
    get validStatutSocialLibelle(): boolean {
        return this._validStatutSocialLibelle;
    }

    set validStatutSocialLibelle(value: boolean) {
         this._validStatutSocialLibelle = value;
    }



}
