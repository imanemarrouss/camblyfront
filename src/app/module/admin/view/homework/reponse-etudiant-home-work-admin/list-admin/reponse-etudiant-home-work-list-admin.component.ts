import {Component, OnInit} from '@angular/core';
import {ReponseEtudiantHomeWorkService} from 'src/app/controller/service/ReponseEtudiantHomeWork.service';
import {ReponseEtudiantHomeWorkDto} from 'src/app/controller/model/ReponseEtudiantHomeWork.model';
import {ReponseEtudiantHomeWorkCriteria} from 'src/app/controller/criteria/ReponseEtudiantHomeWorkCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { HoweWorkQSTReponseService } from 'src/app/controller/service/HoweWorkQSTReponse.service';
import { HomeWorkEtudiantService } from 'src/app/controller/service/HomeWorkEtudiant.service';
import { HomeWorkQuestionService } from 'src/app/controller/service/HomeWorkQuestion.service';

import {HoweWorkQSTReponseDto} from 'src/app/controller/model/HoweWorkQSTReponse.model';
import {HomeWorkEtudiantDto} from 'src/app/controller/model/HomeWorkEtudiant.model';
import {HomeWorkQuestionDto} from 'src/app/controller/model/HomeWorkQuestion.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-reponse-etudiant-home-work-list-admin',
  templateUrl: './reponse-etudiant-home-work-list-admin.component.html'
})
export class ReponseEtudiantHomeWorkListAdminComponent extends AbstractListController<ReponseEtudiantHomeWorkDto, ReponseEtudiantHomeWorkCriteria, ReponseEtudiantHomeWorkService>  implements OnInit {

    fileName = 'ReponseEtudiantHomeWork';

    howeWorkQSTReponses :Array<HoweWorkQSTReponseDto>;
    homeWorkEtudiants :Array<HomeWorkEtudiantDto>;
    homeWorkQuestions :Array<HomeWorkQuestionDto>;
  
    constructor(datePipe: DatePipe, reponseEtudiantHomeWorkService: ReponseEtudiantHomeWorkService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private howeWorkQSTReponseService: HoweWorkQSTReponseService, private homeWorkEtudiantService: HomeWorkEtudiantService, private homeWorkQuestionService: HomeWorkQuestionService) {
        super(datePipe, reponseEtudiantHomeWorkService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadHoweWorkQSTReponse();
      this.loadHomeWorkEtudiant();
      this.loadHomeWorkQuestion();
    }

    public async loadReponseEtudiantHomeWorks(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ReponseEtudiantHomeWork', 'list');
        isPermistted ? this.service.findAll().subscribe(reponseEtudiantHomeWorks => this.items = reponseEtudiantHomeWorks,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'howeWorkQSTReponse?.lib', header: 'Howe work q s t reponse'},
            {field: 'answer', header: 'Answer'},
            {field: 'homeWorkEtudiant?.id', header: 'Home work etudiant'},
            {field: 'homeWorkQuestion?.libelle', header: 'Home work question'},
            {field: 'profNote', header: 'Prof note'},
            {field: 'note', header: 'Note'},
        ];
    }


    public async loadHoweWorkQSTReponse(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ReponseEtudiantHomeWork', 'list');
        isPermistted ? this.howeWorkQSTReponseService.findAllOptimized().subscribe(howeWorkQSTReponses => this.howeWorkQSTReponses = howeWorkQSTReponses,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadHomeWorkEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ReponseEtudiantHomeWork', 'list');
        isPermistted ? this.homeWorkEtudiantService.findAll().subscribe(homeWorkEtudiants => this.homeWorkEtudiants = homeWorkEtudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadHomeWorkQuestion(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ReponseEtudiantHomeWork', 'list');
        isPermistted ? this.homeWorkQuestionService.findAllOptimized().subscribe(homeWorkQuestions => this.homeWorkQuestions = homeWorkQuestions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: ReponseEtudiantHomeWorkDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Howe work q s t reponse': e.howeWorkQSTReponse?.lib ,
                 'Answer': e.answer ,
                'Home work etudiant': e.homeWorkEtudiant?.id ,
                'Home work question': e.homeWorkQuestion?.libelle ,
                 'Prof note': e.profNote ,
                 'Note': e.note ,
            }
        });

        this.criteriaData = [{
        //'Howe work q s t reponse': this.criteria.howeWorkQSTReponse?.lib ? this.criteria.howeWorkQSTReponse?.lib : environment.emptyForExport ,
            'Answer': this.criteria.answer ? this.criteria.answer : environment.emptyForExport ,
        //'Home work etudiant': this.criteria.homeWorkEtudiant?.id ? this.criteria.homeWorkEtudiant?.id : environment.emptyForExport ,
        //'Home work question': this.criteria.homeWorkQuestion?.libelle ? this.criteria.homeWorkQuestion?.libelle : environment.emptyForExport ,
            'Prof note': this.criteria.profNote ? this.criteria.profNote : environment.emptyForExport ,
            'Note Min': this.criteria.noteMin ? this.criteria.noteMin : environment.emptyForExport ,
            'Note Max': this.criteria.noteMax ? this.criteria.noteMax : environment.emptyForExport ,
        }];
      }
}
