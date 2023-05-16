import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {EtatCoursService} from 'src/app/controller/service/EtatCours.service';
import {EtatCoursDto} from 'src/app/controller/model/EtatCours.model';
import {EtatCoursCriteria} from 'src/app/controller/criteria/EtatCoursCriteria.model';



@Component({
  selector: 'app-etat-cours-edit-admin',
  templateUrl: './etat-cours-edit-admin.component.html'
})
export class EtatCoursEditAdminComponent extends AbstractEditController<EtatCoursDto, EtatCoursCriteria, EtatCoursService>   implements OnInit {


    private _validEtatCoursCode = true;
    private _validEtatCoursLibelle = true;




    constructor(private datePipe: DatePipe, private etatCoursService: EtatCoursService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, etatCoursService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}

    public setValidation(value : boolean){
        this.validEtatCoursCode = value;
        this.validEtatCoursLibelle = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEtatCoursCode();
        this.validateEtatCoursLibelle();
    }
    public validateEtatCoursCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validEtatCoursCode = false;
        } else {
            this.validEtatCoursCode = true;
        }
    }
    public validateEtatCoursLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validEtatCoursLibelle = false;
        } else {
            this.validEtatCoursLibelle = true;
        }
    }






    get validEtatCoursCode(): boolean {
        return this._validEtatCoursCode;
    }
    set validEtatCoursCode(value: boolean) {
        this._validEtatCoursCode = value;
    }
    get validEtatCoursLibelle(): boolean {
        return this._validEtatCoursLibelle;
    }
    set validEtatCoursLibelle(value: boolean) {
        this._validEtatCoursLibelle = value;
    }

}
