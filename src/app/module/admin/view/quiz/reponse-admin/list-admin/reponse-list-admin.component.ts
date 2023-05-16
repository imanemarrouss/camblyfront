import {Component, OnInit} from '@angular/core';
import {ReponseService} from 'src/app/controller/service/Reponse.service';
import {ReponseDto} from 'src/app/controller/model/Reponse.model';
import {ReponseCriteria} from 'src/app/controller/criteria/ReponseCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { EtatReponseService } from 'src/app/controller/service/EtatReponse.service';
import { QuestionService } from 'src/app/controller/service/Question.service';

import {EtatReponseDto} from 'src/app/controller/model/EtatReponse.model';
import {QuestionDto} from 'src/app/controller/model/Question.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-reponse-list-admin',
  templateUrl: './reponse-list-admin.component.html'
})
export class ReponseListAdminComponent extends AbstractListController<ReponseDto, ReponseCriteria, ReponseService>  implements OnInit {

    fileName = 'Reponse';

    etatReponses :Array<EtatReponseDto>;
    questions :Array<QuestionDto>;
  
    constructor(datePipe: DatePipe, reponseService: ReponseService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private etatReponseService: EtatReponseService, private questionService: QuestionService) {
        super(datePipe, reponseService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadEtatReponse();
      this.loadQuestion();
    }

    public async loadReponses(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Reponse', 'list');
        isPermistted ? this.service.findAll().subscribe(reponses => this.items = reponses,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'lib', header: 'Lib'},
            {field: 'etatReponse?.libelle', header: 'Etat reponse'},
            {field: 'numero', header: 'Numero'},
            {field: 'question?.libelle', header: 'Question'},
        ];
    }


    public async loadEtatReponse(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Reponse', 'list');
        isPermistted ? this.etatReponseService.findAllOptimized().subscribe(etatReponses => this.etatReponses = etatReponses,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadQuestion(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Reponse', 'list');
        isPermistted ? this.questionService.findAllOptimized().subscribe(questions => this.questions = questions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: ReponseDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Lib': e.lib ,
                'Etat reponse': e.etatReponse?.libelle ,
                 'Numero': e.numero ,
                'Question': e.question?.libelle ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Lib': this.criteria.lib ? this.criteria.lib : environment.emptyForExport ,
        //'Etat reponse': this.criteria.etatReponse?.libelle ? this.criteria.etatReponse?.libelle : environment.emptyForExport ,
            'Numero Min': this.criteria.numeroMin ? this.criteria.numeroMin : environment.emptyForExport ,
            'Numero Max': this.criteria.numeroMax ? this.criteria.numeroMax : environment.emptyForExport ,
        //'Question': this.criteria.question?.libelle ? this.criteria.question?.libelle : environment.emptyForExport ,
        }];
      }
}
