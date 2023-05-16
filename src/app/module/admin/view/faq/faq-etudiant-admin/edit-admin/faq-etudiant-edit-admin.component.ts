import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {FaqEtudiantService} from 'src/app/controller/service/FaqEtudiant.service';
import {FaqEtudiantDto} from 'src/app/controller/model/FaqEtudiant.model';
import {FaqEtudiantCriteria} from 'src/app/controller/criteria/FaqEtudiantCriteria.model';


import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {AdminDto} from 'src/app/controller/model/Admin.model';
import {AdminService} from 'src/app/controller/service/Admin.service';
import {FaqTypeDto} from 'src/app/controller/model/FaqType.model';
import {FaqTypeService} from 'src/app/controller/service/FaqType.service';

@Component({
  selector: 'app-faq-etudiant-edit-admin',
  templateUrl: './faq-etudiant-edit-admin.component.html'
})
export class FaqEtudiantEditAdminComponent extends AbstractEditController<FaqEtudiantDto, FaqEtudiantCriteria, FaqEtudiantService>   implements OnInit {


    private _validFaqEtudiantLibelle = true;

    private _validEtudiantRef = true;
    private _validFaqTypeLibelle = true;



    constructor(private datePipe: DatePipe, private faqEtudiantService: FaqEtudiantService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private etudiantService: EtudiantService, private adminService: AdminService, private faqTypeService: FaqTypeService
    ) {
        super(datePipe, faqEtudiantService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.etudiant = new EtudiantDto();
    this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
    this.admin = new AdminDto();
    this.adminService.findAll().subscribe((data) => this.admins = data);
    this.faqType = new FaqTypeDto();
    this.faqTypeService.findAll().subscribe((data) => this.faqTypes = data);
}

    public setValidation(value : boolean){
        this.validFaqEtudiantLibelle = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateFaqEtudiantLibelle();
    }
    public validateFaqEtudiantLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validFaqEtudiantLibelle = false;
        } else {
            this.validFaqEtudiantLibelle = true;
        }
    }



   public async openCreateFaqType(faqType: string) {
        const isPermistted = await this.roleService.isPermitted('FaqType', 'edit');
        if(isPermistted) {
             this.faqType = new FaqTypeDto();
             this.createFaqTypeDialog = true;
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
   get faqType(): FaqTypeDto {
       return this.faqTypeService.item;
   }
  set faqType(value: FaqTypeDto) {
        this.faqTypeService.item = value;
   }
   get faqTypes(): Array<FaqTypeDto> {
        return this.faqTypeService.items;
   }
   set faqTypes(value: Array<FaqTypeDto>) {
        this.faqTypeService.items = value;
   }
   get createFaqTypeDialog(): boolean {
       return this.faqTypeService.createDialog;
   }
  set createFaqTypeDialog(value: boolean) {
       this.faqTypeService.createDialog= value;
   }
   get admin(): AdminDto {
       return this.adminService.item;
   }
  set admin(value: AdminDto) {
        this.adminService.item = value;
   }
   get admins(): Array<AdminDto> {
        return this.adminService.items;
   }
   set admins(value: Array<AdminDto>) {
        this.adminService.items = value;
   }
   get createAdminDialog(): boolean {
       return this.adminService.createDialog;
   }
  set createAdminDialog(value: boolean) {
       this.adminService.createDialog= value;
   }


    get validFaqEtudiantLibelle(): boolean {
        return this._validFaqEtudiantLibelle;
    }
    set validFaqEtudiantLibelle(value: boolean) {
        this._validFaqEtudiantLibelle = value;
    }

    get validEtudiantRef(): boolean {
        return this._validEtudiantRef;
    }
    set validEtudiantRef(value: boolean) {
        this._validEtudiantRef = value;
    }
    get validFaqTypeLibelle(): boolean {
        return this._validFaqTypeLibelle;
    }
    set validFaqTypeLibelle(value: boolean) {
        this._validFaqTypeLibelle = value;
    }
}
