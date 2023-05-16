import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {SuperCategorieSectionService} from 'src/app/controller/service/SuperCategorieSection.service';
import {SuperCategorieSectionDto} from 'src/app/controller/model/SuperCategorieSection.model';
import {SuperCategorieSectionCriteria} from 'src/app/controller/criteria/SuperCategorieSectionCriteria.model';


import {CategorieSectionDto} from 'src/app/controller/model/CategorieSection.model';
import {CategorieSectionService} from 'src/app/controller/service/CategorieSection.service';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';

@Component({
  selector: 'app-super-categorie-section-edit-admin',
  templateUrl: './super-categorie-section-edit-admin.component.html'
})
export class SuperCategorieSectionEditAdminComponent extends AbstractEditController<SuperCategorieSectionDto, SuperCategorieSectionCriteria, SuperCategorieSectionService>   implements OnInit {

    private _categorieSectionsElement = new CategorieSectionDto();

    private _validSuperCategorieSectionCode = true;
    private _validSuperCategorieSectionLibelle = true;

    private _validCategorieSectionsCode = true;



    constructor(private datePipe: DatePipe, private superCategorieSectionService: SuperCategorieSectionService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private categorieSectionService: CategorieSectionService
    ) {
        super(datePipe, superCategorieSectionService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {

}

    public validateCategorieSections(){
        this.errorMessages = new Array();
        this.validateCategorieSectionsCode();
    }
    public setValidation(value : boolean){
        this.validSuperCategorieSectionCode = value;
        this.validSuperCategorieSectionLibelle = value;
        this.validCategorieSectionsCode = value;
        }
   public addCategorieSections() {
        if( this.item.categorieSections == null )
            this.item.categorieSections = new Array<CategorieSectionDto>();
       this.validateCategorieSections();
       if (this.errorMessages.length === 0) {
            if(this.categorieSectionsElement.id == null){
                this.item.categorieSections.push(this.categorieSectionsElement);
            }else{
                const index = this.item.categorieSections.findIndex(e => e.id == this.categorieSectionsElement.id);
                this.item.categorieSections[index] = this.categorieSectionsElement;
            }
          this.categorieSectionsElement = new CategorieSectionDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteCategorieSection(p: CategorieSectionDto) {
        this.item.categorieSections.forEach((element, index) => {
            if (element === p) { this.item.categorieSections.splice(index, 1); }
        });
    }

    public editCategorieSection(p: CategorieSectionDto) {
        this.categorieSectionsElement = {... p};
        this.activeTab = 0;
    }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateSuperCategorieSectionCode();
        this.validateSuperCategorieSectionLibelle();
    }
    public validateSuperCategorieSectionCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validSuperCategorieSectionCode = false;
        } else {
            this.validSuperCategorieSectionCode = true;
        }
    }
    public validateSuperCategorieSectionLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validSuperCategorieSectionLibelle = false;
        } else {
            this.validSuperCategorieSectionLibelle = true;
        }
    }


    private validateCategorieSectionsCode(){
        if (this.categorieSectionsElement.code == null) {
        this.errorMessages.push('Code de la categorieSection est  invalide');
            this.validCategorieSectionsCode = false;
        } else {
            this.validCategorieSectionsCode = true;
        }
    }



    get categorieSectionsElement(): CategorieSectionDto {
        if( this._categorieSectionsElement == null )
            this._categorieSectionsElement = new CategorieSectionDto();
         return this._categorieSectionsElement;
    }

    set categorieSectionsElement(value: CategorieSectionDto) {
        this._categorieSectionsElement = value;
    }

    get validSuperCategorieSectionCode(): boolean {
        return this._validSuperCategorieSectionCode;
    }
    set validSuperCategorieSectionCode(value: boolean) {
        this._validSuperCategorieSectionCode = value;
    }
    get validSuperCategorieSectionLibelle(): boolean {
        return this._validSuperCategorieSectionLibelle;
    }
    set validSuperCategorieSectionLibelle(value: boolean) {
        this._validSuperCategorieSectionLibelle = value;
    }

    get validCategorieSectionsCode(): boolean {
        return this._validCategorieSectionsCode;
    }
    set validCategorieSectionsCode(value: boolean) {
        this._validCategorieSectionsCode = value;
    }
}
