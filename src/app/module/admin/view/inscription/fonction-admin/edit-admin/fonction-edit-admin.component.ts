import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {FonctionService} from 'src/app/controller/service/Fonction.service';
import {FonctionDto} from 'src/app/controller/model/Fonction.model';
import {FonctionCriteria} from 'src/app/controller/criteria/FonctionCriteria.model';



@Component({
  selector: 'app-fonction-edit-admin',
  templateUrl: './fonction-edit-admin.component.html'
})
export class FonctionEditAdminComponent extends AbstractEditController<FonctionDto, FonctionCriteria, FonctionService>   implements OnInit {


    private _validFonctionCode = true;
    private _validFonctionLibelle = true;




    constructor(private datePipe: DatePipe, private fonctionService: FonctionService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, fonctionService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}

    public setValidation(value : boolean){
        this.validFonctionCode = value;
        this.validFonctionLibelle = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateFonctionCode();
        this.validateFonctionLibelle();
    }
    public validateFonctionCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validFonctionCode = false;
        } else {
            this.validFonctionCode = true;
        }
    }
    public validateFonctionLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validFonctionLibelle = false;
        } else {
            this.validFonctionLibelle = true;
        }
    }






    get validFonctionCode(): boolean {
        return this._validFonctionCode;
    }
    set validFonctionCode(value: boolean) {
        this._validFonctionCode = value;
    }
    get validFonctionLibelle(): boolean {
        return this._validFonctionLibelle;
    }
    set validFonctionLibelle(value: boolean) {
        this._validFonctionLibelle = value;
    }

}
