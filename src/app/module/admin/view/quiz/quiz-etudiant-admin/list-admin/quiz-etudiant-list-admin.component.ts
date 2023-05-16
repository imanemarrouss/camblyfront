import {Component, OnInit} from '@angular/core';
import {QuizEtudiantService} from 'src/app/controller/service/QuizEtudiant.service';
import {QuizEtudiantDto} from 'src/app/controller/model/QuizEtudiant.model';
import {QuizEtudiantCriteria} from 'src/app/controller/criteria/QuizEtudiantCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { EtudiantService } from 'src/app/controller/service/Etudiant.service';
import { QuizService } from 'src/app/controller/service/Quiz.service';

import {QuizDto} from 'src/app/controller/model/Quiz.model';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {ReponseEtudiantDto} from 'src/app/controller/model/ReponseEtudiant.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-quiz-etudiant-list-admin',
  templateUrl: './quiz-etudiant-list-admin.component.html'
})
export class QuizEtudiantListAdminComponent extends AbstractListController<QuizEtudiantDto, QuizEtudiantCriteria, QuizEtudiantService>  implements OnInit {

    fileName = 'QuizEtudiant';

    etudiants :Array<EtudiantDto>;
    quizs :Array<QuizDto>;
  
    constructor(datePipe: DatePipe, quizEtudiantService: QuizEtudiantService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private etudiantService: EtudiantService, private quizService: QuizService) {
        super(datePipe, quizEtudiantService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadEtudiant();
      this.loadQuiz();
    }

    public async loadQuizEtudiants(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('QuizEtudiant', 'list');
        isPermistted ? this.service.findAll().subscribe(quizEtudiants => this.items = quizEtudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'etudiant?.ref', header: 'Etudiant'},
            {field: 'quiz?.lib', header: 'Quiz'},
            {field: 'note', header: 'Note'},
            {field: 'resultat', header: 'Resultat'},
            {field: 'questionCurrent', header: 'Question current'},
        ];
    }


    public async loadEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('QuizEtudiant', 'list');
        isPermistted ? this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadQuiz(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('QuizEtudiant', 'list');
        isPermistted ? this.quizService.findAllOptimized().subscribe(quizs => this.quizs = quizs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: QuizEtudiantDto) {
        if (res.reponseEtudiants != null) {
             res.reponseEtudiants.forEach(d => { d.quizEtudiant = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                'Etudiant': e.etudiant?.ref ,
                'Quiz': e.quiz?.lib ,
                 'Note': e.note ,
                 'Resultat': e.resultat ,
                 'Question current': e.questionCurrent ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
        //'Quiz': this.criteria.quiz?.lib ? this.criteria.quiz?.lib : environment.emptyForExport ,
            'Note Min': this.criteria.noteMin ? this.criteria.noteMin : environment.emptyForExport ,
            'Note Max': this.criteria.noteMax ? this.criteria.noteMax : environment.emptyForExport ,
            'Resultat': this.criteria.resultat ? this.criteria.resultat : environment.emptyForExport ,
            'Question current Min': this.criteria.questionCurrentMin ? this.criteria.questionCurrentMin : environment.emptyForExport ,
            'Question current Max': this.criteria.questionCurrentMax ? this.criteria.questionCurrentMax : environment.emptyForExport ,
        }];
      }
}
