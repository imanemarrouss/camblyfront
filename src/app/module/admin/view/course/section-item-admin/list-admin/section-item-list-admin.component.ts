import {Component, OnInit} from '@angular/core';
import {SectionItemService} from 'src/app/controller/service/SectionItem.service';
import {SectionItemDto} from 'src/app/controller/model/SectionItem.model';
import {SectionItemCriteria} from 'src/app/controller/criteria/SectionItemCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { SectionService } from 'src/app/controller/service/Section.service';

import {SectionDto} from 'src/app/controller/model/Section.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-section-item-list-admin',
  templateUrl: './section-item-list-admin.component.html'
})
export class SectionItemListAdminComponent extends AbstractListController<SectionItemDto, SectionItemCriteria, SectionItemService>  implements OnInit {

    fileName = 'SectionItem';

    sections :Array<SectionDto>;
  
    constructor(datePipe: DatePipe, sectionItemService: SectionItemService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private sectionService: SectionService) {
        super(datePipe, sectionItemService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadSection();
    }

    public async loadSectionItems(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('SectionItem', 'list');
        isPermistted ? this.service.findAll().subscribe(sectionItems => this.items = sectionItems,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'imageUrl', header: 'Image url'},
            {field: 'response', header: 'Response'},
            {field: 'transcription', header: 'Transcription'},
            {field: 'translation', header: 'Translation'},
            {field: 'explanation', header: 'Explanation'},
            {field: 'example', header: 'Example'},
            {field: 'synonyms', header: 'Synonyms'},
            {field: 'section?.code', header: 'Section'},
        ];
    }


    public async loadSection(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('SectionItem', 'list');
        isPermistted ? this.sectionService.findAllOptimized().subscribe(sections => this.sections = sections,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: SectionItemDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Image url': e.imageUrl ,
                 'Response': e.response ,
                 'Transcription': e.transcription ,
                 'Translation': e.translation ,
                 'Explanation': e.explanation ,
                 'Example': e.example ,
                 'Synonyms': e.synonyms ,
                'Section': e.section?.code ,
            }
        });

        this.criteriaData = [{
            'Image url': this.criteria.imageUrl ? this.criteria.imageUrl : environment.emptyForExport ,
            'Response': this.criteria.response ? this.criteria.response : environment.emptyForExport ,
            'Transcription': this.criteria.transcription ? this.criteria.transcription : environment.emptyForExport ,
            'Translation': this.criteria.translation ? this.criteria.translation : environment.emptyForExport ,
            'Explanation': this.criteria.explanation ? this.criteria.explanation : environment.emptyForExport ,
            'Example': this.criteria.example ? this.criteria.example : environment.emptyForExport ,
            'Synonyms': this.criteria.synonyms ? this.criteria.synonyms : environment.emptyForExport ,
        //'Section': this.criteria.section?.code ? this.criteria.section?.code : environment.emptyForExport ,
        }];
      }
}
