import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {InteretEtudiantService} from 'src/app/controller/service/InteretEtudiant.service';
import {InteretEtudiantDto} from 'src/app/controller/model/InteretEtudiant.model';
import {InteretEtudiantCriteria} from 'src/app/controller/criteria/InteretEtudiantCriteria.model';



@Component({
  selector: 'app-interet-etudiant-edit-admin',
  templateUrl: './interet-etudiant-edit-admin.component.html'
})
export class InteretEtudiantEditAdminComponent extends AbstractEditController<InteretEtudiantDto, InteretEtudiantCriteria, InteretEtudiantService>   implements OnInit {


    private _validInteretEtudiantCode = true;
    private _validInteretEtudiantLibelle = true;




    constructor(private datePipe: DatePipe, private interetEtudiantService: InteretEtudiantService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, interetEtudiantService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}

    public setValidation(value : boolean){
        this.validInteretEtudiantCode = value;
        this.validInteretEtudiantLibelle = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateInteretEtudiantCode();
        this.validateInteretEtudiantLibelle();
    }
    public validateInteretEtudiantCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validInteretEtudiantCode = false;
        } else {
            this.validInteretEtudiantCode = true;
        }
    }
    public validateInteretEtudiantLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validInteretEtudiantLibelle = false;
        } else {
            this.validInteretEtudiantLibelle = true;
        }
    }






    get validInteretEtudiantCode(): boolean {
        return this._validInteretEtudiantCode;
    }
    set validInteretEtudiantCode(value: boolean) {
        this._validInteretEtudiantCode = value;
    }
    get validInteretEtudiantLibelle(): boolean {
        return this._validInteretEtudiantLibelle;
    }
    set validInteretEtudiantLibelle(value: boolean) {
        this._validInteretEtudiantLibelle = value;
    }

}
