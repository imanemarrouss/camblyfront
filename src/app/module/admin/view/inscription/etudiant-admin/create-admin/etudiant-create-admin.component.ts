import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantCriteria} from 'src/app/controller/criteria/EtudiantCriteria.model';
import {GroupeEtudiantDetailDto} from 'src/app/controller/model/GroupeEtudiantDetail.model';
import {GroupeEtudiantDetailService} from 'src/app/controller/service/GroupeEtudiantDetail.service';
import {StatutSocialDto} from 'src/app/controller/model/StatutSocial.model';
import {StatutSocialService} from 'src/app/controller/service/StatutSocial.service';
import {GroupeEtudeDto} from 'src/app/controller/model/GroupeEtude.model';
import {GroupeEtudeService} from 'src/app/controller/service/GroupeEtude.service';
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
import {GroupeEtudiantDto} from 'src/app/controller/model/GroupeEtudiant.model';
import {GroupeEtudiantService} from 'src/app/controller/service/GroupeEtudiant.service';
import {QuizDto} from 'src/app/controller/model/Quiz.model';
import {QuizService} from 'src/app/controller/service/Quiz.service';
import {FonctionDto} from 'src/app/controller/model/Fonction.model';
import {FonctionService} from 'src/app/controller/service/Fonction.service';
import {ReponseEtudiantDto} from 'src/app/controller/model/ReponseEtudiant.model';
import {ReponseEtudiantService} from 'src/app/controller/service/ReponseEtudiant.service';
import {NiveauEtudeDto} from 'src/app/controller/model/NiveauEtude.model';
import {NiveauEtudeService} from 'src/app/controller/service/NiveauEtude.service';
import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {ParcoursService} from 'src/app/controller/service/Parcours.service';
import {PackStudentDto} from 'src/app/controller/model/PackStudent.model';
import {PackStudentService} from 'src/app/controller/service/PackStudent.service';
import {SkillDto} from 'src/app/controller/model/Skill.model';
import {SkillService} from 'src/app/controller/service/Skill.service';
@Component({
  selector: 'app-etudiant-create-admin',
  templateUrl: './etudiant-create-admin.component.html'
})
export class EtudiantCreateAdminComponent extends AbstractCreateController<EtudiantDto, EtudiantCriteria, EtudiantService>  implements OnInit {

    private _quizEtudiantsElement = new QuizEtudiantDto();
    private _groupeEtudiantDetailsElement = new GroupeEtudiantDetailDto();


   private _validEtudiantRef = true;
    private _validTeacherLocalityCode = true;
    private _validTeacherLocalityLibelle = true;
    private _validEtatEtudiantScheduleRef = true;
    private _validParcoursCode = true;
    private _validParcoursLibelle = true;
    private _validQuizEtudiantsRef = true;
    private _validGroupeEtudeLibelle = true;
    private _validPackStudentCode = true;
    private _validPackStudentLibelle = true;
    private _validStatutSocialCode = true;
    private _validStatutSocialLibelle = true;
    private _validInteretEtudiantCode = true;
    private _validInteretEtudiantLibelle = true;
    private _validNiveauEtudeLibelle = true;
    private _validNiveauEtudeCode = true;
    private _validSkillCode = true;
    private _validSkillLibelle = true;
    private _validFonctionCode = true;
    private _validFonctionLibelle = true;
    private _validLangueRef = true;
    private _groupeEtudiantDetails: Array<GroupeEtudiantDetailDto> = [];

    constructor(private datePipe: DatePipe, private etudiantService: EtudiantService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  
, private groupeEtudiantDetailService: GroupeEtudiantDetailService, private statutSocialService: StatutSocialService, private groupeEtudeService: GroupeEtudeService, private langueService: LangueService, private interetEtudiantService: InteretEtudiantService, private etatEtudiantScheduleService: EtatEtudiantScheduleService, private quizEtudiantService: QuizEtudiantService, private teacherLocalityService: TeacherLocalityService, private groupeEtudiantService: GroupeEtudiantService, private quizService: QuizService, private fonctionService: FonctionService, private niveauEtudeService: NiveauEtudeService, private parcoursService: ParcoursService, private packStudentService: PackStudentService, private skillService: SkillService
    ) {
        super(datePipe, etudiantService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.quizEtudiantsElement.quiz = new QuizDto();
        this.quizService.findAll().subscribe((data) => this.quizs = data);
        this.groupeEtudiantService.findAll().subscribe(data => this.prepareGroupeEtudiantDetails(data));
        this.groupeEtudiantDetailsElement.groupeEtudiant = new GroupeEtudiantDto();
        this.groupeEtudiantService.findAll().subscribe((data) => this.groupeEtudiants = data);
    this.teacherLocality = new TeacherLocalityDto();
    this.teacherLocalityService.findAll().subscribe((data) => this.teacherLocalitys = data);
    this.etatEtudiantSchedule = new EtatEtudiantScheduleDto();
    this.etatEtudiantScheduleService.findAll().subscribe((data) => this.etatEtudiantSchedules = data);
    this.parcours = new ParcoursDto();
    this.parcoursService.findAll().subscribe((data) => this.parcourss = data);
    this.groupeEtude = new GroupeEtudeDto();
    this.groupeEtudeService.findAll().subscribe((data) => this.groupeEtudes = data);
    this.packStudent = new PackStudentDto();
    this.packStudentService.findAll().subscribe((data) => this.packStudents = data);
    this.statutSocial = new StatutSocialDto();
    this.statutSocialService.findAll().subscribe((data) => this.statutSocials = data);
    this.interetEtudiant = new InteretEtudiantDto();
    this.interetEtudiantService.findAll().subscribe((data) => this.interetEtudiants = data);
    this.niveauEtude = new NiveauEtudeDto();
    this.niveauEtudeService.findAll().subscribe((data) => this.niveauEtudes = data);
    this.skill = new SkillDto();
    this.skillService.findAll().subscribe((data) => this.skills = data);
    this.fonction = new FonctionDto();
    this.fonctionService.findAll().subscribe((data) => this.fonctions = data);
    this.langue = new LangueDto();
    this.langueService.findAll().subscribe((data) => this.langues = data);
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

    validateQuizEtudiants(){
        this.errorMessages = new Array();
        this.validateQuizEtudiantsRef();
    }


    public setValidation(value: boolean){
        this.validEtudiantRef = value;
        this.validQuizEtudiantsRef = value;
    }

    public addQuizEtudiants() {
        if( this.item.quizEtudiants == null )
            this.item.quizEtudiants = new Array<QuizEtudiantDto>();
       this.validateQuizEtudiants();
       if (this.errorMessages.length === 0) {
              this.item.quizEtudiants.push({... this.quizEtudiantsElement});
              this.quizEtudiantsElement = new QuizEtudiantDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deleteQuizEtudiant(p: QuizEtudiantDto) {
        this.item.quizEtudiants.forEach((element, index) => {
            if (element === p) { this.item.quizEtudiants.splice(index, 1); }
        });
    }

    public editQuizEtudiant(p: QuizEtudiantDto) {
        this.quizEtudiantsElement = {... p};
        this.activeTab = 0;
    }


    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEtudiantRef();
    }

    public validateEtudiantRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validEtudiantRef = false;
        } else {
            this.validEtudiantRef = true;
        }
    }

    public validateQuizEtudiantsRef(){
        if (this.quizEtudiantsElement.ref == null) {
            this.errorMessages.push('Ref de la quizEtudiant est  invalide');
            this.validQuizEtudiantsRef = false;
        } else {
            this.validQuizEtudiantsRef = true;
        }
    }

    public async openCreateLangue(langue: string) {
    const isPermistted = await this.roleService.isPermitted('Langue', 'add');
    if(isPermistted) {
         this.langue = new LangueDto();
         this.createLangueDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreatePackStudent(packStudent: string) {
    const isPermistted = await this.roleService.isPermitted('PackStudent', 'add');
    if(isPermistted) {
         this.packStudent = new PackStudentDto();
         this.createPackStudentDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateStatutSocial(statutSocial: string) {
    const isPermistted = await this.roleService.isPermitted('StatutSocial', 'add');
    if(isPermistted) {
         this.statutSocial = new StatutSocialDto();
         this.createStatutSocialDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateGroupeEtudiant(groupeEtudiant: string) {
    const isPermistted = await this.roleService.isPermitted('GroupeEtudiant', 'add');
    if(isPermistted) {
         this.groupeEtudiant = new GroupeEtudiantDto();
         this.createGroupeEtudiantDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateEtatEtudiantSchedule(etatEtudiantSchedule: string) {
    const isPermistted = await this.roleService.isPermitted('EtatEtudiantSchedule', 'add');
    if(isPermistted) {
         this.etatEtudiantSchedule = new EtatEtudiantScheduleDto();
         this.createEtatEtudiantScheduleDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateGroupeEtude(groupeEtude: string) {
    const isPermistted = await this.roleService.isPermitted('GroupeEtude', 'add');
    if(isPermistted) {
         this.groupeEtude = new GroupeEtudeDto();
         this.createGroupeEtudeDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateNiveauEtude(niveauEtude: string) {
    const isPermistted = await this.roleService.isPermitted('NiveauEtude', 'add');
    if(isPermistted) {
         this.niveauEtude = new NiveauEtudeDto();
         this.createNiveauEtudeDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateSkill(skill: string) {
    const isPermistted = await this.roleService.isPermitted('Skill', 'add');
    if(isPermistted) {
         this.skill = new SkillDto();
         this.createSkillDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateTeacherLocality(teacherLocality: string) {
    const isPermistted = await this.roleService.isPermitted('TeacherLocality', 'add');
    if(isPermistted) {
         this.teacherLocality = new TeacherLocalityDto();
         this.createTeacherLocalityDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateInteretEtudiant(interetEtudiant: string) {
    const isPermistted = await this.roleService.isPermitted('InteretEtudiant', 'add');
    if(isPermistted) {
         this.interetEtudiant = new InteretEtudiantDto();
         this.createInteretEtudiantDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateFonction(fonction: string) {
    const isPermistted = await this.roleService.isPermitted('Fonction', 'add');
    if(isPermistted) {
         this.fonction = new FonctionDto();
         this.createFonctionDialog = true;
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
    get quiz(): QuizDto {
        return this.quizService.item;
    }
    set quiz(value: QuizDto) {
        this.quizService.item = value;
    }
    get quizs(): Array<QuizDto> {
        return this.quizService.items;
    }
    set quizs(value: Array<QuizDto>) {
        this.quizService.items = value;
    }
    get createQuizDialog(): boolean {
       return this.quizService.createDialog;
    }
    set createQuizDialog(value: boolean) {
        this.quizService.createDialog= value;
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

    get groupeEtudiantDetails(): Array<GroupeEtudiantDetailDto> {
        if( this._groupeEtudiantDetails == null )
            this._groupeEtudiantDetails = new Array();
        return this._groupeEtudiantDetails;
    }

    set groupeEtudiantDetails(value: Array<GroupeEtudiantDetailDto>) {
        this._groupeEtudiantDetails = value;
    }


    get validEtudiantRef(): boolean {
        return this._validEtudiantRef;
    }

    set validEtudiantRef(value: boolean) {
         this._validEtudiantRef = value;
    }

    get validTeacherLocalityCode(): boolean {
        return this._validTeacherLocalityCode;
    }
    set validTeacherLocalityCode(value: boolean) {
        this._validTeacherLocalityCode = value;
    }
    get validTeacherLocalityLibelle(): boolean {
        return this._validTeacherLocalityLibelle;
    }
    set validTeacherLocalityLibelle(value: boolean) {
        this._validTeacherLocalityLibelle = value;
    }
    get validEtatEtudiantScheduleRef(): boolean {
        return this._validEtatEtudiantScheduleRef;
    }
    set validEtatEtudiantScheduleRef(value: boolean) {
        this._validEtatEtudiantScheduleRef = value;
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
    get validQuizEtudiantsRef(): boolean {
        return this._validQuizEtudiantsRef;
    }
    set validQuizEtudiantsRef(value: boolean) {
        this._validQuizEtudiantsRef = value;
    }
    get validGroupeEtudeLibelle(): boolean {
        return this._validGroupeEtudeLibelle;
    }
    set validGroupeEtudeLibelle(value: boolean) {
        this._validGroupeEtudeLibelle = value;
    }
    get validPackStudentCode(): boolean {
        return this._validPackStudentCode;
    }
    set validPackStudentCode(value: boolean) {
        this._validPackStudentCode = value;
    }
    get validPackStudentLibelle(): boolean {
        return this._validPackStudentLibelle;
    }
    set validPackStudentLibelle(value: boolean) {
        this._validPackStudentLibelle = value;
    }
    get validStatutSocialCode(): boolean {
        return this._validStatutSocialCode;
    }
    set validStatutSocialCode(value: boolean) {
        this._validStatutSocialCode = value;
    }
    get validStatutSocialLibelle(): boolean {
        return this._validStatutSocialLibelle;
    }
    set validStatutSocialLibelle(value: boolean) {
        this._validStatutSocialLibelle = value;
    }
    get validInteretEtudiantCode(): boolean {
        return this._validInteretEtudiantCode;
    }
    set validInteretEtudiantCode(value: boolean) {
        this._validInteretEtudiantCode = value;
    }
    get validInteretEtudiantLibelle(): boolean {
        return this._validInteretEtudiantLibelle;
    }
    set validInteretEtudiantLibelle(value: boolean) {
        this._validInteretEtudiantLibelle = value;
    }
    get validNiveauEtudeLibelle(): boolean {
        return this._validNiveauEtudeLibelle;
    }
    set validNiveauEtudeLibelle(value: boolean) {
        this._validNiveauEtudeLibelle = value;
    }
    get validNiveauEtudeCode(): boolean {
        return this._validNiveauEtudeCode;
    }
    set validNiveauEtudeCode(value: boolean) {
        this._validNiveauEtudeCode = value;
    }
    get validSkillCode(): boolean {
        return this._validSkillCode;
    }
    set validSkillCode(value: boolean) {
        this._validSkillCode = value;
    }
    get validSkillLibelle(): boolean {
        return this._validSkillLibelle;
    }
    set validSkillLibelle(value: boolean) {
        this._validSkillLibelle = value;
    }
    get validFonctionCode(): boolean {
        return this._validFonctionCode;
    }
    set validFonctionCode(value: boolean) {
        this._validFonctionCode = value;
    }
    get validFonctionLibelle(): boolean {
        return this._validFonctionLibelle;
    }
    set validFonctionLibelle(value: boolean) {
        this._validFonctionLibelle = value;
    }
    get validLangueRef(): boolean {
        return this._validLangueRef;
    }
    set validLangueRef(value: boolean) {
        this._validLangueRef = value;
    }

    get quizEtudiantsElement(): QuizEtudiantDto {
        if( this._quizEtudiantsElement == null )
            this._quizEtudiantsElement = new QuizEtudiantDto();
        return this._quizEtudiantsElement;
    }

    set quizEtudiantsElement(value: QuizEtudiantDto) {
        this._quizEtudiantsElement = value;
    }
    get groupeEtudiantDetailsElement(): GroupeEtudiantDetailDto {
        if( this._groupeEtudiantDetailsElement == null )
            this._groupeEtudiantDetailsElement = new GroupeEtudiantDetailDto();
        return this._groupeEtudiantDetailsElement;
    }

    set groupeEtudiantDetailsElement(value: GroupeEtudiantDetailDto) {
        this._groupeEtudiantDetailsElement = value;
    }

}
