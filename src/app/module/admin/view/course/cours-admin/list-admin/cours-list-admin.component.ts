import {Component, OnInit} from '@angular/core';
import {CoursService} from 'src/app/controller/service/Cours.service';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import {CoursCriteria} from 'src/app/controller/criteria/CoursCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { EtatCoursService } from 'src/app/controller/service/EtatCours.service';
import { ParcoursService } from 'src/app/controller/service/Parcours.service';

import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {EtatCoursDto} from 'src/app/controller/model/EtatCours.model';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {HomeWorkDto} from 'src/app/controller/model/HomeWork.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-cours-list-admin',
  templateUrl: './cours-list-admin.component.html'
})
export class CoursListAdminComponent extends AbstractListController<CoursDto, CoursCriteria, CoursService>  implements OnInit {

    fileName = 'Cours';

    etatCourss :Array<EtatCoursDto>;
    parcourss :Array<ParcoursDto>;
  
    constructor(datePipe: DatePipe, coursService: CoursService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private etatCoursService: EtatCoursService, private parcoursService: ParcoursService) {
        super(datePipe, coursService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadEtatCours();
      this.loadParcours();
    }

    public async loadCourss(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Cours', 'list');
        isPermistted ? this.service.findAll().subscribe(courss => this.items = courss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'image', header: 'Image'},
            {field: 'etatCours?.libelle', header: 'Etat cours'},
            {field: 'parcours?.libelle', header: 'Parcours'},
            {field: 'nombreSectionFinalise', header: 'Nombre section finalise'},
            {field: 'nombreSectionEnCours', header: 'Nombre section en cours'},
            {field: 'nombreLinkEnCours', header: 'Nombre link en cours'},
            {field: 'nombreLinkFinalise', header: 'Nombre link finalise'},
            {field: 'numeroOrder', header: 'Numero order'},
        ];
    }


    public async loadEtatCours(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Cours', 'list');
        isPermistted ? this.etatCoursService.findAllOptimized().subscribe(etatCourss => this.etatCourss = etatCourss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadParcours(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Cours', 'list');
        isPermistted ? this.parcoursService.findAllOptimized().subscribe(parcourss => this.parcourss = parcourss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: CoursDto) {
        if (res.sections != null) {
             res.sections.forEach(d => { d.cours = null; d.id = null; });
        }
        if (res.homeWorks != null) {
             res.homeWorks.forEach(d => { d.cours = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
                 'Description': e.description ,
                 'Image': e.image ,
                'Etat cours': e.etatCours?.libelle ,
                'Parcours': e.parcours?.libelle ,
                 'Nombre section finalise': e.nombreSectionFinalise ,
                 'Nombre section en cours': e.nombreSectionEnCours ,
                 'Nombre link en cours': e.nombreLinkEnCours ,
                 'Nombre link finalise': e.nombreLinkFinalise ,
                 'Numero order': e.numeroOrder ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Image': this.criteria.image ? this.criteria.image : environment.emptyForExport ,
        //'Etat cours': this.criteria.etatCours?.libelle ? this.criteria.etatCours?.libelle : environment.emptyForExport ,
        //'Parcours': this.criteria.parcours?.libelle ? this.criteria.parcours?.libelle : environment.emptyForExport ,
            'Nombre section finalise Min': this.criteria.nombreSectionFinaliseMin ? this.criteria.nombreSectionFinaliseMin : environment.emptyForExport ,
            'Nombre section finalise Max': this.criteria.nombreSectionFinaliseMax ? this.criteria.nombreSectionFinaliseMax : environment.emptyForExport ,
            'Nombre section en cours Min': this.criteria.nombreSectionEnCoursMin ? this.criteria.nombreSectionEnCoursMin : environment.emptyForExport ,
            'Nombre section en cours Max': this.criteria.nombreSectionEnCoursMax ? this.criteria.nombreSectionEnCoursMax : environment.emptyForExport ,
            'Nombre link en cours Min': this.criteria.nombreLinkEnCoursMin ? this.criteria.nombreLinkEnCoursMin : environment.emptyForExport ,
            'Nombre link en cours Max': this.criteria.nombreLinkEnCoursMax ? this.criteria.nombreLinkEnCoursMax : environment.emptyForExport ,
            'Nombre link finalise Min': this.criteria.nombreLinkFinaliseMin ? this.criteria.nombreLinkFinaliseMin : environment.emptyForExport ,
            'Nombre link finalise Max': this.criteria.nombreLinkFinaliseMax ? this.criteria.nombreLinkFinaliseMax : environment.emptyForExport ,
            'Numero order Min': this.criteria.numeroOrderMin ? this.criteria.numeroOrderMin : environment.emptyForExport ,
            'Numero order Max': this.criteria.numeroOrderMax ? this.criteria.numeroOrderMax : environment.emptyForExport ,
        }];
      }
}
