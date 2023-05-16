import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {ReclamationEtudiantService} from 'src/app/controller/service/ReclamationEtudiant.service';
import {ReclamationEtudiantDto} from 'src/app/controller/model/ReclamationEtudiant.model';
import {ReclamationEtudiantCriteria} from 'src/app/controller/criteria/ReclamationEtudiantCriteria.model';


import {TypeReclamationEtudiantDto} from 'src/app/controller/model/TypeReclamationEtudiant.model';
import {TypeReclamationEtudiantService} from 'src/app/controller/service/TypeReclamationEtudiant.service';

@Component({
  selector: 'app-reclamation-etudiant-edit-admin',
  templateUrl: './reclamation-etudiant-edit-admin.component.html'
})
export class ReclamationEtudiantEditAdminComponent extends AbstractEditController<ReclamationEtudiantDto, ReclamationEtudiantCriteria, ReclamationEtudiantService>   implements OnInit {


    private _validReclamationEtudiantReference = true;

    private _validTypeReclamationEtudiantCode = true;
    private _validTypeReclamationEtudiantLibelle = true;



    constructor(private datePipe: DatePipe, private reclamationEtudiantService: ReclamationEtudiantService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private typeReclamationEtudiantService: TypeReclamationEtudiantService
    ) {
        super(datePipe, reclamationEtudiantService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.typeReclamationEtudiant = new TypeReclamationEtudiantDto();
    this.typeReclamationEtudiantService.findAll().subscribe((data) => this.typeReclamationEtudiants = data);
}

    public setValidation(value : boolean){
        this.validReclamationEtudiantReference = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateReclamationEtudiantReference();
    }
    public validateReclamationEtudiantReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
            this.errorMessages.push('Reference non valide');
            this.validReclamationEtudiantReference = false;
        } else {
            this.validReclamationEtudiantReference = true;
        }
    }



   public async openCreateTypeReclamationEtudiant(typeReclamationEtudiant: string) {
        const isPermistted = await this.roleService.isPermitted('TypeReclamationEtudiant', 'edit');
        if(isPermistted) {
             this.typeReclamationEtudiant = new TypeReclamationEtudiantDto();
             this.createTypeReclamationEtudiantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get typeReclamationEtudiant(): TypeReclamationEtudiantDto {
       return this.typeReclamationEtudiantService.item;
   }
  set typeReclamationEtudiant(value: TypeReclamationEtudiantDto) {
        this.typeReclamationEtudiantService.item = value;
   }
   get typeReclamationEtudiants(): Array<TypeReclamationEtudiantDto> {
        return this.typeReclamationEtudiantService.items;
   }
   set typeReclamationEtudiants(value: Array<TypeReclamationEtudiantDto>) {
        this.typeReclamationEtudiantService.items = value;
   }
   get createTypeReclamationEtudiantDialog(): boolean {
       return this.typeReclamationEtudiantService.createDialog;
   }
  set createTypeReclamationEtudiantDialog(value: boolean) {
       this.typeReclamationEtudiantService.createDialog= value;
   }


    get validReclamationEtudiantReference(): boolean {
        return this._validReclamationEtudiantReference;
    }
    set validReclamationEtudiantReference(value: boolean) {
        this._validReclamationEtudiantReference = value;
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
