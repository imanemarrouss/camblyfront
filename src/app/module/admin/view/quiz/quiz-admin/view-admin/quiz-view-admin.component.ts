import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
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
  selector: 'app-quiz-view-admin',
  templateUrl: './quiz-view-admin.component.html'
})
export class QuizViewAdminComponent extends AbstractViewController<QuizDto, QuizCriteria, QuizService> implements OnInit {

    questions = new QuestionDto();
    questionss: Array<QuestionDto> = [];
    quizEtudiants = new QuizEtudiantDto();
    quizEtudiantss: Array<QuizEtudiantDto> = [];

    constructor(private datePipe: DatePipe, private quizService: QuizService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private etudiantService: EtudiantService, private questionService: QuestionService, private homeWorkService: HomeWorkService, private quizEtudiantService: QuizEtudiantService, private sectionService: SectionService, private typeDeQuestionService: TypeDeQuestionService
    ){
        super(datePipe, quizService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.questions.typeDeQuestion = new TypeDeQuestionDto();
        this.typeDeQuestionService.findAll().subscribe((data) => this.typeDeQuestions = data);
        this.questions.homeWork = new HomeWorkDto();
        this.homeWorkService.findAll().subscribe((data) => this.homeWorks = data);
        this.quizEtudiants.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
        this.section = new SectionDto();
        this.sectionService.findAll().subscribe((data) => this.sections = data);
    }


    get section(): SectionDto {
       return this.sectionService.item;
    }
    set section(value: SectionDto) {
        this.sectionService.item = value;
    }
    get sections():Array<SectionDto> {
       return this.sectionService.items;
    }
    set sections(value: Array<SectionDto>) {
        this.sectionService.items = value;
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
