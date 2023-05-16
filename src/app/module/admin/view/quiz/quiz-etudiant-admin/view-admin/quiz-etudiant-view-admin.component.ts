import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {QuizEtudiantService} from 'src/app/controller/service/QuizEtudiant.service';
import {QuizEtudiantDto} from 'src/app/controller/model/QuizEtudiant.model';
import {QuizEtudiantCriteria} from 'src/app/controller/criteria/QuizEtudiantCriteria.model';

import {QuizDto} from 'src/app/controller/model/Quiz.model';
import {QuizService} from 'src/app/controller/service/Quiz.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {ReponseDto} from 'src/app/controller/model/Reponse.model';
import {ReponseService} from 'src/app/controller/service/Reponse.service';
import {QuestionDto} from 'src/app/controller/model/Question.model';
import {QuestionService} from 'src/app/controller/service/Question.service';
import {ReponseEtudiantDto} from 'src/app/controller/model/ReponseEtudiant.model';
import {ReponseEtudiantService} from 'src/app/controller/service/ReponseEtudiant.service';
@Component({
  selector: 'app-quiz-etudiant-view-admin',
  templateUrl: './quiz-etudiant-view-admin.component.html'
})
export class QuizEtudiantViewAdminComponent extends AbstractViewController<QuizEtudiantDto, QuizEtudiantCriteria, QuizEtudiantService> implements OnInit {

    reponseEtudiants = new ReponseEtudiantDto();
    reponseEtudiantss: Array<ReponseEtudiantDto> = [];

    constructor(private datePipe: DatePipe, private quizEtudiantService: QuizEtudiantService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private quizService: QuizService, private etudiantService: EtudiantService, private reponseService: ReponseService, private questionService: QuestionService, private reponseEtudiantService: ReponseEtudiantService
    ){
        super(datePipe, quizEtudiantService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.reponseEtudiants.reponse = new ReponseDto();
        this.reponseService.findAll().subscribe((data) => this.reponses = data);
        this.reponseEtudiants.question = new QuestionDto();
        this.questionService.findAll().subscribe((data) => this.questions = data);
        this.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
        this.quiz = new QuizDto();
        this.quizService.findAll().subscribe((data) => this.quizs = data);
    }


    get reponse(): ReponseDto {
       return this.reponseService.item;
    }
    set reponse(value: ReponseDto) {
        this.reponseService.item = value;
    }
    get reponses():Array<ReponseDto> {
       return this.reponseService.items;
    }
    set reponses(value: Array<ReponseDto>) {
        this.reponseService.items = value;
    }
    get question(): QuestionDto {
       return this.questionService.item;
    }
    set question(value: QuestionDto) {
        this.questionService.item = value;
    }
    get questions():Array<QuestionDto> {
       return this.questionService.items;
    }
    set questions(value: Array<QuestionDto>) {
        this.questionService.items = value;
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
    get etudiant(): EtudiantDto {
       return this.etudiantService.item;
    }
    set etudiant(value: EtudiantDto) {
        this.etudiantService.item = value;
    }
    get etudiants():Array<EtudiantDto> {
       return this.etudiantService.items;
    }
    set etudiants(value: Array<EtudiantDto>) {
        this.etudiantService.items = value;
    }


}
