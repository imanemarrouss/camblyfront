import {Component, OnInit} from '@angular/core';
import {HomeWorkQuestionService} from 'src/app/controller/service/HomeWorkQuestion.service';
import {HomeWorkQuestionDto} from 'src/app/controller/model/HomeWorkQuestion.model';
import {HomeWorkQuestionCriteria} from 'src/app/controller/criteria/HomeWorkQuestionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { TypeDeQuestionService } from 'src/app/controller/service/TypeDeQuestion.service';
import { HomeWorkService } from 'src/app/controller/service/HomeWork.service';

import {HoweWorkQSTReponseDto} from 'src/app/controller/model/HoweWorkQSTReponse.model';
import {TypeDeQuestionDto} from 'src/app/controller/model/TypeDeQuestion.model';
import {HomeWorkDto} from 'src/app/controller/model/HomeWork.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-home-work-question-list-admin',
  templateUrl: './home-work-question-list-admin.component.html'
})
export class HomeWorkQuestionListAdminComponent extends AbstractListController<HomeWorkQuestionDto, HomeWorkQuestionCriteria, HomeWorkQuestionService>  implements OnInit {

    fileName = 'HomeWorkQuestion';

    typeDeQuestions :Array<TypeDeQuestionDto>;
    homeWorks :Array<HomeWorkDto>;
  
    constructor(datePipe: DatePipe, homeWorkQuestionService: HomeWorkQuestionService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private typeDeQuestionService: TypeDeQuestionService, private homeWorkService: HomeWorkService) {
        super(datePipe, homeWorkQuestionService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadTypeDeQuestion();
      this.loadHomeWork();
    }

    public async loadHomeWorkQuestions(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('HomeWorkQuestion', 'list');
        isPermistted ? this.service.findAll().subscribe(homeWorkQuestions => this.items = homeWorkQuestions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'numero', header: 'Numero'},
            {field: 'pointReponseJuste', header: 'Point reponse juste'},
            {field: 'pointReponsefausse', header: 'Point reponsefausse'},
            {field: 'typeDeQuestion?.lib', header: 'Type de question'},
            {field: 'homeWork?.libelle', header: 'Home work'},
        ];
    }


    public async loadTypeDeQuestion(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('HomeWorkQuestion', 'list');
        isPermistted ? this.typeDeQuestionService.findAllOptimized().subscribe(typeDeQuestions => this.typeDeQuestions = typeDeQuestions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadHomeWork(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('HomeWorkQuestion', 'list');
        isPermistted ? this.homeWorkService.findAllOptimized().subscribe(homeWorks => this.homeWorks = homeWorks,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: HomeWorkQuestionDto) {
        if (res.howeWorkQSTReponses != null) {
             res.howeWorkQSTReponses.forEach(d => { d.homeWorkQuestion = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Libelle': e.libelle ,
                 'Numero': e.numero ,
                 'Point reponse juste': e.pointReponseJuste ,
                 'Point reponsefausse': e.pointReponsefausse ,
                'Type de question': e.typeDeQuestion?.lib ,
                'Home work': e.homeWork?.libelle ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Numero Min': this.criteria.numeroMin ? this.criteria.numeroMin : environment.emptyForExport ,
            'Numero Max': this.criteria.numeroMax ? this.criteria.numeroMax : environment.emptyForExport ,
            'Point reponse juste Min': this.criteria.pointReponseJusteMin ? this.criteria.pointReponseJusteMin : environment.emptyForExport ,
            'Point reponse juste Max': this.criteria.pointReponseJusteMax ? this.criteria.pointReponseJusteMax : environment.emptyForExport ,
            'Point reponsefausse Min': this.criteria.pointReponsefausseMin ? this.criteria.pointReponsefausseMin : environment.emptyForExport ,
            'Point reponsefausse Max': this.criteria.pointReponsefausseMax ? this.criteria.pointReponsefausseMax : environment.emptyForExport ,
        //'Type de question': this.criteria.typeDeQuestion?.lib ? this.criteria.typeDeQuestion?.lib : environment.emptyForExport ,
        //'Home work': this.criteria.homeWork?.libelle ? this.criteria.homeWork?.libelle : environment.emptyForExport ,
        }];
      }
}
