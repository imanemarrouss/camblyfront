import {Component, OnInit} from '@angular/core';
import {HomeWorkEtudiantService} from 'src/app/controller/service/HomeWorkEtudiant.service';
import {HomeWorkEtudiantDto} from 'src/app/controller/model/HomeWorkEtudiant.model';
import {HomeWorkEtudiantCriteria} from 'src/app/controller/criteria/HomeWorkEtudiantCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { EtudiantService } from 'src/app/controller/service/Etudiant.service';
import { HomeWorkService } from 'src/app/controller/service/HomeWork.service';
import { ResultatHomeWorkService } from 'src/app/controller/service/ResultatHomeWork.service';

import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {ReponseEtudiantHomeWorkDto} from 'src/app/controller/model/ReponseEtudiantHomeWork.model';
import {ResultatHomeWorkDto} from 'src/app/controller/model/ResultatHomeWork.model';
import {HomeWorkDto} from 'src/app/controller/model/HomeWork.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-home-work-etudiant-list-admin',
  templateUrl: './home-work-etudiant-list-admin.component.html'
})
export class HomeWorkEtudiantListAdminComponent extends AbstractListController<HomeWorkEtudiantDto, HomeWorkEtudiantCriteria, HomeWorkEtudiantService>  implements OnInit {

    fileName = 'HomeWorkEtudiant';

    etudiants :Array<EtudiantDto>;
    homeWorks :Array<HomeWorkDto>;
    resultatHomeWorks :Array<ResultatHomeWorkDto>;
  
    constructor(datePipe: DatePipe, homeWorkEtudiantService: HomeWorkEtudiantService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private etudiantService: EtudiantService, private homeWorkService: HomeWorkService, private resultatHomeWorkService: ResultatHomeWorkService) {
        super(datePipe, homeWorkEtudiantService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadEtudiant();
      this.loadHomeWork();
      this.loadResultatHomeWork();
    }

    public async loadHomeWorkEtudiants(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('HomeWorkEtudiant', 'list');
        isPermistted ? this.service.findAll().subscribe(homeWorkEtudiants => this.items = homeWorkEtudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'etudiant?.ref', header: 'Etudiant'},
            {field: 'homeWork?.libelle', header: 'Home work'},
            {field: 'note', header: 'Note'},
            {field: 'resultatHomeWork?.libelle', header: 'Resultat home work'},
            {field: 'dateHomeWork', header: 'Date home work'},
        ];
    }


    public async loadEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('HomeWorkEtudiant', 'list');
        isPermistted ? this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadHomeWork(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('HomeWorkEtudiant', 'list');
        isPermistted ? this.homeWorkService.findAllOptimized().subscribe(homeWorks => this.homeWorks = homeWorks,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadResultatHomeWork(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('HomeWorkEtudiant', 'list');
        isPermistted ? this.resultatHomeWorkService.findAllOptimized().subscribe(resultatHomeWorks => this.resultatHomeWorks = resultatHomeWorks,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: HomeWorkEtudiantDto) {
        if (res.reponseEtudiantHomeWorks != null) {
             res.reponseEtudiantHomeWorks.forEach(d => { d.homeWorkEtudiant = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Etudiant': e.etudiant?.ref ,
                'Home work': e.homeWork?.libelle ,
                 'Note': e.note ,
                'Resultat home work': e.resultatHomeWork?.libelle ,
                'Date home work': this.datePipe.transform(e.dateHomeWork , 'dd/MM/yyyy hh:mm'),
            }
        });

        this.criteriaData = [{
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
        //'Home work': this.criteria.homeWork?.libelle ? this.criteria.homeWork?.libelle : environment.emptyForExport ,
            'Note Min': this.criteria.noteMin ? this.criteria.noteMin : environment.emptyForExport ,
            'Note Max': this.criteria.noteMax ? this.criteria.noteMax : environment.emptyForExport ,
        //'Resultat home work': this.criteria.resultatHomeWork?.libelle ? this.criteria.resultatHomeWork?.libelle : environment.emptyForExport ,
            'Date home work Min': this.criteria.dateHomeWorkFrom ? this.datePipe.transform(this.criteria.dateHomeWorkFrom , this.dateFormat) : environment.emptyForExport ,
            'Date home work Max': this.criteria.dateHomeWorkTo ? this.datePipe.transform(this.criteria.dateHomeWorkTo , this.dateFormat) : environment.emptyForExport ,
        }];
      }
}
