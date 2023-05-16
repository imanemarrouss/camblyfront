import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {ReponseEtudiantService} from 'src/app/controller/service/ReponseEtudiant.service';
import {ReponseEtudiantDto} from 'src/app/controller/model/ReponseEtudiant.model';
import {ReponseEtudiantCriteria} from 'src/app/controller/criteria/ReponseEtudiantCriteria.model';


import {ReponseDto} from 'src/app/controller/model/Reponse.model';
import {ReponseService} from 'src/app/controller/service/Reponse.service';
import {QuestionDto} from 'src/app/controller/model/Question.model';
import {QuestionService} from 'src/app/controller/service/Question.service';
import {QuizEtudiantDto} from 'src/app/controller/model/QuizEtudiant.model';
import {QuizEtudiantService} from 'src/app/controller/service/QuizEtudiant.service';

@Component({
  selector: 'app-reponse-etudiant-edit-admin',
  templateUrl: './reponse-etudiant-edit-admin.component.html'
})
export class ReponseEtudiantEditAdminComponent extends AbstractEditController<ReponseEtudiantDto, ReponseEtudiantCriteria, ReponseEtudiantService>   implements OnInit {


    private _validReponseEtudiantRef = true;

    private _validReponseRef = true;
    private _validReponseLib = true;
    private _validQuizEtudiantRef = true;
    private _validQuestionRef = true;



    constructor(private datePipe: DatePipe, private reponseEtudiantService: ReponseEtudiantService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private reponseService: ReponseService, private questionService: QuestionService, private quizEtudiantService: QuizEtudiantService
    ) {
        super(datePipe, reponseEtudiantService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.reponse = new ReponseDto();
    this.reponseService.findAll().subscribe((data) => this.reponses = data);
    this.quizEtudiant = new QuizEtudiantDto();
    this.quizEtudiantService.findAll().subscribe((data) => this.quizEtudiants = data);
    this.question = new QuestionDto();
    this.questionService.findAll().subscribe((data) => this.questions = data);
}

    public setValidation(value : boolean){
        this.validReponseEtudiantRef = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateReponseEtudiantRef();
    }
    public validateReponseEtudiantRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validReponseEtudiantRef = false;
        } else {
            this.validReponseEtudiantRef = true;
        }
    }



   public async openCreateReponse(reponse: string) {
        const isPermistted = await this.roleService.isPermitted('Reponse', 'edit');
        if(isPermistted) {
             this.reponse = new ReponseDto();
             this.createReponseDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateQuestion(question: string) {
        const isPermistted = await this.roleService.isPermitted('Question', 'edit');
        if(isPermistted) {
             this.question = new QuestionDto();
             this.createQuestionDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateQuizEtudiant(quizEtudiant: string) {
        const isPermistted = await this.roleService.isPermitted('QuizEtudiant', 'edit');
        if(isPermistted) {
             this.quizEtudiant = new QuizEtudiantDto();
             this.createQuizEtudiantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get reponse(): ReponseDto {
       return this.reponseService.item;
   }
  set reponse(value: ReponseDto) {
        this.reponseService.item = value;
   }
   get reponses(): Array<ReponseDto> {
        return this.reponseService.items;
   }
   set reponses(value: Array<ReponseDto>) {
        this.reponseService.items = value;
   }
   get createReponseDialog(): boolean {
       return this.reponseService.createDialog;
   }
  set createReponseDialog(value: boolean) {
       this.reponseService.createDialog= value;
   }
   get question(): QuestionDto {
       return this.questionService.item;
   }
  set question(value: QuestionDto) {
        this.questionService.item = value;
   }
   get questions(): Array<QuestionDto> {
        return this.questionService.items;
   }
   set questions(value: Array<QuestionDto>) {
        this.questionService.items = value;
   }
   get createQuestionDialog(): boolean {
       return this.questionService.createDialog;
   }
  set createQuestionDialog(value: boolean) {
       this.questionService.createDialog= value;
   }
   get quizEtudiant(): QuizEtudiantDto {
       return this.quizEtudiantService.item;
   }
  set quizEtudiant(value: QuizEtudiantDto) {
        this.quizEtudiantService.item = value;
   }
   get quizEtudiants(): Array<QuizEtudiantDto> {
        return this.quizEtudiantService.items;
   }
   set quizEtudiants(value: Array<QuizEtudiantDto>) {
        this.quizEtudiantService.items = value;
   }
   get createQuizEtudiantDialog(): boolean {
       return this.quizEtudiantService.createDialog;
   }
  set createQuizEtudiantDialog(value: boolean) {
       this.quizEtudiantService.createDialog= value;
   }


    get validReponseEtudiantRef(): boolean {
        return this._validReponseEtudiantRef;
    }
    set validReponseEtudiantRef(value: boolean) {
        this._validReponseEtudiantRef = value;
    }

    get validReponseRef(): boolean {
        return this._validReponseRef;
    }
    set validReponseRef(value: boolean) {
        this._validReponseRef = value;
    }
    get validReponseLib(): boolean {
        return this._validReponseLib;
    }
    set validReponseLib(value: boolean) {
        this._validReponseLib = value;
    }
    get validQuizEtudiantRef(): boolean {
        return this._validQuizEtudiantRef;
    }
    set validQuizEtudiantRef(value: boolean) {
        this._validQuizEtudiantRef = value;
    }
    get validQuestionRef(): boolean {
        return this._validQuestionRef;
    }
    set validQuestionRef(value: boolean) {
        this._validQuestionRef = value;
    }
}
