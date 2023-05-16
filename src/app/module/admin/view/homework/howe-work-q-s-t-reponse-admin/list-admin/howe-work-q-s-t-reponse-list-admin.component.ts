import {Component, OnInit} from '@angular/core';
import {HoweWorkQSTReponseService} from 'src/app/controller/service/HoweWorkQSTReponse.service';
import {HoweWorkQSTReponseDto} from 'src/app/controller/model/HoweWorkQSTReponse.model';
import {HoweWorkQSTReponseCriteria} from 'src/app/controller/criteria/HoweWorkQSTReponseCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { EtatReponseService } from 'src/app/controller/service/EtatReponse.service';
import { HomeWorkQuestionService } from 'src/app/controller/service/HomeWorkQuestion.service';

import {EtatReponseDto} from 'src/app/controller/model/EtatReponse.model';
import {HomeWorkQuestionDto} from 'src/app/controller/model/HomeWorkQuestion.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-howe-work-q-s-t-reponse-list-admin',
  templateUrl: './howe-work-q-s-t-reponse-list-admin.component.html'
})
export class HoweWorkQSTReponseListAdminComponent extends AbstractListController<HoweWorkQSTReponseDto, HoweWorkQSTReponseCriteria, HoweWorkQSTReponseService>  implements OnInit {

    fileName = 'HoweWorkQSTReponse';

    etatReponses :Array<EtatReponseDto>;
    homeWorkQuestions :Array<HomeWorkQuestionDto>;
  
    constructor(datePipe: DatePipe, howeWorkQSTReponseService: HoweWorkQSTReponseService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private etatReponseService: EtatReponseService, private homeWorkQuestionService: HomeWorkQuestionService) {
        super(datePipe, howeWorkQSTReponseService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadEtatReponse();
      this.loadHomeWorkQuestion();
    }

    public async loadHoweWorkQSTReponses(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('HoweWorkQSTReponse', 'list');
        isPermistted ? this.service.findAll().subscribe(howeWorkQSTReponses => this.items = howeWorkQSTReponses,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'lib', header: 'Lib'},
            {field: 'etatReponse?.libelle', header: 'Etat reponse'},
            {field: 'numero', header: 'Numero'},
            {field: 'homeWorkQuestion?.libelle', header: 'Home work question'},
        ];
    }


    public async loadEtatReponse(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('HoweWorkQSTReponse', 'list');
        isPermistted ? this.etatReponseService.findAllOptimized().subscribe(etatReponses => this.etatReponses = etatReponses,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadHomeWorkQuestion(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('HoweWorkQSTReponse', 'list');
        isPermistted ? this.homeWorkQuestionService.findAllOptimized().subscribe(homeWorkQuestions => this.homeWorkQuestions = homeWorkQuestions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: HoweWorkQSTReponseDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Lib': e.lib ,
                'Etat reponse': e.etatReponse?.libelle ,
                 'Numero': e.numero ,
                'Home work question': e.homeWorkQuestion?.libelle ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Lib': this.criteria.lib ? this.criteria.lib : environment.emptyForExport ,
        //'Etat reponse': this.criteria.etatReponse?.libelle ? this.criteria.etatReponse?.libelle : environment.emptyForExport ,
            'Numero Min': this.criteria.numeroMin ? this.criteria.numeroMin : environment.emptyForExport ,
            'Numero Max': this.criteria.numeroMax ? this.criteria.numeroMax : environment.emptyForExport ,
        //'Home work question': this.criteria.homeWorkQuestion?.libelle ? this.criteria.homeWorkQuestion?.libelle : environment.emptyForExport ,
        }];
      }
}
