import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {SectionService} from 'src/app/controller/service/Section.service';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionCriteria} from 'src/app/controller/criteria/SectionCriteria.model';


import {CategorieSectionDto} from 'src/app/controller/model/CategorieSection.model';
import {CategorieSectionService} from 'src/app/controller/service/CategorieSection.service';
import {SectionItemDto} from 'src/app/controller/model/SectionItem.model';
import {SectionItemService} from 'src/app/controller/service/SectionItem.service';
import {SessionCoursDto} from 'src/app/controller/model/SessionCours.model';
import {SessionCoursService} from 'src/app/controller/service/SessionCours.service';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import {CoursService} from 'src/app/controller/service/Cours.service';

@Component({
  selector: 'app-section-edit-admin',
  templateUrl: './section-edit-admin.component.html'
})
export class SectionEditAdminComponent extends AbstractEditController<SectionDto, SectionCriteria, SectionService>   implements OnInit {

    private _sectionItemsElement = new SectionItemDto();

    private _validSectionCode = true;

    private _validCategorieSectionCode = true;
    private _validCoursCode = true;
    private _validCoursLibelle = true;
    private _validSessionCoursReference = true;



    constructor(private datePipe: DatePipe, private sectionService: SectionService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private categorieSectionService: CategorieSectionService, private sectionItemService: SectionItemService, private sessionCoursService: SessionCoursService, private coursService: CoursService
    ) {
        super(datePipe, sectionService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {

    this.categorieSection = new CategorieSectionDto();
    this.categorieSectionService.findAll().subscribe((data) => this.categorieSections = data);
    this.cours = new CoursDto();
    this.coursService.findAll().subscribe((data) => this.courss = data);
    this.sessionCours = new SessionCoursDto();
    this.sessionCoursService.findAll().subscribe((data) => this.sessionCourss = data);
}

    public validateSectionItems(){
        this.errorMessages = new Array();
    }
    public setValidation(value : boolean){
        this.validSectionCode = value;
        }
   public addSectionItems() {
        if( this.item.sectionItems == null )
            this.item.sectionItems = new Array<SectionItemDto>();
       this.validateSectionItems();
       if (this.errorMessages.length === 0) {
            if(this.sectionItemsElement.id == null){
                this.item.sectionItems.push(this.sectionItemsElement);
            }else{
                const index = this.item.sectionItems.findIndex(e => e.id == this.sectionItemsElement.id);
                this.item.sectionItems[index] = this.sectionItemsElement;
            }
          this.sectionItemsElement = new SectionItemDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteSectionItem(p: SectionItemDto) {
        this.item.sectionItems.forEach((element, index) => {
            if (element === p) { this.item.sectionItems.splice(index, 1); }
        });
    }

    public editSectionItem(p: SectionItemDto) {
        this.sectionItemsElement = {... p};
        this.activeTab = 0;
    }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateSectionCode();
    }
    public validateSectionCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validSectionCode = false;
        } else {
            this.validSectionCode = true;
        }
    }



   public async openCreateCours(cours: string) {
        const isPermistted = await this.roleService.isPermitted('Cours', 'edit');
        if(isPermistted) {
             this.cours = new CoursDto();
             this.createCoursDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateCategorieSection(categorieSection: string) {
        const isPermistted = await this.roleService.isPermitted('CategorieSection', 'edit');
        if(isPermistted) {
             this.categorieSection = new CategorieSectionDto();
             this.createCategorieSectionDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get cours(): CoursDto {
       return this.coursService.item;
   }
  set cours(value: CoursDto) {
        this.coursService.item = value;
   }
   get courss(): Array<CoursDto> {
        return this.coursService.items;
   }
   set courss(value: Array<CoursDto>) {
        this.coursService.items = value;
   }
   get createCoursDialog(): boolean {
       return this.coursService.createDialog;
   }
  set createCoursDialog(value: boolean) {
       this.coursService.createDialog= value;
   }
   get categorieSection(): CategorieSectionDto {
       return this.categorieSectionService.item;
   }
  set categorieSection(value: CategorieSectionDto) {
        this.categorieSectionService.item = value;
   }
   get categorieSections(): Array<CategorieSectionDto> {
        return this.categorieSectionService.items;
   }
   set categorieSections(value: Array<CategorieSectionDto>) {
        this.categorieSectionService.items = value;
   }
   get createCategorieSectionDialog(): boolean {
       return this.categorieSectionService.createDialog;
   }
  set createCategorieSectionDialog(value: boolean) {
       this.categorieSectionService.createDialog= value;
   }
   get sessionCours(): SessionCoursDto {
       return this.sessionCoursService.item;
   }
  set sessionCours(value: SessionCoursDto) {
        this.sessionCoursService.item = value;
   }
   get sessionCourss(): Array<SessionCoursDto> {
        return this.sessionCoursService.items;
   }
   set sessionCourss(value: Array<SessionCoursDto>) {
        this.sessionCoursService.items = value;
   }
   get createSessionCoursDialog(): boolean {
       return this.sessionCoursService.createDialog;
   }
  set createSessionCoursDialog(value: boolean) {
       this.sessionCoursService.createDialog= value;
   }

    get sectionItemsElement(): SectionItemDto {
        if( this._sectionItemsElement == null )
            this._sectionItemsElement = new SectionItemDto();
         return this._sectionItemsElement;
    }

    set sectionItemsElement(value: SectionItemDto) {
        this._sectionItemsElement = value;
    }

    get validSectionCode(): boolean {
        return this._validSectionCode;
    }
    set validSectionCode(value: boolean) {
        this._validSectionCode = value;
    }

    get validCategorieSectionCode(): boolean {
        return this._validCategorieSectionCode;
    }
    set validCategorieSectionCode(value: boolean) {
        this._validCategorieSectionCode = value;
    }
    get validCoursCode(): boolean {
        return this._validCoursCode;
    }
    set validCoursCode(value: boolean) {
        this._validCoursCode = value;
    }
    get validCoursLibelle(): boolean {
        return this._validCoursLibelle;
    }
    set validCoursLibelle(value: boolean) {
        this._validCoursLibelle = value;
    }
    get validSessionCoursReference(): boolean {
        return this._validSessionCoursReference;
    }
    set validSessionCoursReference(value: boolean) {
        this._validSessionCoursReference = value;
    }
}
