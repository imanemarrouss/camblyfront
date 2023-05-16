import {Component, OnInit} from '@angular/core';
import {CategorieSectionService} from 'src/app/controller/service/CategorieSection.service';
import {CategorieSectionDto} from 'src/app/controller/model/CategorieSection.model';
import {CategorieSectionCriteria} from 'src/app/controller/criteria/CategorieSectionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { SuperCategorieSectionService } from 'src/app/controller/service/SuperCategorieSection.service';

import {SectionDto} from 'src/app/controller/model/Section.model';
import {SuperCategorieSectionDto} from 'src/app/controller/model/SuperCategorieSection.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-categorie-section-list-admin',
  templateUrl: './categorie-section-list-admin.component.html'
})
export class CategorieSectionListAdminComponent extends AbstractListController<CategorieSectionDto, CategorieSectionCriteria, CategorieSectionService>  implements OnInit {

    fileName = 'CategorieSection';

    superCategorieSections :Array<SuperCategorieSectionDto>;
  
    constructor(datePipe: DatePipe, categorieSectionService: CategorieSectionService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private superCategorieSectionService: SuperCategorieSectionService) {
        super(datePipe, categorieSectionService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadSuperCategorieSection();
    }

    public async loadCategorieSections(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('CategorieSection', 'list');
        isPermistted ? this.service.findAll().subscribe(categorieSections => this.items = categorieSections,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'numeroOrder', header: 'Numero order'},
            {field: 'superCategorieSection?.libelle', header: 'Super categorie section'},
        ];
    }


    public async loadSuperCategorieSection(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('CategorieSection', 'list');
        isPermistted ? this.superCategorieSectionService.findAllOptimized().subscribe(superCategorieSections => this.superCategorieSections = superCategorieSections,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: CategorieSectionDto) {
        if (res.sections != null) {
             res.sections.forEach(d => { d.categorieSection = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
                 'Numero order': e.numeroOrder ,
                'Super categorie section': e.superCategorieSection?.libelle ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Numero order Min': this.criteria.numeroOrderMin ? this.criteria.numeroOrderMin : environment.emptyForExport ,
            'Numero order Max': this.criteria.numeroOrderMax ? this.criteria.numeroOrderMax : environment.emptyForExport ,
        //'Super categorie section': this.criteria.superCategorieSection?.libelle ? this.criteria.superCategorieSection?.libelle : environment.emptyForExport ,
        }];
      }
}
