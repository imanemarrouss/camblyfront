import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {SessionCoursService} from 'src/app/controller/service/SessionCours.service';
import {SessionCoursDto} from 'src/app/controller/model/SessionCours.model';
import {SessionCoursCriteria} from 'src/app/controller/criteria/SessionCoursCriteria.model';
import {SectionItemDto} from 'src/app/controller/model/SectionItem.model';
import {SectionItemService} from 'src/app/controller/service/SectionItem.service';
import {SalaryDto} from 'src/app/controller/model/Salary.model';
import {SalaryService} from 'src/app/controller/service/Salary.service';
import {GroupeEtudiantDto} from 'src/app/controller/model/GroupeEtudiant.model';
import {GroupeEtudiantService} from 'src/app/controller/service/GroupeEtudiant.service';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
import {CategorieSectionDto} from 'src/app/controller/model/CategorieSection.model';
import {CategorieSectionService} from 'src/app/controller/service/CategorieSection.service';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import {CoursService} from 'src/app/controller/service/Cours.service';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';
@Component({
  selector: 'app-session-cours-create-admin',
  templateUrl: './session-cours-create-admin.component.html'
})
export class SessionCoursCreateAdminComponent extends AbstractCreateController<SessionCoursDto, SessionCoursCriteria, SessionCoursService>  implements OnInit {

    private _sectionsElement = new SectionDto();


   private _validSessionCoursReference = true;
    private _validProfRef = true;
    private _validCoursCode = true;
    private _validCoursLibelle = true;
    private _validSalaryCode = true;
    private _validSectionsCode = true;

    constructor(private datePipe: DatePipe, private sessionCoursService: SessionCoursService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  
, private profService: ProfService, private categorieSectionService: CategorieSectionService, private coursService: CoursService, private salaryService: SalaryService, private sectionService: SectionService, private groupeEtudiantService: GroupeEtudiantService
    ) {
        super(datePipe, sessionCoursService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.sectionsElement.categorieSection = new CategorieSectionDto();
        this.categorieSectionService.findAll().subscribe((data) => this.categorieSections = data);
        this.sectionsElement.cours = new CoursDto();
        this.coursService.findAll().subscribe((data) => this.courss = data);
    this.prof = new ProfDto();
    this.profService.findAll().subscribe((data) => this.profs = data);
    this.cours = new CoursDto();
    this.coursService.findAll().subscribe((data) => this.courss = data);
    this.groupeEtudiant = new GroupeEtudiantDto();
    this.groupeEtudiantService.findAll().subscribe((data) => this.groupeEtudiants = data);
    this.salary = new SalaryDto();
    this.salaryService.findAll().subscribe((data) => this.salarys = data);
}



    validateSections(){
        this.errorMessages = new Array();
        this.validateSectionsCode();
    }


    public setValidation(value: boolean){
        this.validSessionCoursReference = value;
        this.validSectionsCode = value;
    }

    public addSections() {
        if( this.item.sections == null )
            this.item.sections = new Array<SectionDto>();
       this.validateSections();
       if (this.errorMessages.length === 0) {
              this.item.sections.push({... this.sectionsElement});
              this.sectionsElement = new SectionDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
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


    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateSessionCoursReference();
    }

    public validateSessionCoursReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
        this.errorMessages.push('Reference non valide');
        this.validSessionCoursReference = false;
        } else {
            this.validSessionCoursReference = true;
        }
    }

    public validateSectionsCode(){
        if (this.sectionsElement.code == null) {
            this.errorMessages.push('Code de la section est  invalide');
            this.validSectionsCode = false;
        } else {
            this.validSectionsCode = true;
        }
    }


    get prof(): ProfDto {
        return this.profService.item;
    }
    set prof(value: ProfDto) {
        this.profService.item = value;
    }
    get profs(): Array<ProfDto> {
        return this.profService.items;
    }
    set profs(value: Array<ProfDto>) {
        this.profService.items = value;
    }
    get createProfDialog(): boolean {
       return this.profService.createDialog;
    }
    set createProfDialog(value: boolean) {
        this.profService.createDialog= value;
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
    get groupeEtudiant(): GroupeEtudiantDto {
        return this.groupeEtudiantService.item;
    }
    set groupeEtudiant(value: GroupeEtudiantDto) {
        this.groupeEtudiantService.item = value;
    }
    get groupeEtudiants(): Array<GroupeEtudiantDto> {
        return this.groupeEtudiantService.items;
    }
    set groupeEtudiants(value: Array<GroupeEtudiantDto>) {
        this.groupeEtudiantService.items = value;
    }
    get createGroupeEtudiantDialog(): boolean {
       return this.groupeEtudiantService.createDialog;
    }
    set createGroupeEtudiantDialog(value: boolean) {
        this.groupeEtudiantService.createDialog= value;
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
    get salary(): SalaryDto {
        return this.salaryService.item;
    }
    set salary(value: SalaryDto) {
        this.salaryService.item = value;
    }
    get salarys(): Array<SalaryDto> {
        return this.salaryService.items;
    }
    set salarys(value: Array<SalaryDto>) {
        this.salaryService.items = value;
    }
    get createSalaryDialog(): boolean {
       return this.salaryService.createDialog;
    }
    set createSalaryDialog(value: boolean) {
        this.salaryService.createDialog= value;
    }



    get validSessionCoursReference(): boolean {
        return this._validSessionCoursReference;
    }

    set validSessionCoursReference(value: boolean) {
         this._validSessionCoursReference = value;
    }

    get validProfRef(): boolean {
        return this._validProfRef;
    }
    set validProfRef(value: boolean) {
        this._validProfRef = value;
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
    get validSalaryCode(): boolean {
        return this._validSalaryCode;
    }
    set validSalaryCode(value: boolean) {
        this._validSalaryCode = value;
    }
    get validSectionsCode(): boolean {
        return this._validSectionsCode;
    }
    set validSectionsCode(value: boolean) {
        this._validSectionsCode = value;
    }

    get sectionsElement(): SectionDto {
        if( this._sectionsElement == null )
            this._sectionsElement = new SectionDto();
        return this._sectionsElement;
    }

    set sectionsElement(value: SectionDto) {
        this._sectionsElement = value;
    }

}
