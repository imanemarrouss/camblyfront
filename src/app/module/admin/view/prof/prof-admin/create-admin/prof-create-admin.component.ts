import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ProfService} from 'src/app/controller/service/Prof.service';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfCriteria} from 'src/app/controller/criteria/ProfCriteria.model';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {CategorieProfDto} from 'src/app/controller/model/CategorieProf.model';
import {CategorieProfService} from 'src/app/controller/service/CategorieProf.service';
import {EtudiantClassRoomDto} from 'src/app/controller/model/EtudiantClassRoom.model';
import {EtudiantClassRoomService} from 'src/app/controller/service/EtudiantClassRoom.service';
import {RecommendTeacherDto} from 'src/app/controller/model/RecommendTeacher.model';
import {RecommendTeacherService} from 'src/app/controller/service/RecommendTeacher.service';
import {QuizClassRoomDto} from 'src/app/controller/model/QuizClassRoom.model';
import {QuizClassRoomService} from 'src/app/controller/service/QuizClassRoom.service';
import {QuizDto} from 'src/app/controller/model/Quiz.model';
import {QuizService} from 'src/app/controller/service/Quiz.service';
import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {ParcoursService} from 'src/app/controller/service/Parcours.service';
import {TypeTeacherDto} from 'src/app/controller/model/TypeTeacher.model';
import {TypeTeacherService} from 'src/app/controller/service/TypeTeacher.service';
import {TrancheHoraireProfDto} from 'src/app/controller/model/TrancheHoraireProf.model';
import {TrancheHoraireProfService} from 'src/app/controller/service/TrancheHoraireProf.service';
import {ClassRoomDto} from 'src/app/controller/model/ClassRoom.model';
import {ClassRoomService} from 'src/app/controller/service/ClassRoom.service';
@Component({
  selector: 'app-prof-create-admin',
  templateUrl: './prof-create-admin.component.html'
})
export class ProfCreateAdminComponent extends AbstractCreateController<ProfDto, ProfCriteria, ProfService>  implements OnInit {

    private _trancheHoraireProfsElement = new TrancheHoraireProfDto();
    private _classRoomsElement = new ClassRoomDto();
    private _recommendTeachersElement = new RecommendTeacherDto();


   private _validProfRef = true;
    private _validParcoursCode = true;
    private _validParcoursLibelle = true;
    private _validCategorieProfCode = true;
    private _validClassRoomsLibelle = true;
    private _validRecommendTeachersRef = true;
    private _validTypeTeacherLibelle = true;
    private _validTypeTeacherCode = true;
    private _etudiantClassRooms: Array<EtudiantClassRoomDto> = [];
    private _quizClassRooms: Array<QuizClassRoomDto> = [];

    constructor(private datePipe: DatePipe, private profService: ProfService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  
, private quizService: QuizService, private classRoomService: ClassRoomService, private etudiantService: EtudiantService, private categorieProfService: CategorieProfService, private parcoursService: ParcoursService, private typeTeacherService: TypeTeacherService, private recommendTeacherService: RecommendTeacherService, private trancheHoraireProfService: TrancheHoraireProfService
    ) {
        super(datePipe, profService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
         this.etudiantService.findAll().subscribe(data => this.prepareEtudiantClassRooms(data));
         this.quizService.findAll().subscribe(data => this.prepareQuizClassRooms(data));
    this.parcours = new ParcoursDto();
    this.parcoursService.findAll().subscribe((data) => this.parcourss = data);
    this.categorieProf = new CategorieProfDto();
    this.categorieProfService.findAll().subscribe((data) => this.categorieProfs = data);
    this.typeTeacher = new TypeTeacherDto();
    this.typeTeacherService.findAll().subscribe((data) => this.typeTeachers = data);
}


   prepareEtudiantClassRooms(etudiants: Array<EtudiantDto>): void{
        if( etudiants != null){
            etudiants.forEach(e => {
            const etudiantClassRoom = new EtudiantClassRoomDto();
            etudiantClassRoom.etudiant = e;
            this.etudiantClassRooms.push(etudiantClassRoom);
            });
        }
   }
   prepareQuizClassRooms(quizs: Array<QuizDto>): void{
        if( quizs != null){
            quizs.forEach(e => {
            const quizClassRoom = new QuizClassRoomDto();
            quizClassRoom.quiz = e;
            this.quizClassRooms.push(quizClassRoom);
            });
        }
   }

    validateTrancheHoraireProfs(){
        this.errorMessages = new Array();
    }
    validateClassRooms(){
        this.errorMessages = new Array();
        this.validateClassRoomsLibelle();
    }
    validateRecommendTeachers(){
        this.errorMessages = new Array();
        this.validateRecommendTeachersRef();
    }


    public setValidation(value: boolean){
        this.validProfRef = value;
        this.validClassRoomsLibelle = value;
        this.validRecommendTeachersRef = value;
    }

    public addTrancheHoraireProfs() {
        if( this.item.trancheHoraireProfs == null )
            this.item.trancheHoraireProfs = new Array<TrancheHoraireProfDto>();
       this.validateTrancheHoraireProfs();
       if (this.errorMessages.length === 0) {
              this.item.trancheHoraireProfs.push({... this.trancheHoraireProfsElement});
              this.trancheHoraireProfsElement = new TrancheHoraireProfDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deleteTrancheHoraireProf(p: TrancheHoraireProfDto) {
        this.item.trancheHoraireProfs.forEach((element, index) => {
            if (element === p) { this.item.trancheHoraireProfs.splice(index, 1); }
        });
    }

    public editTrancheHoraireProf(p: TrancheHoraireProfDto) {
        this.trancheHoraireProfsElement = {... p};
        this.activeTab = 0;
    }
    public addClassRooms() {
        if( this.item.classRooms == null )
            this.item.classRooms = new Array<ClassRoomDto>();
       this.validateClassRooms();
       if (this.errorMessages.length === 0) {
              this.item.classRooms.push({... this.classRoomsElement});
              this.classRoomsElement = new ClassRoomDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deleteClassRoom(p: ClassRoomDto) {
        this.item.classRooms.forEach((element, index) => {
            if (element === p) { this.item.classRooms.splice(index, 1); }
        });
    }

    public editClassRoom(p: ClassRoomDto) {
        this.classRoomsElement = {... p};
        this.activeTab = 0;
    }
    public addRecommendTeachers() {
        if( this.item.recommendTeachers == null )
            this.item.recommendTeachers = new Array<RecommendTeacherDto>();
       this.validateRecommendTeachers();
       if (this.errorMessages.length === 0) {
              this.item.recommendTeachers.push({... this.recommendTeachersElement});
              this.recommendTeachersElement = new RecommendTeacherDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deleteRecommendTeacher(p: RecommendTeacherDto) {
        this.item.recommendTeachers.forEach((element, index) => {
            if (element === p) { this.item.recommendTeachers.splice(index, 1); }
        });
    }

    public editRecommendTeacher(p: RecommendTeacherDto) {
        this.recommendTeachersElement = {... p};
        this.activeTab = 0;
    }


    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateProfRef();
    }

    public validateProfRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validProfRef = false;
        } else {
            this.validProfRef = true;
        }
    }

    public validateClassRoomsLibelle(){
        if (this.classRoomsElement.libelle == null) {
            this.errorMessages.push('Libelle de la classRoom est  invalide');
            this.validClassRoomsLibelle = false;
        } else {
            this.validClassRoomsLibelle = true;
        }
    }
    public validateRecommendTeachersRef(){
        if (this.recommendTeachersElement.ref == null) {
            this.errorMessages.push('Ref de la recommendTeacher est  invalide');
            this.validRecommendTeachersRef = false;
        } else {
            this.validRecommendTeachersRef = true;
        }
    }

    public async openCreateTypeTeacher(typeTeacher: string) {
    const isPermistted = await this.roleService.isPermitted('TypeTeacher', 'add');
    if(isPermistted) {
         this.typeTeacher = new TypeTeacherDto();
         this.createTypeTeacherDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateCategorieProf(categorieProf: string) {
    const isPermistted = await this.roleService.isPermitted('CategorieProf', 'add');
    if(isPermistted) {
         this.categorieProf = new CategorieProfDto();
         this.createCategorieProfDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
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
    get typeTeacher(): TypeTeacherDto {
        return this.typeTeacherService.item;
    }
    set typeTeacher(value: TypeTeacherDto) {
        this.typeTeacherService.item = value;
    }
    get typeTeachers(): Array<TypeTeacherDto> {
        return this.typeTeacherService.items;
    }
    set typeTeachers(value: Array<TypeTeacherDto>) {
        this.typeTeacherService.items = value;
    }
    get createTypeTeacherDialog(): boolean {
       return this.typeTeacherService.createDialog;
    }
    set createTypeTeacherDialog(value: boolean) {
        this.typeTeacherService.createDialog= value;
    }
    get categorieProf(): CategorieProfDto {
        return this.categorieProfService.item;
    }
    set categorieProf(value: CategorieProfDto) {
        this.categorieProfService.item = value;
    }
    get categorieProfs(): Array<CategorieProfDto> {
        return this.categorieProfService.items;
    }
    set categorieProfs(value: Array<CategorieProfDto>) {
        this.categorieProfService.items = value;
    }
    get createCategorieProfDialog(): boolean {
       return this.categorieProfService.createDialog;
    }
    set createCategorieProfDialog(value: boolean) {
        this.categorieProfService.createDialog= value;
    }


    get etudiantClassRooms(): Array<EtudiantClassRoomDto> {
        if( this._etudiantClassRooms == null )
            this._etudiantClassRooms = new Array();
        return this._etudiantClassRooms;
    }

    set etudiantClassRooms(value: Array<EtudiantClassRoomDto>) {
        this._etudiantClassRooms = value;
    }
    get quizClassRooms(): Array<QuizClassRoomDto> {
        if( this._quizClassRooms == null )
            this._quizClassRooms = new Array();
        return this._quizClassRooms;
    }

    set quizClassRooms(value: Array<QuizClassRoomDto>) {
        this._quizClassRooms = value;
    }

    get validProfRef(): boolean {
        return this._validProfRef;
    }

    set validProfRef(value: boolean) {
         this._validProfRef = value;
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
    get validCategorieProfCode(): boolean {
        return this._validCategorieProfCode;
    }
    set validCategorieProfCode(value: boolean) {
        this._validCategorieProfCode = value;
    }
    get validClassRoomsLibelle(): boolean {
        return this._validClassRoomsLibelle;
    }
    set validClassRoomsLibelle(value: boolean) {
        this._validClassRoomsLibelle = value;
    }
    get validRecommendTeachersRef(): boolean {
        return this._validRecommendTeachersRef;
    }
    set validRecommendTeachersRef(value: boolean) {
        this._validRecommendTeachersRef = value;
    }
    get validTypeTeacherLibelle(): boolean {
        return this._validTypeTeacherLibelle;
    }
    set validTypeTeacherLibelle(value: boolean) {
        this._validTypeTeacherLibelle = value;
    }
    get validTypeTeacherCode(): boolean {
        return this._validTypeTeacherCode;
    }
    set validTypeTeacherCode(value: boolean) {
        this._validTypeTeacherCode = value;
    }

    get trancheHoraireProfsElement(): TrancheHoraireProfDto {
        if( this._trancheHoraireProfsElement == null )
            this._trancheHoraireProfsElement = new TrancheHoraireProfDto();
        return this._trancheHoraireProfsElement;
    }

    set trancheHoraireProfsElement(value: TrancheHoraireProfDto) {
        this._trancheHoraireProfsElement = value;
    }
    get classRoomsElement(): ClassRoomDto {
        if( this._classRoomsElement == null )
            this._classRoomsElement = new ClassRoomDto();
        return this._classRoomsElement;
    }

    set classRoomsElement(value: ClassRoomDto) {
        this._classRoomsElement = value;
    }
    get recommendTeachersElement(): RecommendTeacherDto {
        if( this._recommendTeachersElement == null )
            this._recommendTeachersElement = new RecommendTeacherDto();
        return this._recommendTeachersElement;
    }

    set recommendTeachersElement(value: RecommendTeacherDto) {
        this._recommendTeachersElement = value;
    }

}
