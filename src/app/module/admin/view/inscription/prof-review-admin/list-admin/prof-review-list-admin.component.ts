import {Component, OnInit} from '@angular/core';
import {ProfReviewService} from 'src/app/controller/service/ProfReview.service';
import {ProfReviewDto} from 'src/app/controller/model/ProfReview.model';
import {ProfReviewCriteria} from 'src/app/controller/criteria/ProfReviewCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { EtudiantService } from 'src/app/controller/service/Etudiant.service';
import { ProfService } from 'src/app/controller/service/Prof.service';
import { CoursService } from 'src/app/controller/service/Cours.service';

import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-prof-review-list-admin',
  templateUrl: './prof-review-list-admin.component.html'
})
export class ProfReviewListAdminComponent extends AbstractListController<ProfReviewDto, ProfReviewCriteria, ProfReviewService>  implements OnInit {

    fileName = 'ProfReview';

    etudiants :Array<EtudiantDto>;
    profs :Array<ProfDto>;
    courss :Array<CoursDto>;
  
    constructor(datePipe: DatePipe, profReviewService: ProfReviewService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private etudiantService: EtudiantService, private profService: ProfService, private coursService: CoursService) {
        super(datePipe, profReviewService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadEtudiant();
      this.loadProf();
      this.loadCours();
    }

    public async loadProfReviews(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ProfReview', 'list');
        isPermistted ? this.service.findAll().subscribe(profReviews => this.items = profReviews,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'etudiant?.ref', header: 'Etudiant'},
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'cours?.libelle', header: 'Cours'},
            {field: 'review', header: 'Review'},
            {field: 'dateReview', header: 'Date review'},
        ];
    }


    public async loadEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ProfReview', 'list');
        isPermistted ? this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadProf(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ProfReview', 'list');
        isPermistted ? this.profService.findAllOptimized().subscribe(profs => this.profs = profs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadCours(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ProfReview', 'list');
        isPermistted ? this.coursService.findAllOptimized().subscribe(courss => this.courss = courss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: ProfReviewDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Etudiant': e.etudiant?.ref ,
                'Prof': e.prof?.ref ,
                'Cours': e.cours?.libelle ,
                 'Review': e.review ,
                 'Comment': e.comment ,
                'Date review': this.datePipe.transform(e.dateReview , 'dd/MM/yyyy hh:mm'),
            }
        });

        this.criteriaData = [{
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
        //'Cours': this.criteria.cours?.libelle ? this.criteria.cours?.libelle : environment.emptyForExport ,
            'Review Min': this.criteria.reviewMin ? this.criteria.reviewMin : environment.emptyForExport ,
            'Review Max': this.criteria.reviewMax ? this.criteria.reviewMax : environment.emptyForExport ,
            'Comment': this.criteria.comment ? this.criteria.comment : environment.emptyForExport ,
            'Date review Min': this.criteria.dateReviewFrom ? this.datePipe.transform(this.criteria.dateReviewFrom , this.dateFormat) : environment.emptyForExport ,
            'Date review Max': this.criteria.dateReviewTo ? this.datePipe.transform(this.criteria.dateReviewTo , this.dateFormat) : environment.emptyForExport ,
        }];
      }
}
