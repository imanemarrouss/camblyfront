import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {ClassRoomService} from 'src/app/controller/service/ClassRoom.service';
import {ClassRoomDto} from 'src/app/controller/model/ClassRoom.model';
import {ClassRoomCriteria} from 'src/app/controller/criteria/ClassRoomCriteria.model';


import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
import {QuizDto} from 'src/app/controller/model/Quiz.model';
import {QuizService} from 'src/app/controller/service/Quiz.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {EtudiantClassRoomDto} from 'src/app/controller/model/EtudiantClassRoom.model';
import {EtudiantClassRoomService} from 'src/app/controller/service/EtudiantClassRoom.service';
import {QuizClassRoomDto} from 'src/app/controller/model/QuizClassRoom.model';
import {QuizClassRoomService} from 'src/app/controller/service/QuizClassRoom.service';

@Component({
  selector: 'app-class-room-edit-admin',
  templateUrl: './class-room-edit-admin.component.html'
})
export class ClassRoomEditAdminComponent extends AbstractEditController<ClassRoomDto, ClassRoomCriteria, ClassRoomService>   implements OnInit {

    private _etudiantClassRoomsElement = new EtudiantClassRoomDto();
    private _quizClassRoomsElement = new QuizClassRoomDto();

    private _validClassRoomLibelle = true;

    private _validProfRef = true;


    private _etudiantClassRooms: Array<EtudiantClassRoomDto> = [];
    private _quizClassRooms: Array<QuizClassRoomDto> = [];

    constructor(private datePipe: DatePipe, private classRoomService: ClassRoomService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private profService: ProfService, private quizService: QuizService, private etudiantService: EtudiantService, private etudiantClassRoomService: EtudiantClassRoomService, private quizClassRoomService: QuizClassRoomService
    ) {
        super(datePipe, classRoomService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.etudiantService.findAll().subscribe(data => this.prepareEtudiantClassRooms(data));
        this.etudiantClassRoomsElement.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);

        this.quizService.findAll().subscribe(data => this.prepareQuizClassRooms(data));
        this.quizClassRoomsElement.quiz = new QuizDto();
        this.quizService.findAll().subscribe((data) => this.quizs = data);

    this.prof = new ProfDto();
    this.profService.findAll().subscribe((data) => this.profs = data);
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
    public setValidation(value : boolean){
        this.validClassRoomLibelle = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateClassRoomLibelle();
    }
    public validateClassRoomLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validClassRoomLibelle = false;
        } else {
            this.validClassRoomLibelle = true;
        }
    }



   public async openCreateQuiz(quiz: string) {
        const isPermistted = await this.roleService.isPermitted('Quiz', 'edit');
        if(isPermistted) {
             this.quiz = new QuizDto();
             this.createQuizDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
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
    get etudiantClassRoomsElement(): EtudiantClassRoomDto {
        if( this._etudiantClassRoomsElement == null )
            this._etudiantClassRoomsElement = new EtudiantClassRoomDto();
         return this._etudiantClassRoomsElement;
    }

    set etudiantClassRoomsElement(value: EtudiantClassRoomDto) {
        this._etudiantClassRoomsElement = value;
    }
    get quizClassRoomsElement(): QuizClassRoomDto {
        if( this._quizClassRoomsElement == null )
            this._quizClassRoomsElement = new QuizClassRoomDto();
         return this._quizClassRoomsElement;
    }

    set quizClassRoomsElement(value: QuizClassRoomDto) {
        this._quizClassRoomsElement = value;
    }

    get validClassRoomLibelle(): boolean {
        return this._validClassRoomLibelle;
    }
    set validClassRoomLibelle(value: boolean) {
        this._validClassRoomLibelle = value;
    }

    get validProfRef(): boolean {
        return this._validProfRef;
    }
    set validProfRef(value: boolean) {
        this._validProfRef = value;
    }
}
