import {Component, OnInit} from '@angular/core';
import {ParcoursService} from 'src/app/controller/service/Parcours.service';
import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {ParcoursCriteria} from 'src/app/controller/criteria/ParcoursCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { CentreService } from 'src/app/controller/service/Centre.service';

import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {CentreDto} from 'src/app/controller/model/Centre.model';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-parcours-list-admin',
  templateUrl: './parcours-list-admin.component.html'
})
export class ParcoursListAdminComponent extends AbstractListController<ParcoursDto, ParcoursCriteria, ParcoursService>  implements OnInit {

    fileName = 'Parcours';

    centres :Array<CentreDto>;
  
    constructor(datePipe: DatePipe, parcoursService: ParcoursService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private centreService: CentreService) {
        super(datePipe, parcoursService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadCentre();
    }

    public async loadParcourss(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Parcours', 'list');
        isPermistted ? this.service.findAll().subscribe(parcourss => this.items = parcourss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'datePublication', header: 'Date publication'},
            {field: 'dateCreation', header: 'Date creation'},
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'numeroOrder', header: 'Numero order'},
            {field: 'nombreCours', header: 'Nombre cours'},
            {field: 'centre?.ref', header: 'Centre'},
        ];
    }


    public async loadCentre(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Parcours', 'list');
        isPermistted ? this.centreService.findAllOptimized().subscribe(centres => this.centres = centres,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: ParcoursDto) {
        if (res.courss != null) {
             res.courss.forEach(d => { d.parcours = null; d.id = null; });
        }
        if (res.etudiants != null) {
             res.etudiants.forEach(d => { d.parcours = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Date publication': this.datePipe.transform(e.datePublication , 'dd/MM/yyyy hh:mm'),
                'Date creation': this.datePipe.transform(e.dateCreation , 'dd/MM/yyyy hh:mm'),
                 'Description': e.description ,
                 'Code': e.code ,
                 'Libelle': e.libelle ,
                 'Numero order': e.numeroOrder ,
                 'Nombre cours': e.nombreCours ,
                'Centre': e.centre?.ref ,
            }
        });

        this.criteriaData = [{
            'Date publication Min': this.criteria.datePublicationFrom ? this.datePipe.transform(this.criteria.datePublicationFrom , this.dateFormat) : environment.emptyForExport ,
            'Date publication Max': this.criteria.datePublicationTo ? this.datePipe.transform(this.criteria.datePublicationTo , this.dateFormat) : environment.emptyForExport ,
            'Date creation Min': this.criteria.dateCreationFrom ? this.datePipe.transform(this.criteria.dateCreationFrom , this.dateFormat) : environment.emptyForExport ,
            'Date creation Max': this.criteria.dateCreationTo ? this.datePipe.transform(this.criteria.dateCreationTo , this.dateFormat) : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Numero order Min': this.criteria.numeroOrderMin ? this.criteria.numeroOrderMin : environment.emptyForExport ,
            'Numero order Max': this.criteria.numeroOrderMax ? this.criteria.numeroOrderMax : environment.emptyForExport ,
            'Nombre cours Min': this.criteria.nombreCoursMin ? this.criteria.nombreCoursMin : environment.emptyForExport ,
            'Nombre cours Max': this.criteria.nombreCoursMax ? this.criteria.nombreCoursMax : environment.emptyForExport ,
        //'Centre': this.criteria.centre?.ref ? this.criteria.centre?.ref : environment.emptyForExport ,
        }];
      }
}
