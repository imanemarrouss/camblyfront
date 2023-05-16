import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {StatutFreeTrialService} from 'src/app/controller/service/StatutFreeTrial.service';
import {StatutFreeTrialDto} from 'src/app/controller/model/StatutFreeTrial.model';
import {StatutFreeTrialCriteria} from 'src/app/controller/criteria/StatutFreeTrialCriteria.model';
@Component({
  selector: 'app-statut-free-trial-create-admin',
  templateUrl: './statut-free-trial-create-admin.component.html'
})
export class StatutFreeTrialCreateAdminComponent extends AbstractCreateController<StatutFreeTrialDto, StatutFreeTrialCriteria, StatutFreeTrialService>  implements OnInit {



   private _validStatutFreeTrialLibelle = true;
   private _validStatutFreeTrialCode = true;

    constructor(private datePipe: DatePipe, private statutFreeTrialService: StatutFreeTrialService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, statutFreeTrialService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validStatutFreeTrialLibelle = value;
        this.validStatutFreeTrialCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateStatutFreeTrialLibelle();
        this.validateStatutFreeTrialCode();
    }

    public validateStatutFreeTrialLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validStatutFreeTrialLibelle = false;
        } else {
            this.validStatutFreeTrialLibelle = true;
        }
    }
    public validateStatutFreeTrialCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validStatutFreeTrialCode = false;
        } else {
            this.validStatutFreeTrialCode = true;
        }
    }






    get validStatutFreeTrialLibelle(): boolean {
        return this._validStatutFreeTrialLibelle;
    }

    set validStatutFreeTrialLibelle(value: boolean) {
         this._validStatutFreeTrialLibelle = value;
    }
    get validStatutFreeTrialCode(): boolean {
        return this._validStatutFreeTrialCode;
    }

    set validStatutFreeTrialCode(value: boolean) {
         this._validStatutFreeTrialCode = value;
    }



}
