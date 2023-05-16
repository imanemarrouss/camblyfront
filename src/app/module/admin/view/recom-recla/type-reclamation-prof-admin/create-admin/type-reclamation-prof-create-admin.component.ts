import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TypeReclamationProfService} from 'src/app/controller/service/TypeReclamationProf.service';
import {TypeReclamationProfDto} from 'src/app/controller/model/TypeReclamationProf.model';
import {TypeReclamationProfCriteria} from 'src/app/controller/criteria/TypeReclamationProfCriteria.model';
@Component({
  selector: 'app-type-reclamation-prof-create-admin',
  templateUrl: './type-reclamation-prof-create-admin.component.html'
})
export class TypeReclamationProfCreateAdminComponent extends AbstractCreateController<TypeReclamationProfDto, TypeReclamationProfCriteria, TypeReclamationProfService>  implements OnInit {



   private _validTypeReclamationProfCode = true;
   private _validTypeReclamationProfLibelle = true;

    constructor(private datePipe: DatePipe, private typeReclamationProfService: TypeReclamationProfService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, typeReclamationProfService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validTypeReclamationProfCode = value;
        this.validTypeReclamationProfLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTypeReclamationProfCode();
        this.validateTypeReclamationProfLibelle();
    }

    public validateTypeReclamationProfCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validTypeReclamationProfCode = false;
        } else {
            this.validTypeReclamationProfCode = true;
        }
    }
    public validateTypeReclamationProfLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validTypeReclamationProfLibelle = false;
        } else {
            this.validTypeReclamationProfLibelle = true;
        }
    }






    get validTypeReclamationProfCode(): boolean {
        return this._validTypeReclamationProfCode;
    }

    set validTypeReclamationProfCode(value: boolean) {
         this._validTypeReclamationProfCode = value;
    }
    get validTypeReclamationProfLibelle(): boolean {
        return this._validTypeReclamationProfLibelle;
    }

    set validTypeReclamationProfLibelle(value: boolean) {
         this._validTypeReclamationProfLibelle = value;
    }



}
