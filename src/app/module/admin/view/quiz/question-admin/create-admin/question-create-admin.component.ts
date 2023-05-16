import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {QuestionService} from 'src/app/controller/service/Question.service';
import {QuestionDto} from 'src/app/controller/model/Question.model';
import {QuestionCriteria} from 'src/app/controller/criteria/QuestionCriteria.model';
import {QuizDto} from 'src/app/controller/model/Quiz.model';
import {QuizService} from 'src/app/controller/service/Quiz.service';
import {ReponseDto} from 'src/app/controller/model/Reponse.model';
import {ReponseService} from 'src/app/controller/service/Reponse.service';
import {HomeWorkDto} from 'src/app/controller/model/HomeWork.model';
import {HomeWorkService} from 'src/app/controller/service/HomeWork.service';
import {EtatReponseDto} from 'src/app/controller/model/EtatReponse.model';
import {EtatReponseService} from 'src/app/controller/service/EtatReponse.service';
import {TypeDeQuestionDto} from 'src/app/controller/model/TypeDeQuestion.model';
import {TypeDeQuestionService} from 'src/app/controller/service/TypeDeQuestion.service';
@Component({
  selector: 'app-question-create-admin',
  templateUrl: './question-create-admin.component.html'
})
export class QuestionCreateAdminComponent extends AbstractCreateController<QuestionDto, QuestionCriteria, QuestionService>  implements OnInit {

    private _reponsesElement = new ReponseDto();


   private _validQuestionRef = true;
    private _validTypeDeQuestionRef = true;
    private _validTypeDeQuestionLib = true;
    private _validReponsesRef = true;
    private _validReponsesLib = true;
    private _validQuizRef = true;
    private _validQuizLib = true;
    private _validHomeWorkLibelle = true;

    constructor(private datePipe: DatePipe, private questionService: QuestionService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  
, private quizService: QuizService, private reponseService: ReponseService, private homeWorkService: HomeWorkService, private etatReponseService: EtatReponseService, private typeDeQuestionService: TypeDeQuestionService
    ) {
        super(datePipe, questionService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.reponsesElement.etatReponse = new EtatReponseDto();
        this.etatReponseService.findAll().subscribe((data) => this.etatReponses = data);
    this.typeDeQuestion = new TypeDeQuestionDto();
    this.typeDeQuestionService.findAll().subscribe((data) => this.typeDeQuestions = data);
    this.quiz = new QuizDto();
    this.quizService.findAll().subscribe((data) => this.quizs = data);
    this.homeWork = new HomeWorkDto();
    this.homeWorkService.findAll().subscribe((data) => this.homeWorks = data);
}



    validateReponses(){
        this.errorMessages = new Array();
        this.validateReponsesRef();
        this.validateReponsesLib();
    }


    public setValidation(value: boolean){
        this.validQuestionRef = value;
        this.validReponsesRef = value;
        this.validReponsesLib = value;
    }

    public addReponses() {
        if( this.item.reponses == null )
            this.item.reponses = new Array<ReponseDto>();
       this.validateReponses();
       if (this.errorMessages.length === 0) {
              this.item.reponses.push({... this.reponsesElement});
              this.reponsesElement = new ReponseDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deleteReponse(p: ReponseDto) {
        this.item.reponses.forEach((element, index) => {
            if (element === p) { this.item.reponses.splice(index, 1); }
        });
    }

    public editReponse(p: ReponseDto) {
        this.reponsesElement = {... p};
        this.activeTab = 0;
    }


    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateQuestionRef();
    }

    public validateQuestionRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validQuestionRef = false;
        } else {
            this.validQuestionRef = true;
        }
    }

    public validateReponsesRef(){
        if (this.reponsesElement.ref == null) {
            this.errorMessages.push('Ref de la reponse est  invalide');
            this.validReponsesRef = false;
        } else {
            this.validReponsesRef = true;
        }
    }
    public validateReponsesLib(){
        if (this.reponsesElement.lib == null) {
            this.errorMessages.push('Lib de la reponse est  invalide');
            this.validReponsesLib = false;
        } else {
            this.validReponsesLib = true;
        }
    }

    public async openCreateQuiz(quiz: string) {
    const isPermistted = await this.roleService.isPermitted('Quiz', 'add');
    if(isPermistted) {
         this.quiz = new QuizDto();
         this.createQuizDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateEtatReponse(etatReponse: string) {
    const isPermistted = await this.roleService.isPermitted('EtatReponse', 'add');
    if(isPermistted) {
         this.etatReponse = new EtatReponseDto();
         this.createEtatReponseDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateTypeDeQuestion(typeDeQuestion: string) {
    const isPermistted = await this.roleService.isPermitted('TypeDeQuestion', 'add');
    if(isPermistted) {
         this.typeDeQuestion = new TypeDeQuestionDto();
         this.createTypeDeQuestionDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
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
    get etatReponse(): EtatReponseDto {
        return this.etatReponseService.item;
    }
    set etatReponse(value: EtatReponseDto) {
        this.etatReponseService.item = value;
    }
    get etatReponses(): Array<EtatReponseDto> {
        return this.etatReponseService.items;
    }
    set etatReponses(value: Array<EtatReponseDto>) {
        this.etatReponseService.items = value;
    }
    get createEtatReponseDialog(): boolean {
       return this.etatReponseService.createDialog;
    }
    set createEtatReponseDialog(value: boolean) {
        this.etatReponseService.createDialog= value;
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



    get validQuestionRef(): boolean {
        return this._validQuestionRef;
    }

    set validQuestionRef(value: boolean) {
         this._validQuestionRef = value;
    }

    get validTypeDeQuestionRef(): boolean {
        return this._validTypeDeQuestionRef;
    }
    set validTypeDeQuestionRef(value: boolean) {
        this._validTypeDeQuestionRef = value;
    }
    get validTypeDeQuestionLib(): boolean {
        return this._validTypeDeQuestionLib;
    }
    set validTypeDeQuestionLib(value: boolean) {
        this._validTypeDeQuestionLib = value;
    }
    get validReponsesRef(): boolean {
        return this._validReponsesRef;
    }
    set validReponsesRef(value: boolean) {
        this._validReponsesRef = value;
    }
    get validReponsesLib(): boolean {
        return this._validReponsesLib;
    }
    set validReponsesLib(value: boolean) {
        this._validReponsesLib = value;
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
    get validHomeWorkLibelle(): boolean {
        return this._validHomeWorkLibelle;
    }
    set validHomeWorkLibelle(value: boolean) {
        this._validHomeWorkLibelle = value;
    }

    get reponsesElement(): ReponseDto {
        if( this._reponsesElement == null )
            this._reponsesElement = new ReponseDto();
        return this._reponsesElement;
    }

    set reponsesElement(value: ReponseDto) {
        this._reponsesElement = value;
    }

}
