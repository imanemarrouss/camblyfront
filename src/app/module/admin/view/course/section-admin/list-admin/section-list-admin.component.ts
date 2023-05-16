import {Component, OnInit} from '@angular/core';
import {SectionService} from 'src/app/controller/service/Section.service';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionCriteria} from 'src/app/controller/criteria/SectionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { CategorieSectionService } from 'src/app/controller/service/CategorieSection.service';
import { CoursService } from 'src/app/controller/service/Cours.service';
import { SessionCoursService } from 'src/app/controller/service/SessionCours.service';

import {SessionCoursDto} from 'src/app/controller/model/SessionCours.model';
import {CategorieSectionDto} from 'src/app/controller/model/CategorieSection.model';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import {SectionItemDto} from 'src/app/controller/model/SectionItem.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-section-list-admin',
  templateUrl: './section-list-admin.component.html'
})
export class SectionListAdminComponent extends AbstractListController<SectionDto, SectionCriteria, SectionService>  implements OnInit {

    fileName = 'Section';

    categorieSections :Array<CategorieSectionDto>;
    courss :Array<CoursDto>;
    sessionCourss :Array<SessionCoursDto>;
  
    constructor(datePipe: DatePipe, sectionService: SectionService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private categorieSectionService: CategorieSectionService, private coursService: CoursService, private sessionCoursService: SessionCoursService) {
        super(datePipe, sectionService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadCategorieSection();
      this.loadCours();
      this.loadSessionCours();
    }

    public async loadSections(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Section', 'list');
        isPermistted ? this.service.findAll().subscribe(sections => this.items = sections,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'urlImage', header: 'Url image'},
            {field: 'urlImage2', header: 'Url image2'},
            {field: 'urlImage3', header: 'Url image3'},
            {field: 'urlVideo', header: 'Url video'},
            {field: 'contenu', header: 'Contenu'},
            {field: 'questions', header: 'Questions'},
            {field: 'indicationProf', header: 'Indication prof'},
            {field: 'numeroOrder', header: 'Numero order'},
            {field: 'categorieSection?.code', header: 'Categorie section'},
            {field: 'cours?.libelle', header: 'Cours'},
            {field: 'url', header: 'Url'},
            {field: 'content', header: 'Content'},
            {field: 'sessionCours?.reference', header: 'Session cours'},
        ];
    }


    public async loadCategorieSection(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Section', 'list');
        isPermistted ? this.categorieSectionService.findAllOptimized().subscribe(categorieSections => this.categorieSections = categorieSections,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadCours(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Section', 'list');
        isPermistted ? this.coursService.findAllOptimized().subscribe(courss => this.courss = courss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadSessionCours(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Section', 'list');
        isPermistted ? this.sessionCoursService.findAllOptimized().subscribe(sessionCourss => this.sessionCourss = sessionCourss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: SectionDto) {
        if (res.sectionItems != null) {
             res.sectionItems.forEach(d => { d.section = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
                 'Url image': e.urlImage ,
                 'Url image2': e.urlImage2 ,
                 'Url image3': e.urlImage3 ,
                 'Url video': e.urlVideo ,
                 'Contenu': e.contenu ,
                 'Questions': e.questions ,
                 'Indication prof': e.indicationProf ,
                 'Numero order': e.numeroOrder ,
                'Categorie section': e.categorieSection?.code ,
                'Cours': e.cours?.libelle ,
                 'Url': e.url ,
                 'Content': e.content ,
                'Session cours': e.sessionCours?.reference ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Url image': this.criteria.urlImage ? this.criteria.urlImage : environment.emptyForExport ,
            'Url image2': this.criteria.urlImage2 ? this.criteria.urlImage2 : environment.emptyForExport ,
            'Url image3': this.criteria.urlImage3 ? this.criteria.urlImage3 : environment.emptyForExport ,
            'Url video': this.criteria.urlVideo ? this.criteria.urlVideo : environment.emptyForExport ,
            'Contenu': this.criteria.contenu ? this.criteria.contenu : environment.emptyForExport ,
            'Questions': this.criteria.questions ? this.criteria.questions : environment.emptyForExport ,
            'Indication prof': this.criteria.indicationProf ? this.criteria.indicationProf : environment.emptyForExport ,
            'Numero order Min': this.criteria.numeroOrderMin ? this.criteria.numeroOrderMin : environment.emptyForExport ,
            'Numero order Max': this.criteria.numeroOrderMax ? this.criteria.numeroOrderMax : environment.emptyForExport ,
        //'Categorie section': this.criteria.categorieSection?.code ? this.criteria.categorieSection?.code : environment.emptyForExport ,
        //'Cours': this.criteria.cours?.libelle ? this.criteria.cours?.libelle : environment.emptyForExport ,
            'Url Min': this.criteria.urlMin ? this.criteria.urlMin : environment.emptyForExport ,
            'Url Max': this.criteria.urlMax ? this.criteria.urlMax : environment.emptyForExport ,
            'Content Min': this.criteria.contentMin ? this.criteria.contentMin : environment.emptyForExport ,
            'Content Max': this.criteria.contentMax ? this.criteria.contentMax : environment.emptyForExport ,
        //'Session cours': this.criteria.sessionCours?.reference ? this.criteria.sessionCours?.reference : environment.emptyForExport ,
        }];
      }
}
