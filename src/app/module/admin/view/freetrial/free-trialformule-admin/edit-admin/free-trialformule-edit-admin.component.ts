import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {FreeTrialformuleService} from 'src/app/controller/service/FreeTrialformule.service';
import {FreeTrialformuleDto} from 'src/app/controller/model/FreeTrialformule.model';
import {FreeTrialformuleCriteria} from 'src/app/controller/criteria/FreeTrialformuleCriteria.model';


import {InscriptionDto} from 'src/app/controller/model/Inscription.model';
import {InscriptionService} from 'src/app/controller/service/Inscription.service';

@Component({
  selector: 'app-free-trialformule-edit-admin',
  templateUrl: './free-trialformule-edit-admin.component.html'
})
export class FreeTrialformuleEditAdminComponent extends AbstractEditController<FreeTrialformuleDto, FreeTrialformuleCriteria, FreeTrialformuleService>   implements OnInit {


    private _validFreeTrialformuleCode = true;




    constructor(private datePipe: DatePipe, private freeTrialformuleService: FreeTrialformuleService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private inscriptionService: InscriptionService
    ) {
        super(datePipe, freeTrialformuleService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.inscription = new InscriptionDto();
    this.inscriptionService.findAll().subscribe((data) => this.inscriptions = data);
}

    public setValidation(value : boolean){
        this.validFreeTrialformuleCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateFreeTrialformuleCode();
    }
    public validateFreeTrialformuleCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validFreeTrialformuleCode = false;
        } else {
            this.validFreeTrialformuleCode = true;
        }
    }




   get inscription(): InscriptionDto {
       return this.inscriptionService.item;
   }
  set inscription(value: InscriptionDto) {
        this.inscriptionService.item = value;
   }
   get inscriptions(): Array<InscriptionDto> {
        return this.inscriptionService.items;
   }
   set inscriptions(value: Array<InscriptionDto>) {
        this.inscriptionService.items = value;
   }
   get createInscriptionDialog(): boolean {
       return this.inscriptionService.createDialog;
   }
  set createInscriptionDialog(value: boolean) {
       this.inscriptionService.createDialog= value;
   }


    get validFreeTrialformuleCode(): boolean {
        return this._validFreeTrialformuleCode;
    }
    set validFreeTrialformuleCode(value: boolean) {
        this._validFreeTrialformuleCode = value;
    }

}
