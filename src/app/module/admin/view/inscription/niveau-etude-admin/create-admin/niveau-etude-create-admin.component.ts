import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {NiveauEtudeService} from 'src/app/controller/service/NiveauEtude.service';
import {NiveauEtudeDto} from 'src/app/controller/model/NiveauEtude.model';
import {NiveauEtudeCriteria} from 'src/app/controller/criteria/NiveauEtudeCriteria.model';
@Component({
  selector: 'app-niveau-etude-create-admin',
  templateUrl: './niveau-etude-create-admin.component.html'
})
export class NiveauEtudeCreateAdminComponent extends AbstractCreateController<NiveauEtudeDto, NiveauEtudeCriteria, NiveauEtudeService>  implements OnInit {



   private _validNiveauEtudeLibelle = true;
   private _validNiveauEtudeCode = true;

    constructor(private datePipe: DatePipe, private niveauEtudeService: NiveauEtudeService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, niveauEtudeService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validNiveauEtudeLibelle = value;
        this.validNiveauEtudeCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateNiveauEtudeLibelle();
        this.validateNiveauEtudeCode();
    }

    public validateNiveauEtudeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validNiveauEtudeLibelle = false;
        } else {
            this.validNiveauEtudeLibelle = true;
        }
    }
    public validateNiveauEtudeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validNiveauEtudeCode = false;
        } else {
            this.validNiveauEtudeCode = true;
        }
    }






    get validNiveauEtudeLibelle(): boolean {
        return this._validNiveauEtudeLibelle;
    }

    set validNiveauEtudeLibelle(value: boolean) {
         this._validNiveauEtudeLibelle = value;
    }
    get validNiveauEtudeCode(): boolean {
        return this._validNiveauEtudeCode;
    }

    set validNiveauEtudeCode(value: boolean) {
         this._validNiveauEtudeCode = value;
    }



}
