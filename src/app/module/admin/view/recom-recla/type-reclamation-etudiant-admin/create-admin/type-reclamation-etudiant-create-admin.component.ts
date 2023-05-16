import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TypeReclamationEtudiantService} from 'src/app/controller/service/TypeReclamationEtudiant.service';
import {TypeReclamationEtudiantDto} from 'src/app/controller/model/TypeReclamationEtudiant.model';
import {TypeReclamationEtudiantCriteria} from 'src/app/controller/criteria/TypeReclamationEtudiantCriteria.model';
@Component({
  selector: 'app-type-reclamation-etudiant-create-admin',
  templateUrl: './type-reclamation-etudiant-create-admin.component.html'
})
export class TypeReclamationEtudiantCreateAdminComponent extends AbstractCreateController<TypeReclamationEtudiantDto, TypeReclamationEtudiantCriteria, TypeReclamationEtudiantService>  implements OnInit {



   private _validTypeReclamationEtudiantCode = true;
   private _validTypeReclamationEtudiantLibelle = true;

    constructor(private datePipe: DatePipe, private typeReclamationEtudiantService: TypeReclamationEtudiantService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, typeReclamationEtudiantService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validTypeReclamationEtudiantCode = value;
        this.validTypeReclamationEtudiantLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTypeReclamationEtudiantCode();
        this.validateTypeReclamationEtudiantLibelle();
    }

    public validateTypeReclamationEtudiantCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validTypeReclamationEtudiantCode = false;
        } else {
            this.validTypeReclamationEtudiantCode = true;
        }
    }
    public validateTypeReclamationEtudiantLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validTypeReclamationEtudiantLibelle = false;
        } else {
            this.validTypeReclamationEtudiantLibelle = true;
        }
    }






    get validTypeReclamationEtudiantCode(): boolean {
        return this._validTypeReclamationEtudiantCode;
    }

    set validTypeReclamationEtudiantCode(value: boolean) {
         this._validTypeReclamationEtudiantCode = value;
    }
    get validTypeReclamationEtudiantLibelle(): boolean {
        return this._validTypeReclamationEtudiantLibelle;
    }

    set validTypeReclamationEtudiantLibelle(value: boolean) {
         this._validTypeReclamationEtudiantLibelle = value;
    }



}
