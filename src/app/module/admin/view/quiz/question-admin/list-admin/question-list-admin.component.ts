import {Component, OnInit} from '@angular/core';
import {QuestionService} from 'src/app/controller/service/Question.service';
import {QuestionDto} from 'src/app/controller/model/Question.model';
import {QuestionCriteria} from 'src/app/controller/criteria/QuestionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { TypeDeQuestionService } from 'src/app/controller/service/TypeDeQuestion.service';
import { QuizService } from 'src/app/controller/service/Quiz.service';
import { HomeWorkService } from 'src/app/controller/service/HomeWork.service';

import {QuizDto} from 'src/app/controller/model/Quiz.model';
import {TypeDeQuestionDto} from 'src/app/controller/model/TypeDeQuestion.model';
import {ReponseDto} from 'src/app/controller/model/Reponse.model';
import {HomeWorkDto} from 'src/app/controller/model/HomeWork.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-question-list-admin',
  templateUrl: './question-list-admin.component.html'
})
export class QuestionListAdminComponent extends AbstractListController<QuestionDto, QuestionCriteria, QuestionService>  implements OnInit {

    fileName = 'Question';

    typeDeQuestions :Array<TypeDeQuestionDto>;
    quizs :Array<QuizDto>;
    homeWorks :Array<HomeWorkDto>;
  
    constructor(datePipe: DatePipe, questionService: QuestionService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private typeDeQuestionService: TypeDeQuestionService, private quizService: QuizService, private homeWorkService: HomeWorkService) {
        super(datePipe, questionService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadTypeDeQuestion();
      this.loadQuiz();
      this.loadHomeWork();
    }

    public async loadQuestions(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Question', 'list');
        isPermistted ? this.service.findAll().subscribe(questions => this.items = questions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'urlImg', header: 'Url img'},
            {field: 'urlVideo', header: 'Url video'},
            {field: 'numero', header: 'Numero'},
            {field: 'pointReponseJuste', header: 'Point reponse juste'},
            {field: 'pointReponsefausse', header: 'Point reponsefausse'},
            {field: 'typeDeQuestion?.lib', header: 'Type de question'},
            {field: 'quiz?.lib', header: 'Quiz'},
            {field: 'homeWork?.libelle', header: 'Home work'},
        ];
    }


    public async loadTypeDeQuestion(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Question', 'list');
        isPermistted ? this.typeDeQuestionService.findAllOptimized().subscribe(typeDeQuestions => this.typeDeQuestions = typeDeQuestions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadQuiz(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Question', 'list');
        isPermistted ? this.quizService.findAllOptimized().subscribe(quizs => this.quizs = quizs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadHomeWork(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Question', 'list');
        isPermistted ? this.homeWorkService.findAllOptimized().subscribe(homeWorks => this.homeWorks = homeWorks,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: QuestionDto) {
        if (res.reponses != null) {
             res.reponses.forEach(d => { d.question = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Libelle': e.libelle ,
                 'Url img': e.urlImg ,
                 'Url video': e.urlVideo ,
                 'Numero': e.numero ,
                 'Point reponse juste': e.pointReponseJuste ,
                 'Point reponsefausse': e.pointReponsefausse ,
                'Type de question': e.typeDeQuestion?.lib ,
                'Quiz': e.quiz?.lib ,
                'Home work': e.homeWork?.libelle ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Url img': this.criteria.urlImg ? this.criteria.urlImg : environment.emptyForExport ,
            'Url video': this.criteria.urlVideo ? this.criteria.urlVideo : environment.emptyForExport ,
            'Numero Min': this.criteria.numeroMin ? this.criteria.numeroMin : environment.emptyForExport ,
            'Numero Max': this.criteria.numeroMax ? this.criteria.numeroMax : environment.emptyForExport ,
            'Point reponse juste Min': this.criteria.pointReponseJusteMin ? this.criteria.pointReponseJusteMin : environment.emptyForExport ,
            'Point reponse juste Max': this.criteria.pointReponseJusteMax ? this.criteria.pointReponseJusteMax : environment.emptyForExport ,
            'Point reponsefausse Min': this.criteria.pointReponsefausseMin ? this.criteria.pointReponsefausseMin : environment.emptyForExport ,
            'Point reponsefausse Max': this.criteria.pointReponsefausseMax ? this.criteria.pointReponsefausseMax : environment.emptyForExport ,
        //'Type de question': this.criteria.typeDeQuestion?.lib ? this.criteria.typeDeQuestion?.lib : environment.emptyForExport ,
        //'Quiz': this.criteria.quiz?.lib ? this.criteria.quiz?.lib : environment.emptyForExport ,
        //'Home work': this.criteria.homeWork?.libelle ? this.criteria.homeWork?.libelle : environment.emptyForExport ,
        }];
      }
}
