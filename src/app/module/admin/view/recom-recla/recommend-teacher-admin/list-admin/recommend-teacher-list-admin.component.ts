import {Component, OnInit} from '@angular/core';
import {RecommendTeacherService} from 'src/app/controller/service/RecommendTeacher.service';
import {RecommendTeacherDto} from 'src/app/controller/model/RecommendTeacher.model';
import {RecommendTeacherCriteria} from 'src/app/controller/criteria/RecommendTeacherCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { ProfService } from 'src/app/controller/service/Prof.service';

import {ProfDto} from 'src/app/controller/model/Prof.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-recommend-teacher-list-admin',
  templateUrl: './recommend-teacher-list-admin.component.html'
})
export class RecommendTeacherListAdminComponent extends AbstractListController<RecommendTeacherDto, RecommendTeacherCriteria, RecommendTeacherService>  implements OnInit {

    fileName = 'RecommendTeacher';

    profs :Array<ProfDto>;
  
    constructor(datePipe: DatePipe, recommendTeacherService: RecommendTeacherService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private profService: ProfService) {
        super(datePipe, recommendTeacherService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadProf();
    }

    public async loadRecommendTeachers(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('RecommendTeacher', 'list');
        isPermistted ? this.service.findAll().subscribe(recommendTeachers => this.items = recommendTeachers,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'nombrevote', header: 'Nombrevote'},
            {field: 'nom', header: 'Nom'},
            {field: 'prenom', header: 'Prenom'},
            {field: 'telephone', header: 'Telephone'},
            {field: 'login', header: 'Login'},
            {field: 'dateRecommamdation', header: 'Date recommamdation'},
            {field: 'prof?.ref', header: 'Prof'},
        ];
    }


    public async loadProf(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('RecommendTeacher', 'list');
        isPermistted ? this.profService.findAllOptimized().subscribe(profs => this.profs = profs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: RecommendTeacherDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Nombrevote': e.nombrevote ,
                 'Nom': e.nom ,
                 'Prenom': e.prenom ,
                 'Commentaire': e.commentaire ,
                 'Telephone': e.telephone ,
                 'Login': e.login ,
                'Date recommamdation': this.datePipe.transform(e.dateRecommamdation , 'dd/MM/yyyy hh:mm'),
                'Prof': e.prof?.ref ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Nombrevote Min': this.criteria.nombrevoteMin ? this.criteria.nombrevoteMin : environment.emptyForExport ,
            'Nombrevote Max': this.criteria.nombrevoteMax ? this.criteria.nombrevoteMax : environment.emptyForExport ,
            'Nom': this.criteria.nom ? this.criteria.nom : environment.emptyForExport ,
            'Prenom': this.criteria.prenom ? this.criteria.prenom : environment.emptyForExport ,
            'Commentaire': this.criteria.commentaire ? this.criteria.commentaire : environment.emptyForExport ,
            'Telephone': this.criteria.telephone ? this.criteria.telephone : environment.emptyForExport ,
            'Login': this.criteria.login ? this.criteria.login : environment.emptyForExport ,
            'Date recommamdation Min': this.criteria.dateRecommamdationFrom ? this.datePipe.transform(this.criteria.dateRecommamdationFrom , this.dateFormat) : environment.emptyForExport ,
            'Date recommamdation Max': this.criteria.dateRecommamdationTo ? this.datePipe.transform(this.criteria.dateRecommamdationTo , this.dateFormat) : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
        }];
      }
}
