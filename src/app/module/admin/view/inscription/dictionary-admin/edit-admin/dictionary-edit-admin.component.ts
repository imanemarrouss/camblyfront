import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {DictionaryService} from 'src/app/controller/service/Dictionary.service';
import {DictionaryDto} from 'src/app/controller/model/Dictionary.model';
import {DictionaryCriteria} from 'src/app/controller/criteria/DictionaryCriteria.model';


import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';

@Component({
  selector: 'app-dictionary-edit-admin',
  templateUrl: './dictionary-edit-admin.component.html'
})
export class DictionaryEditAdminComponent extends AbstractEditController<DictionaryDto, DictionaryCriteria, DictionaryService>   implements OnInit {



    private _validEtudiantRef = true;



    constructor(private datePipe: DatePipe, private dictionaryService: DictionaryService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private etudiantService: EtudiantService
    ) {
        super(datePipe, dictionaryService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.etudiant = new EtudiantDto();
    this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
}

    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



   public async openCreateEtudiant(etudiant: string) {
        const isPermistted = await this.roleService.isPermitted('Etudiant', 'edit');
        if(isPermistted) {
             this.etudiant = new EtudiantDto();
             this.createEtudiantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get etudiant(): EtudiantDto {
       return this.etudiantService.item;
   }
  set etudiant(value: EtudiantDto) {
        this.etudiantService.item = value;
   }
   get etudiants(): Array<EtudiantDto> {
        return this.etudiantService.items;
   }
   set etudiants(value: Array<EtudiantDto>) {
        this.etudiantService.items = value;
   }
   get createEtudiantDialog(): boolean {
       return this.etudiantService.createDialog;
   }
  set createEtudiantDialog(value: boolean) {
       this.etudiantService.createDialog= value;
   }



    get validEtudiantRef(): boolean {
        return this._validEtudiantRef;
    }
    set validEtudiantRef(value: boolean) {
        this._validEtudiantRef = value;
    }
}
