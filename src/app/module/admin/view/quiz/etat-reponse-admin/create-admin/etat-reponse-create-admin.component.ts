import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {EtatReponseService} from 'src/app/controller/service/EtatReponse.service';
import {EtatReponseDto} from 'src/app/controller/model/EtatReponse.model';
import {EtatReponseCriteria} from 'src/app/controller/criteria/EtatReponseCriteria.model';
@Component({
  selector: 'app-etat-reponse-create-admin',
  templateUrl: './etat-reponse-create-admin.component.html'
})
export class EtatReponseCreateAdminComponent extends AbstractCreateController<EtatReponseDto, EtatReponseCriteria, EtatReponseService>  implements OnInit {



   private _validEtatReponseCode = true;
   private _validEtatReponseLibelle = true;

    constructor(private datePipe: DatePipe, private etatReponseService: EtatReponseService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, etatReponseService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validEtatReponseCode = value;
        this.validEtatReponseLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEtatReponseCode();
        this.validateEtatReponseLibelle();
    }

    public validateEtatReponseCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validEtatReponseCode = false;
        } else {
            this.validEtatReponseCode = true;
        }
    }
    public validateEtatReponseLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validEtatReponseLibelle = false;
        } else {
            this.validEtatReponseLibelle = true;
        }
    }






    get validEtatReponseCode(): boolean {
        return this._validEtatReponseCode;
    }

    set validEtatReponseCode(value: boolean) {
         this._validEtatReponseCode = value;
    }
    get validEtatReponseLibelle(): boolean {
        return this._validEtatReponseLibelle;
    }

    set validEtatReponseLibelle(value: boolean) {
         this._validEtatReponseLibelle = value;
    }



}
