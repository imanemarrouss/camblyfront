import {Component, OnInit} from '@angular/core';
import {ReponseEtudiantService} from 'src/app/controller/service/ReponseEtudiant.service';
import {ReponseEtudiantDto} from 'src/app/controller/model/ReponseEtudiant.model';
import {ReponseEtudiantCriteria} from 'src/app/controller/criteria/ReponseEtudiantCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { ReponseService } from 'src/app/controller/service/Reponse.service';
import { QuizEtudiantService } from 'src/app/controller/service/QuizEtudiant.service';
import { QuestionService } from 'src/app/controller/service/Question.service';

import {QuizEtudiantDto} from 'src/app/controller/model/QuizEtudiant.model';
import {QuestionDto} from 'src/app/controller/model/Question.model';
import {ReponseDto} from 'src/app/controller/model/Reponse.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-reponse-etudiant-list-admin',
  templateUrl: './reponse-etudiant-list-admin.component.html'
})
export class ReponseEtudiantListAdminComponent extends AbstractListController<ReponseEtudiantDto, ReponseEtudiantCriteria, ReponseEtudiantService>  implements OnInit {

    fileName = 'ReponseEtudiant';

    reponses :Array<ReponseDto>;
    quizEtudiants :Array<QuizEtudiantDto>;
    questions :Array<QuestionDto>;
  
    constructor(datePipe: DatePipe, reponseEtudiantService: ReponseEtudiantService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private reponseService: ReponseService, private quizEtudiantService: QuizEtudiantService, private questionService: QuestionService) {
        super(datePipe, reponseEtudiantService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadReponse();
      this.loadQuizEtudiant();
      this.loadQuestion();
    }

    public async loadReponseEtudiants(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ReponseEtudiant', 'list');
        isPermistted ? this.service.findAll().subscribe(reponseEtudiants => this.items = reponseEtudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'reponse?.lib', header: 'Reponse'},
            {field: 'answer', header: 'Answer'},
            {field: 'quizEtudiant?.ref', header: 'Quiz etudiant'},
            {field: 'note', header: 'Note'},
            {field: 'question?.libelle', header: 'Question'},
        ];
    }


    public async loadReponse(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ReponseEtudiant', 'list');
        isPermistted ? this.reponseService.findAllOptimized().subscribe(reponses => this.reponses = reponses,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadQuizEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ReponseEtudiant', 'list');
        isPermistted ? this.quizEtudiantService.findAllOptimized().subscribe(quizEtudiants => this.quizEtudiants = quizEtudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadQuestion(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ReponseEtudiant', 'list');
        isPermistted ? this.questionService.findAllOptimized().subscribe(questions => this.questions = questions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: ReponseEtudiantDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                'Reponse': e.reponse?.lib ,
                 'Answer': e.answer ,
                'Quiz etudiant': e.quizEtudiant?.ref ,
                 'Note': e.note ,
                'Question': e.question?.libelle ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
        //'Reponse': this.criteria.reponse?.lib ? this.criteria.reponse?.lib : environment.emptyForExport ,
            'Answer': this.criteria.answer ? this.criteria.answer : environment.emptyForExport ,
        //'Quiz etudiant': this.criteria.quizEtudiant?.ref ? this.criteria.quizEtudiant?.ref : environment.emptyForExport ,
            'Note Min': this.criteria.noteMin ? this.criteria.noteMin : environment.emptyForExport ,
            'Note Max': this.criteria.noteMax ? this.criteria.noteMax : environment.emptyForExport ,
        //'Question': this.criteria.question?.libelle ? this.criteria.question?.libelle : environment.emptyForExport ,
        }];
      }
}
