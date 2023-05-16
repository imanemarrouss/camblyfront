import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {ParcoursService} from 'src/app/controller/service/Parcours.service';
import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {ParcoursCriteria} from 'src/app/controller/criteria/ParcoursCriteria.model';


import {CentreDto} from 'src/app/controller/model/Centre.model';
import {CentreService} from 'src/app/controller/service/Centre.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {GroupeEtudiantDto} from 'src/app/controller/model/GroupeEtudiant.model';
import {GroupeEtudiantService} from 'src/app/controller/service/GroupeEtudiant.service';
import {NiveauEtudeDto} from 'src/app/controller/model/NiveauEtude.model';
import {NiveauEtudeService} from 'src/app/controller/service/NiveauEtude.service';
import {EtatCoursDto} from 'src/app/controller/model/EtatCours.model';
import {EtatCoursService} from 'src/app/controller/service/EtatCours.service';
import {PackStudentDto} from 'src/app/controller/model/PackStudent.model';
import {PackStudentService} from 'src/app/controller/service/PackStudent.service';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import {CoursService} from 'src/app/controller/service/Cours.service';
import {StatutSocialDto} from 'src/app/controller/model/StatutSocial.model';
import {StatutSocialService} from 'src/app/controller/service/StatutSocial.service';
import {GroupeEtudiantDetailDto} from 'src/app/controller/model/GroupeEtudiantDetail.model';
import {GroupeEtudiantDetailService} from 'src/app/controller/service/GroupeEtudiantDetail.service';
import {GroupeEtudeDto} from 'src/app/controller/model/GroupeEtude.model';
import {GroupeEtudeService} from 'src/app/controller/service/GroupeEtude.service';
import {HomeWorkDto} from 'src/app/controller/model/HomeWork.model';
import {HomeWorkService} from 'src/app/controller/service/HomeWork.service';
import {LangueDto} from 'src/app/controller/model/Langue.model';
import {LangueService} from 'src/app/controller/service/Langue.service';
import {InteretEtudiantDto} from 'src/app/controller/model/InteretEtudiant.model';
import {InteretEtudiantService} from 'src/app/controller/service/InteretEtudiant.service';
import {EtatEtudiantScheduleDto} from 'src/app/controller/model/EtatEtudiantSchedule.model';
import {EtatEtudiantScheduleService} from 'src/app/controller/service/EtatEtudiantSchedule.service';
import {QuizEtudiantDto} from 'src/app/controller/model/QuizEtudiant.model';
import {QuizEtudiantService} from 'src/app/controller/service/QuizEtudiant.service';
import {TeacherLocalityDto} from 'src/app/controller/model/TeacherLocality.model';
import {TeacherLocalityService} from 'src/app/controller/service/TeacherLocality.service';
import {FonctionDto} from 'src/app/controller/model/Fonction.model';
import {FonctionService} from 'src/app/controller/service/Fonction.service';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';
import {SkillDto} from 'src/app/controller/model/Skill.model';
import {SkillService} from 'src/app/controller/service/Skill.service';

@Component({
  selector: 'app-parcours-edit-admin',
  templateUrl: './parcours-edit-admin.component.html'
})
export class ParcoursEditAdminComponent extends AbstractEditController<ParcoursDto, ParcoursCriteria, ParcoursService>   implements OnInit {

    private _courssElement = new CoursDto();
    private _etudiantsElement = new EtudiantDto();

    private _validParcoursCode = true;
    private _validParcoursLibelle = true;

    private _validCentreRef = true;
    private _validCourssCode = true;
    private _validCourssLibelle = true;
    private _validEtudiantsRef = true;

    private _groupeEtudiantDetails: Array<GroupeEtudiantDetailDto> = [];


    constructor(private datePipe: DatePipe, private parcoursService: ParcoursService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private centreService: CentreService, private statutSocialService: StatutSocialService, private etudiantService: EtudiantService, private groupeEtudeService: GroupeEtudeService, private langueService: LangueService, private interetEtudiantService: InteretEtudiantService, private etatEtudiantScheduleService: EtatEtudiantScheduleService, private teacherLocalityService: TeacherLocalityService, private groupeEtudiantService: GroupeEtudiantService, private fonctionService: FonctionService, private niveauEtudeService: NiveauEtudeService, private etatCoursService: EtatCoursService, private packStudentService: PackStudentService, private coursService: CoursService, private skillService: SkillService
    ) {
        super(datePipe, parcoursService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.courssElement.etatCours = new EtatCoursDto();
        this.etatCoursService.findAll().subscribe((data) => this.etatCourss = data);

        this.etudiantsElement.teacherLocality = new TeacherLocalityDto();
        this.teacherLocalityService.findAll().subscribe((data) => this.teacherLocalitys = data);
        this.etudiantsElement.etatEtudiantSchedule = new EtatEtudiantScheduleDto();
        this.etatEtudiantScheduleService.findAll().subscribe((data) => this.etatEtudiantSchedules = data);
        this.etudiantsElement.groupeEtude = new GroupeEtudeDto();
        this.groupeEtudeService.findAll().subscribe((data) => this.groupeEtudes = data);
        this.etudiantsElement.packStudent = new PackStudentDto();
        this.packStudentService.findAll().subscribe((data) => this.packStudents = data);
        this.etudiantsElement.statutSocial = new StatutSocialDto();
        this.statutSocialService.findAll().subscribe((data) => this.statutSocials = data);
        this.etudiantsElement.interetEtudiant = new InteretEtudiantDto();
        this.interetEtudiantService.findAll().subscribe((data) => this.interetEtudiants = data);
        this.etudiantsElement.niveauEtude = new NiveauEtudeDto();
        this.niveauEtudeService.findAll().subscribe((data) => this.niveauEtudes = data);
        this.etudiantsElement.skill = new SkillDto();
        this.skillService.findAll().subscribe((data) => this.skills = data);
        this.etudiantsElement.fonction = new FonctionDto();
        this.fonctionService.findAll().subscribe((data) => this.fonctions = data);
        this.etudiantsElement.langue = new LangueDto();
        this.langueService.findAll().subscribe((data) => this.langues = data);
         this.groupeEtudiantService.findAll().subscribe(data => this.prepareGroupeEtudiantDetails(data));

    this.centre = new CentreDto();
    this.centreService.findAll().subscribe((data) => this.centres = data);
}

    prepareGroupeEtudiantDetails(groupeEtudiants: Array<GroupeEtudiantDto>): void{
        if( groupeEtudiants != null){
            groupeEtudiants.forEach(e => {
                const groupeEtudiantDetail = new GroupeEtudiantDetailDto();
                groupeEtudiantDetail.groupeEtudiant = e;
                this.groupeEtudiantDetails.push(groupeEtudiantDetail);
            });
        }
   }
    public validateCourss(){
        this.errorMessages = new Array();
        this.validateCourssCode();
        this.validateCourssLibelle();
    }
    public validateEtudiants(){
        this.errorMessages = new Array();
        this.validateEtudiantsRef();
    }
    public setValidation(value : boolean){
        this.validParcoursCode = value;
        this.validParcoursLibelle = value;
        this.validCourssCode = value;
        this.validCourssLibelle = value;
        this.validEtudiantsRef = value;
        }
   public addCourss() {
        if( this.item.courss == null )
            this.item.courss = new Array<CoursDto>();
       this.validateCourss();
       if (this.errorMessages.length === 0) {
            if(this.courssElement.id == null){
                this.item.courss.push(this.courssElement);
            }else{
                const index = this.item.courss.findIndex(e => e.id == this.courssElement.id);
                this.item.courss[index] = this.courssElement;
            }
          this.courssElement = new CoursDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteCours(p: CoursDto) {
        this.item.courss.forEach((element, index) => {
            if (element === p) { this.item.courss.splice(index, 1); }
        });
    }

    public editCours(p: CoursDto) {
        this.courssElement = {... p};
        this.activeTab = 0;
    }
   public addEtudiants() {
        if( this.item.etudiants == null )
            this.item.etudiants = new Array<EtudiantDto>();
       this.validateEtudiants();
       if (this.errorMessages.length === 0) {
            if(this.etudiantsElement.id == null){
                this.item.etudiants.push(this.etudiantsElement);
            }else{
                const index = this.item.etudiants.findIndex(e => e.id == this.etudiantsElement.id);
                this.item.etudiants[index] = this.etudiantsElement;
            }
          this.etudiantsElement = new EtudiantDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteEtudiant(p: EtudiantDto) {
        this.item.etudiants.forEach((element, index) => {
            if (element === p) { this.item.etudiants.splice(index, 1); }
        });
    }

    public editEtudiant(p: EtudiantDto) {
        this.etudiantsElement = {... p};
        this.activeTab = 0;
    }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateParcoursCode();
        this.validateParcoursLibelle();
    }
    public validateParcoursCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validParcoursCode = false;
        } else {
            this.validParcoursCode = true;
        }
    }
    public validateParcoursLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validParcoursLibelle = false;
        } else {
            this.validParcoursLibelle = true;
        }
    }


    private validateCourssCode(){
        if (this.courssElement.code == null) {
        this.errorMessages.push('Code de la cours est  invalide');
            this.validCourssCode = false;
        } else {
            this.validCourssCode = true;
        }
    }
    private validateCourssLibelle(){
        if (this.courssElement.libelle == null) {
        this.errorMessages.push('Libelle de la cours est  invalide');
            this.validCourssLibelle = false;
        } else {
            this.validCourssLibelle = true;
        }
    }
    private validateEtudiantsRef(){
        if (this.etudiantsElement.ref == null) {
        this.errorMessages.push('Ref de la etudiant est  invalide');
            this.validEtudiantsRef = false;
        } else {
            this.validEtudiantsRef = true;
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
   public async openCreateCentre(centre: string) {
        const isPermistted = await this.roleService.isPermitted('Centre', 'edit');
        if(isPermistted) {
             this.centre = new CentreDto();
             this.createCentreDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get langue(): LangueDto {
       return this.langueService.item;
   }
  set langue(value: LangueDto) {
        this.langueService.item = value;
   }
   get langues(): Array<LangueDto> {
        return this.langueService.items;
   }
   set langues(value: Array<LangueDto>) {
        this.langueService.items = value;
   }
   get createLangueDialog(): boolean {
       return this.langueService.createDialog;
   }
  set createLangueDialog(value: boolean) {
       this.langueService.createDialog= value;
   }
   get packStudent(): PackStudentDto {
       return this.packStudentService.item;
   }
  set packStudent(value: PackStudentDto) {
        this.packStudentService.item = value;
   }
   get packStudents(): Array<PackStudentDto> {
        return this.packStudentService.items;
   }
   set packStudents(value: Array<PackStudentDto>) {
        this.packStudentService.items = value;
   }
   get createPackStudentDialog(): boolean {
       return this.packStudentService.createDialog;
   }
  set createPackStudentDialog(value: boolean) {
       this.packStudentService.createDialog= value;
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
   get statutSocial(): StatutSocialDto {
       return this.statutSocialService.item;
   }
  set statutSocial(value: StatutSocialDto) {
        this.statutSocialService.item = value;
   }
   get statutSocials(): Array<StatutSocialDto> {
        return this.statutSocialService.items;
   }
   set statutSocials(value: Array<StatutSocialDto>) {
        this.statutSocialService.items = value;
   }
   get createStatutSocialDialog(): boolean {
       return this.statutSocialService.createDialog;
   }
  set createStatutSocialDialog(value: boolean) {
       this.statutSocialService.createDialog= value;
   }
   get niveauEtude(): NiveauEtudeDto {
       return this.niveauEtudeService.item;
   }
  set niveauEtude(value: NiveauEtudeDto) {
        this.niveauEtudeService.item = value;
   }
   get niveauEtudes(): Array<NiveauEtudeDto> {
        return this.niveauEtudeService.items;
   }
   set niveauEtudes(value: Array<NiveauEtudeDto>) {
        this.niveauEtudeService.items = value;
   }
   get createNiveauEtudeDialog(): boolean {
       return this.niveauEtudeService.createDialog;
   }
  set createNiveauEtudeDialog(value: boolean) {
       this.niveauEtudeService.createDialog= value;
   }
   get skill(): SkillDto {
       return this.skillService.item;
   }
  set skill(value: SkillDto) {
        this.skillService.item = value;
   }
   get skills(): Array<SkillDto> {
        return this.skillService.items;
   }
   set skills(value: Array<SkillDto>) {
        this.skillService.items = value;
   }
   get createSkillDialog(): boolean {
       return this.skillService.createDialog;
   }
  set createSkillDialog(value: boolean) {
       this.skillService.createDialog= value;
   }
   get teacherLocality(): TeacherLocalityDto {
       return this.teacherLocalityService.item;
   }
  set teacherLocality(value: TeacherLocalityDto) {
        this.teacherLocalityService.item = value;
   }
   get teacherLocalitys(): Array<TeacherLocalityDto> {
        return this.teacherLocalityService.items;
   }
   set teacherLocalitys(value: Array<TeacherLocalityDto>) {
        this.teacherLocalityService.items = value;
   }
   get createTeacherLocalityDialog(): boolean {
       return this.teacherLocalityService.createDialog;
   }
  set createTeacherLocalityDialog(value: boolean) {
       this.teacherLocalityService.createDialog= value;
   }
   get etatEtudiantSchedule(): EtatEtudiantScheduleDto {
       return this.etatEtudiantScheduleService.item;
   }
  set etatEtudiantSchedule(value: EtatEtudiantScheduleDto) {
        this.etatEtudiantScheduleService.item = value;
   }
   get etatEtudiantSchedules(): Array<EtatEtudiantScheduleDto> {
        return this.etatEtudiantScheduleService.items;
   }
   set etatEtudiantSchedules(value: Array<EtatEtudiantScheduleDto>) {
        this.etatEtudiantScheduleService.items = value;
   }
   get createEtatEtudiantScheduleDialog(): boolean {
       return this.etatEtudiantScheduleService.createDialog;
   }
  set createEtatEtudiantScheduleDialog(value: boolean) {
       this.etatEtudiantScheduleService.createDialog= value;
   }
   get interetEtudiant(): InteretEtudiantDto {
       return this.interetEtudiantService.item;
   }
  set interetEtudiant(value: InteretEtudiantDto) {
        this.interetEtudiantService.item = value;
   }
   get interetEtudiants(): Array<InteretEtudiantDto> {
        return this.interetEtudiantService.items;
   }
   set interetEtudiants(value: Array<InteretEtudiantDto>) {
        this.interetEtudiantService.items = value;
   }
   get createInteretEtudiantDialog(): boolean {
       return this.interetEtudiantService.createDialog;
   }
  set createInteretEtudiantDialog(value: boolean) {
       this.interetEtudiantService.createDialog= value;
   }
   get fonction(): FonctionDto {
       return this.fonctionService.item;
   }
  set fonction(value: FonctionDto) {
        this.fonctionService.item = value;
   }
   get fonctions(): Array<FonctionDto> {
        return this.fonctionService.items;
   }
   set fonctions(value: Array<FonctionDto>) {
        this.fonctionService.items = value;
   }
   get createFonctionDialog(): boolean {
       return this.fonctionService.createDialog;
   }
  set createFonctionDialog(value: boolean) {
       this.fonctionService.createDialog= value;
   }
   get centre(): CentreDto {
       return this.centreService.item;
   }
  set centre(value: CentreDto) {
        this.centreService.item = value;
   }
   get centres(): Array<CentreDto> {
        return this.centreService.items;
   }
   set centres(value: Array<CentreDto>) {
        this.centreService.items = value;
   }
   get createCentreDialog(): boolean {
       return this.centreService.createDialog;
   }
  set createCentreDialog(value: boolean) {
       this.centreService.createDialog= value;
   }
   get groupeEtude(): GroupeEtudeDto {
       return this.groupeEtudeService.item;
   }
  set groupeEtude(value: GroupeEtudeDto) {
        this.groupeEtudeService.item = value;
   }
   get groupeEtudes(): Array<GroupeEtudeDto> {
        return this.groupeEtudeService.items;
   }
   set groupeEtudes(value: Array<GroupeEtudeDto>) {
        this.groupeEtudeService.items = value;
   }
   get createGroupeEtudeDialog(): boolean {
       return this.groupeEtudeService.createDialog;
   }
  set createGroupeEtudeDialog(value: boolean) {
       this.groupeEtudeService.createDialog= value;
   }

    get courssElement(): CoursDto {
        if( this._courssElement == null )
            this._courssElement = new CoursDto();
         return this._courssElement;
    }

    set courssElement(value: CoursDto) {
        this._courssElement = value;
    }
    get etudiantsElement(): EtudiantDto {
        if( this._etudiantsElement == null )
            this._etudiantsElement = new EtudiantDto();
         return this._etudiantsElement;
    }

    set etudiantsElement(value: EtudiantDto) {
        this._etudiantsElement = value;
    }

    get groupeEtudiantDetails(): Array<GroupeEtudiantDetailDto> {
        if( this._groupeEtudiantDetails == null )
            this._groupeEtudiantDetails = new Array();
        return this._groupeEtudiantDetails;
    }

    set groupeEtudiantDetails(value: Array<GroupeEtudiantDetailDto>) {
        this._groupeEtudiantDetails = value;
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

    get validCentreRef(): boolean {
        return this._validCentreRef;
    }
    set validCentreRef(value: boolean) {
        this._validCentreRef = value;
    }
    get validCourssCode(): boolean {
        return this._validCourssCode;
    }
    set validCourssCode(value: boolean) {
        this._validCourssCode = value;
    }
    get validCourssLibelle(): boolean {
        return this._validCourssLibelle;
    }
    set validCourssLibelle(value: boolean) {
        this._validCourssLibelle = value;
    }
    get validEtudiantsRef(): boolean {
        return this._validEtudiantsRef;
    }
    set validEtudiantsRef(value: boolean) {
        this._validEtudiantsRef = value;
    }
}
