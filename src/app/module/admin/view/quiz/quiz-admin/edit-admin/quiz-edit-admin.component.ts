import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {QuizService} from 'src/app/controller/service/Quiz.service';
import {QuizDto} from 'src/app/controller/model/Quiz.model';
import {QuizCriteria} from 'src/app/controller/criteria/QuizCriteria.model';


import {ReponseDto} from 'src/app/controller/model/Reponse.model';
import {ReponseService} from 'src/app/controller/service/Reponse.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {HomeWorkDto} from 'src/app/controller/model/HomeWork.model';
import {HomeWorkService} from 'src/app/controller/service/HomeWork.service';
import {QuizEtudiantDto} from 'src/app/controller/model/QuizEtudiant.model';
import {QuizEtudiantService} from 'src/app/controller/service/QuizEtudiant.service';
import {QuestionDto} from 'src/app/controller/model/Question.model';
import {QuestionService} from 'src/app/controller/service/Question.service';
import {ReponseEtudiantDto} from 'src/app/controller/model/ReponseEtudiant.model';
import {ReponseEtudiantService} from 'src/app/controller/service/ReponseEtudiant.service';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';
import {TypeDeQuestionDto} from 'src/app/controller/model/TypeDeQuestion.model';
import {TypeDeQuestionService} from 'src/app/controller/service/TypeDeQuestion.service';

@Component({
  selector: 'app-quiz-edit-admin',
  templateUrl: './quiz-edit-admin.component.html'
})
export class QuizEditAdminComponent extends AbstractEditController<QuizDto, QuizCriteria, QuizService>   implements OnInit {

    private _questionsElement = new QuestionDto();
    private _quizEtudiantsElement = new QuizEtudiantDto();

    private _validQuizRef = true;
    private _validQuizLib = true;

    private _validQuestionsRef = true;
    private _validQuizEtudiantsRef = true;
    private _validSectionCode = true;



    constructor(private datePipe: DatePipe, private quizService: QuizService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private etudiantService: EtudiantService, private questionService: QuestionService, private homeWorkService: HomeWorkService, private quizEtudiantService: QuizEtudiantService, private sectionService: SectionService, private typeDeQuestionService: TypeDeQuestionService
    ) {
        super(datePipe, quizService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.questionsElement.typeDeQuestion = new TypeDeQuestionDto();
        this.typeDeQuestionService.findAll().subscribe((data) => this.typeDeQuestions = data);
        this.questionsElement.homeWork = new HomeWorkDto();
        this.homeWorkService.findAll().subscribe((data) => this.homeWorks = data);

        this.quizEtudiantsElement.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);

    this.section = new SectionDto();
    this.sectionService.findAll().subscribe((data) => this.sections = data);
}

    public validateQuestions(){
        this.errorMessages = new Array();
        this.validateQuestionsRef();
    }
    public validateQuizEtudiants(){
        this.errorMessages = new Array();
        this.validateQuizEtudiantsRef();
    }
    public setValidation(value : boolean){
        this.validQuizRef = value;
        this.validQuizLib = value;
        this.validQuestionsRef = value;
        this.validQuizEtudiantsRef = value;
        }
   public addQuestions() {
        if( this.item.questions == null )
            this.item.questions = new Array<QuestionDto>();
       this.validateQuestions();
       if (this.errorMessages.length === 0) {
            if(this.questionsElement.id == null){
                this.item.questions.push(this.questionsElement);
            }else{
                const index = this.item.questions.findIndex(e => e.id == this.questionsElement.id);
                this.item.questions[index] = this.questionsElement;
            }
          this.questionsElement = new QuestionDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteQuestion(p: QuestionDto) {
        this.item.questions.forEach((element, index) => {
            if (element === p) { this.item.questions.splice(index, 1); }
        });
    }

    public editQuestion(p: QuestionDto) {
        this.questionsElement = {... p};
        this.activeTab = 0;
    }
   public addQuizEtudiants() {
        if( this.item.quizEtudiants == null )
            this.item.quizEtudiants = new Array<QuizEtudiantDto>();
       this.validateQuizEtudiants();
       if (this.errorMessages.length === 0) {
            if(this.quizEtudiantsElement.id == null){
                this.item.quizEtudiants.push(this.quizEtudiantsElement);
            }else{
                const index = this.item.quizEtudiants.findIndex(e => e.id == this.quizEtudiantsElement.id);
                this.item.quizEtudiants[index] = this.quizEtudiantsElement;
            }
          this.quizEtudiantsElement = new QuizEtudiantDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
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
        this.validateQuizRef();
        this.validateQuizLib();
    }
    public validateQuizRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validQuizRef = false;
        } else {
            this.validQuizRef = true;
        }
    }
    public validateQuizLib(){
        if (this.stringUtilService.isEmpty(this.item.lib)) {
            this.errorMessages.push('Lib non valide');
            this.validQuizLib = false;
        } else {
            this.validQuizLib = true;
        }
    }


    private validateQuestionsRef(){
        if (this.questionsElement.ref == null) {
        this.errorMessages.push('Ref de la question est  invalide');
            this.validQuestionsRef = false;
        } else {
            this.validQuestionsRef = true;
        }
    }
    private validateQuizEtudiantsRef(){
        if (this.quizEtudiantsElement.ref == null) {
        this.errorMessages.push('Ref de la quizEtudiant est  invalide');
            this.validQuizEtudiantsRef = false;
        } else {
            this.validQuizEtudiantsRef = true;
        }
    }

   public async openCreateTypeDeQuestion(typeDeQuestion: string) {
        const isPermistted = await this.roleService.isPermitted('TypeDeQuestion', 'edit');
        if(isPermistted) {
             this.typeDeQuestion = new TypeDeQuestionDto();
             this.createTypeDeQuestionDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get section(): SectionDto {
       return this.sectionService.item;
   }
  set section(value: SectionDto) {
        this.sectionService.item = value;
   }
   get sections(): Array<SectionDto> {
        return this.sectionService.items;
   }
   set sections(value: Array<SectionDto>) {
        this.sectionService.items = value;
   }
   get createSectionDialog(): boolean {
       return this.sectionService.createDialog;
   }
  set createSectionDialog(value: boolean) {
       this.sectionService.createDialog= value;
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
   get typeDeQuestion(): TypeDeQuestionDto {
       return this.typeDeQuestionService.item;
   }
  set typeDeQuestion(value: TypeDeQuestionDto) {
        this.typeDeQuestionService.item = value;
   }
   get typeDeQuestions(): Array<TypeDeQuestionDto> {
        return this.typeDeQuestionService.items;
   }
   set typeDeQuestions(value: Array<TypeDeQuestionDto>) {
        this.typeDeQuestionService.items = value;
   }
   get createTypeDeQuestionDialog(): boolean {
       return this.typeDeQuestionService.createDialog;
   }
  set createTypeDeQuestionDialog(value: boolean) {
       this.typeDeQuestionService.createDialog= value;
   }
   get homeWork(): HomeWorkDto {
       return this.homeWorkService.item;
   }
  set homeWork(value: HomeWorkDto) {
        this.homeWorkService.item = value;
   }
   get homeWorks(): Array<HomeWorkDto> {
        return this.homeWorkService.items;
   }
   set homeWorks(value: Array<HomeWorkDto>) {
        this.homeWorkService.items = value;
   }
   get createHomeWorkDialog(): boolean {
       return this.homeWorkService.createDialog;
   }
  set createHomeWorkDialog(value: boolean) {
       this.homeWorkService.createDialog= value;
   }

    get questionsElement(): QuestionDto {
        if( this._questionsElement == null )
            this._questionsElement = new QuestionDto();
         return this._questionsElement;
    }

    set questionsElement(value: QuestionDto) {
        this._questionsElement = value;
    }
    get quizEtudiantsElement(): QuizEtudiantDto {
        if( this._quizEtudiantsElement == null )
            this._quizEtudiantsElement = new QuizEtudiantDto();
         return this._quizEtudiantsElement;
    }

    set quizEtudiantsElement(value: QuizEtudiantDto) {
        this._quizEtudiantsElement = value;
    }

    get validQuizRef(): boolean {
        return this._validQuizRef;
    }
    set validQuizRef(value: boolean) {
        this._validQuizRef = value;
    }
    get validQuizLib(): boolean {
        return this._validQuizLib;
    }
    set validQuizLib(value: boolean) {
        this._validQuizLib = value;
    }

    get validQuestionsRef(): boolean {
        return this._validQuestionsRef;
    }
    set validQuestionsRef(value: boolean) {
        this._validQuestionsRef = value;
    }
    get validQuizEtudiantsRef(): boolean {
        return this._validQuizEtudiantsRef;
    }
    set validQuizEtudiantsRef(value: boolean) {
        this._validQuizEtudiantsRef = value;
    }
    get validSectionCode(): boolean {
        return this._validSectionCode;
    }
    set validSectionCode(value: boolean) {
        this._validSectionCode = value;
    }
}
