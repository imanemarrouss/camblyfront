import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
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
  selector: 'app-question-view-admin',
  templateUrl: './question-view-admin.component.html'
})
export class QuestionViewAdminComponent extends AbstractViewController<QuestionDto, QuestionCriteria, QuestionService> implements OnInit {

    reponses = new ReponseDto();
    reponsess: Array<ReponseDto> = [];

    constructor(private datePipe: DatePipe, private questionService: QuestionService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private quizService: QuizService, private reponseService: ReponseService, private homeWorkService: HomeWorkService, private etatReponseService: EtatReponseService, private typeDeQuestionService: TypeDeQuestionService
    ){
        super(datePipe, questionService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.reponses.etatReponse = new EtatReponseDto();
        this.etatReponseService.findAll().subscribe((data) => this.etatReponses = data);
        this.typeDeQuestion = new TypeDeQuestionDto();
        this.typeDeQuestionService.findAll().subscribe((data) => this.typeDeQuestions = data);
        this.quiz = new QuizDto();
        this.quizService.findAll().subscribe((data) => this.quizs = data);
        this.homeWork = new HomeWorkDto();
        this.homeWorkService.findAll().subscribe((data) => this.homeWorks = data);
    }


    get quiz(): QuizDto {
       return this.quizService.item;
    }
    set quiz(value: QuizDto) {
        this.quizService.item = value;
    }
    get quizs():Array<QuizDto> {
       return this.quizService.items;
    }
    set quizs(value: Array<QuizDto>) {
        this.quizService.items = value;
    }
    get etatReponse(): EtatReponseDto {
       return this.etatReponseService.item;
    }
    set etatReponse(value: EtatReponseDto) {
        this.etatReponseService.item = value;
    }
    get etatReponses():Array<EtatReponseDto> {
       return this.etatReponseService.items;
    }
    set etatReponses(value: Array<EtatReponseDto>) {
        this.etatReponseService.items = value;
    }
    get typeDeQuestion(): TypeDeQuestionDto {
       return this.typeDeQuestionService.item;
    }
    set typeDeQuestion(value: TypeDeQuestionDto) {
        this.typeDeQuestionService.item = value;
    }
    get typeDeQuestions():Array<TypeDeQuestionDto> {
       return this.typeDeQuestionService.items;
    }
    set typeDeQuestions(value: Array<TypeDeQuestionDto>) {
        this.typeDeQuestionService.items = value;
    }
    get homeWork(): HomeWorkDto {
       return this.homeWorkService.item;
    }
    set homeWork(value: HomeWorkDto) {
        this.homeWorkService.item = value;
    }
    get homeWorks():Array<HomeWorkDto> {
       return this.homeWorkService.items;
    }
    set homeWorks(value: Array<HomeWorkDto>) {
        this.homeWorkService.items = value;
    }


}
