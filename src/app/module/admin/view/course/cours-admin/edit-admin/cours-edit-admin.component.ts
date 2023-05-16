import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {CoursService} from 'src/app/controller/service/Cours.service';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import {CoursCriteria} from 'src/app/controller/criteria/CoursCriteria.model';


import {SectionItemDto} from 'src/app/controller/model/SectionItem.model';
import {SectionItemService} from 'src/app/controller/service/SectionItem.service';
import {TypeHomeWorkDto} from 'src/app/controller/model/TypeHomeWork.model';
import {TypeHomeWorkService} from 'src/app/controller/service/TypeHomeWork.service';
import {SessionCoursDto} from 'src/app/controller/model/SessionCours.model';
import {SessionCoursService} from 'src/app/controller/service/SessionCours.service';
import {CategorieSectionDto} from 'src/app/controller/model/CategorieSection.model';
import {CategorieSectionService} from 'src/app/controller/service/CategorieSection.service';
import {EtatCoursDto} from 'src/app/controller/model/EtatCours.model';
import {EtatCoursService} from 'src/app/controller/service/EtatCours.service';
import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {ParcoursService} from 'src/app/controller/service/Parcours.service';
import {HomeWorkQuestionDto} from 'src/app/controller/model/HomeWorkQuestion.model';
import {HomeWorkQuestionService} from 'src/app/controller/service/HomeWorkQuestion.service';
import {HomeWorkEtudiantDto} from 'src/app/controller/model/HomeWorkEtudiant.model';
import {HomeWorkEtudiantService} from 'src/app/controller/service/HomeWorkEtudiant.service';
import {HomeWorkDto} from 'src/app/controller/model/HomeWork.model';
import {HomeWorkService} from 'src/app/controller/service/HomeWork.service';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';

@Component({
  selector: 'app-cours-edit-admin',
  templateUrl: './cours-edit-admin.component.html'
})
export class CoursEditAdminComponent extends AbstractEditController<CoursDto, CoursCriteria, CoursService>   implements OnInit {

    private _sectionsElement = new SectionDto();
    private _homeWorksElement = new HomeWorkDto();

    private _validCoursCode = true;
    private _validCoursLibelle = true;

    private _validEtatCoursCode = true;
    private _validEtatCoursLibelle = true;
    private _validParcoursCode = true;
    private _validParcoursLibelle = true;
    private _validSectionsCode = true;
    private _validHomeWorksLibelle = true;



    constructor(private datePipe: DatePipe, private coursService: CoursService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private categorieSectionService: CategorieSectionService, private etatCoursService: EtatCoursService, private parcoursService: ParcoursService, private homeWorkService: HomeWorkService, private typeHomeWorkService: TypeHomeWorkService, private sessionCoursService: SessionCoursService, private sectionService: SectionService
    ) {
        super(datePipe, coursService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.sectionsElement.categorieSection = new CategorieSectionDto();
        this.categorieSectionService.findAll().subscribe((data) => this.categorieSections = data);
        this.sectionsElement.sessionCours = new SessionCoursDto();
        this.sessionCoursService.findAll().subscribe((data) => this.sessionCourss = data);

        this.homeWorksElement.typeHomeWork = new TypeHomeWorkDto();
        this.typeHomeWorkService.findAll().subscribe((data) => this.typeHomeWorks = data);

    this.etatCours = new EtatCoursDto();
    this.etatCoursService.findAll().subscribe((data) => this.etatCourss = data);
    this.parcours = new ParcoursDto();
    this.parcoursService.findAll().subscribe((data) => this.parcourss = data);
}

    public validateSections(){
        this.errorMessages = new Array();
        this.validateSectionsCode();
    }
    public validateHomeWorks(){
        this.errorMessages = new Array();
        this.validateHomeWorksLibelle();
    }
    public setValidation(value : boolean){
        this.validCoursCode = value;
        this.validCoursLibelle = value;
        this.validSectionsCode = value;
        this.validHomeWorksLibelle = value;
        }
   public addSections() {
        if( this.item.sections == null )
            this.item.sections = new Array<SectionDto>();
       this.validateSections();
       if (this.errorMessages.length === 0) {
            if(this.sectionsElement.id == null){
                this.item.sections.push(this.sectionsElement);
            }else{
                const index = this.item.sections.findIndex(e => e.id == this.sectionsElement.id);
                this.item.sections[index] = this.sectionsElement;
            }
          this.sectionsElement = new SectionDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteSection(p: SectionDto) {
        this.item.sections.forEach((element, index) => {
            if (element === p) { this.item.sections.splice(index, 1); }
        });
    }

    public editSection(p: SectionDto) {
        this.sectionsElement = {... p};
        this.activeTab = 0;
    }
   public addHomeWorks() {
        if( this.item.homeWorks == null )
            this.item.homeWorks = new Array<HomeWorkDto>();
       this.validateHomeWorks();
       if (this.errorMessages.length === 0) {
            if(this.homeWorksElement.id == null){
                this.item.homeWorks.push(this.homeWorksElement);
            }else{
                const index = this.item.homeWorks.findIndex(e => e.id == this.homeWorksElement.id);
                this.item.homeWorks[index] = this.homeWorksElement;
            }
          this.homeWorksElement = new HomeWorkDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteHomeWork(p: HomeWorkDto) {
        this.item.homeWorks.forEach((element, index) => {
            if (element === p) { this.item.homeWorks.splice(index, 1); }
        });
    }

    public editHomeWork(p: HomeWorkDto) {
        this.homeWorksElement = {... p};
        this.activeTab = 0;
    }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCoursCode();
        this.validateCoursLibelle();
    }
    public validateCoursCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validCoursCode = false;
        } else {
            this.validCoursCode = true;
        }
    }
    public validateCoursLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validCoursLibelle = false;
        } else {
            this.validCoursLibelle = true;
        }
    }


    private validateSectionsCode(){
        if (this.sectionsElement.code == null) {
        this.errorMessages.push('Code de la section est  invalide');
            this.validSectionsCode = false;
        } else {
            this.validSectionsCode = true;
        }
    }
    private validateHomeWorksLibelle(){
        if (this.homeWorksElement.libelle == null) {
        this.errorMessages.push('Libelle de la homeWork est  invalide');
            this.validHomeWorksLibelle = false;
        } else {
            this.validHomeWorksLibelle = true;
        }
    }

   public async openCreateEtatCours(etatCours: string) {
        const isPermistted = await this.roleService.isPermitted('EtatCours', 'edit');
        if(isPermistted) {
             this.etatCours = new EtatCoursDto();
             this.createEtatCoursDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateParcours(parcours: string) {
        const isPermistted = await this.roleService.isPermitted('Parcours', 'edit');
        if(isPermistted) {
             this.parcours = new ParcoursDto();
             this.createParcoursDialog = true;
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

   get typeHomeWork(): TypeHomeWorkDto {
       return this.typeHomeWorkService.item;
   }
  set typeHomeWork(value: TypeHomeWorkDto) {
        this.typeHomeWorkService.item = value;
   }
   get typeHomeWorks(): Array<TypeHomeWorkDto> {
        return this.typeHomeWorkService.items;
   }
   set typeHomeWorks(value: Array<TypeHomeWorkDto>) {
        this.typeHomeWorkService.items = value;
   }
   get createTypeHomeWorkDialog(): boolean {
       return this.typeHomeWorkService.createDialog;
   }
  set createTypeHomeWorkDialog(value: boolean) {
       this.typeHomeWorkService.createDialog= value;
   }
   get etatCours(): EtatCoursDto {
       return this.etatCoursService.item;
   }
  set etatCours(value: EtatCoursDto) {
        this.etatCoursService.item = value;
   }
   get etatCourss(): Array<EtatCoursDto> {
        return this.etatCoursService.items;
   }
   set etatCourss(value: Array<EtatCoursDto>) {
        this.etatCoursService.items = value;
   }
   get createEtatCoursDialog(): boolean {
       return this.etatCoursService.createDialog;
   }
  set createEtatCoursDialog(value: boolean) {
       this.etatCoursService.createDialog= value;
   }
   get parcours(): ParcoursDto {
       return this.parcoursService.item;
   }
  set parcours(value: ParcoursDto) {
        this.parcoursService.item = value;
   }
   get parcourss(): Array<ParcoursDto> {
        return this.parcoursService.items;
   }
   set parcourss(value: Array<ParcoursDto>) {
        this.parcoursService.items = value;
   }
   get createParcoursDialog(): boolean {
       return this.parcoursService.createDialog;
   }
  set createParcoursDialog(value: boolean) {
       this.parcoursService.createDialog= value;
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

    get sectionsElement(): SectionDto {
        if( this._sectionsElement == null )
            this._sectionsElement = new SectionDto();
         return this._sectionsElement;
    }

    set sectionsElement(value: SectionDto) {
        this._sectionsElement = value;
    }
    get homeWorksElement(): HomeWorkDto {
        if( this._homeWorksElement == null )
            this._homeWorksElement = new HomeWorkDto();
         return this._homeWorksElement;
    }

    set homeWorksElement(value: HomeWorkDto) {
        this._homeWorksElement = value;
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
    get validParcoursCode(): boolean {
        return this._validParcoursCode;
    }
    set validParcoursCode(value: boolean) {
        this._validParcoursCode = value;
    }
    get validParcoursLibelle(): boolean {
        return this._validParcoursLibelle;
    }
    set validParcoursLibelle(value: boolean) {
        this._validParcoursLibelle = value;
    }
    get validSectionsCode(): boolean {
        return this._validSectionsCode;
    }
    set validSectionsCode(value: boolean) {
        this._validSectionsCode = value;
    }
    get validHomeWorksLibelle(): boolean {
        return this._validHomeWorksLibelle;
    }
    set validHomeWorksLibelle(value: boolean) {
        this._validHomeWorksLibelle = value;
    }
}
