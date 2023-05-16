import {Component, OnInit} from '@angular/core';
import {VocabularyQuizService} from 'src/app/controller/service/VocabularyQuiz.service';
import {VocabularyQuizDto} from 'src/app/controller/model/VocabularyQuiz.model';
import {VocabularyQuizCriteria} from 'src/app/controller/criteria/VocabularyQuizCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { SectionService } from 'src/app/controller/service/Section.service';

import {VocabularyDto} from 'src/app/controller/model/Vocabulary.model';
import {SectionDto} from 'src/app/controller/model/Section.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-vocabulary-quiz-list-admin',
  templateUrl: './vocabulary-quiz-list-admin.component.html'
})
export class VocabularyQuizListAdminComponent extends AbstractListController<VocabularyQuizDto, VocabularyQuizCriteria, VocabularyQuizService>  implements OnInit {

    fileName = 'VocabularyQuiz';

    sections :Array<SectionDto>;
  
    constructor(datePipe: DatePipe, vocabularyQuizService: VocabularyQuizService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private sectionService: SectionService) {
        super(datePipe, vocabularyQuizService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadSection();
    }

    public async loadVocabularyQuizs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('VocabularyQuiz', 'list');
        isPermistted ? this.service.findAll().subscribe(vocabularyQuizs => this.items = vocabularyQuizs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'dateDebut', header: 'Date debut'},
            {field: 'dateFin', header: 'Date fin'},
            {field: 'section?.code', header: 'Section'},
        ];
    }


    public async loadSection(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('VocabularyQuiz', 'list');
        isPermistted ? this.sectionService.findAllOptimized().subscribe(sections => this.sections = sections,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: VocabularyQuizDto) {
        if (res.vocabularys != null) {
             res.vocabularys.forEach(d => { d.vocabularyQuiz = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                'Date debut': this.datePipe.transform(e.dateDebut , 'dd/MM/yyyy hh:mm'),
                'Date fin': this.datePipe.transform(e.dateFin , 'dd/MM/yyyy hh:mm'),
                'Section': e.section?.code ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Date debut Min': this.criteria.dateDebutFrom ? this.datePipe.transform(this.criteria.dateDebutFrom , this.dateFormat) : environment.emptyForExport ,
            'Date debut Max': this.criteria.dateDebutTo ? this.datePipe.transform(this.criteria.dateDebutTo , this.dateFormat) : environment.emptyForExport ,
            'Date fin Min': this.criteria.dateFinFrom ? this.datePipe.transform(this.criteria.dateFinFrom , this.dateFormat) : environment.emptyForExport ,
            'Date fin Max': this.criteria.dateFinTo ? this.datePipe.transform(this.criteria.dateFinTo , this.dateFormat) : environment.emptyForExport ,
        //'Section': this.criteria.section?.code ? this.criteria.section?.code : environment.emptyForExport ,
        }];
      }
}
