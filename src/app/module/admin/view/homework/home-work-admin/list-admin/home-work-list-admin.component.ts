import {Component, OnInit} from '@angular/core';
import {HomeWorkService} from 'src/app/controller/service/HomeWork.service';
import {HomeWorkDto} from 'src/app/controller/model/HomeWork.model';
import {HomeWorkCriteria} from 'src/app/controller/criteria/HomeWorkCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { CoursService } from 'src/app/controller/service/Cours.service';
import { TypeHomeWorkService } from 'src/app/controller/service/TypeHomeWork.service';

import {HomeWorkEtudiantDto} from 'src/app/controller/model/HomeWorkEtudiant.model';
import {HomeWorkQuestionDto} from 'src/app/controller/model/HomeWorkQuestion.model';
import {TypeHomeWorkDto} from 'src/app/controller/model/TypeHomeWork.model';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-home-work-list-admin',
  templateUrl: './home-work-list-admin.component.html'
})
export class HomeWorkListAdminComponent extends AbstractListController<HomeWorkDto, HomeWorkCriteria, HomeWorkService>  implements OnInit {

    fileName = 'HomeWork';

    courss :Array<CoursDto>;
    typeHomeWorks :Array<TypeHomeWorkDto>;
  
    constructor(datePipe: DatePipe, homeWorkService: HomeWorkService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private coursService: CoursService, private typeHomeWorkService: TypeHomeWorkService) {
        super(datePipe, homeWorkService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadCours();
      this.loadTypeHomeWork();
    }

    public async loadHomeWorks(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('HomeWork', 'list');
        isPermistted ? this.service.findAll().subscribe(homeWorks => this.items = homeWorks,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'urlImage', header: 'Url image'},
            {field: 'urlVideo', header: 'Url video'},
            {field: 'cours?.libelle', header: 'Cours'},
            {field: 'typeHomeWork?.lib', header: 'Type home work'},
        ];
    }


    public async loadCours(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('HomeWork', 'list');
        isPermistted ? this.coursService.findAllOptimized().subscribe(courss => this.courss = courss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadTypeHomeWork(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('HomeWork', 'list');
        isPermistted ? this.typeHomeWorkService.findAllOptimized().subscribe(typeHomeWorks => this.typeHomeWorks = typeHomeWorks,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: HomeWorkDto) {
        if (res.homeWorkQuestions != null) {
             res.homeWorkQuestions.forEach(d => { d.homeWork = null; d.id = null; });
        }
        if (res.homeWorkEtudiants != null) {
             res.homeWorkEtudiants.forEach(d => { d.homeWork = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Url image': e.urlImage ,
                 'Url video': e.urlVideo ,
                'Cours': e.cours?.libelle ,
                'Type home work': e.typeHomeWork?.lib ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Url image': this.criteria.urlImage ? this.criteria.urlImage : environment.emptyForExport ,
            'Url video': this.criteria.urlVideo ? this.criteria.urlVideo : environment.emptyForExport ,
        //'Cours': this.criteria.cours?.libelle ? this.criteria.cours?.libelle : environment.emptyForExport ,
        //'Type home work': this.criteria.typeHomeWork?.lib ? this.criteria.typeHomeWork?.lib : environment.emptyForExport ,
        }];
      }
}
