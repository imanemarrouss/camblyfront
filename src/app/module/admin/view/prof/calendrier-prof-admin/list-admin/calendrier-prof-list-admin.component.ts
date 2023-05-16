import {Component, OnInit} from '@angular/core';
import {CalendrierProfService} from 'src/app/controller/service/CalendrierProf.service';
import {CalendrierProfDto} from 'src/app/controller/model/CalendrierProf.model';
import {CalendrierProfCriteria} from 'src/app/controller/criteria/CalendrierProfCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { ProfService } from 'src/app/controller/service/Prof.service';
import { EtudiantService } from 'src/app/controller/service/Etudiant.service';

import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-calendrier-prof-list-admin',
  templateUrl: './calendrier-prof-list-admin.component.html'
})
export class CalendrierProfListAdminComponent extends AbstractListController<CalendrierProfDto, CalendrierProfCriteria, CalendrierProfService>  implements OnInit {

    fileName = 'CalendrierProf';

    profs :Array<ProfDto>;
    etudiants :Array<EtudiantDto>;
  
    constructor(datePipe: DatePipe, calendrierProfService: CalendrierProfService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private profService: ProfService, private etudiantService: EtudiantService) {
        super(datePipe, calendrierProfService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadProf();
      this.loadEtudiant();
    }

    public async loadCalendrierProfs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('CalendrierProf', 'list');
        isPermistted ? this.service.findAll().subscribe(calendrierProfs => this.items = calendrierProfs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'startTime', header: 'Start time'},
            {field: 'endTime', header: 'End time'},
            {field: 'startRecur', header: 'Start recur'},
            {field: 'endRecur', header: 'End recur'},
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'etudiant?.ref', header: 'Etudiant'},
        ];
    }


    public async loadProf(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('CalendrierProf', 'list');
        isPermistted ? this.profService.findAllOptimized().subscribe(profs => this.profs = profs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('CalendrierProf', 'list');
        isPermistted ? this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: CalendrierProfDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Start time': e.startTime ,
                 'End time': e.endTime ,
                'Start recur': this.datePipe.transform(e.startRecur , 'dd/MM/yyyy hh:mm'),
                'End recur': this.datePipe.transform(e.endRecur , 'dd/MM/yyyy hh:mm'),
                'Prof': e.prof?.ref ,
                'Etudiant': e.etudiant?.ref ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Start time': this.criteria.startTime ? this.criteria.startTime : environment.emptyForExport ,
            'End time': this.criteria.endTime ? this.criteria.endTime : environment.emptyForExport ,
            'Start recur Min': this.criteria.startRecurFrom ? this.datePipe.transform(this.criteria.startRecurFrom , this.dateFormat) : environment.emptyForExport ,
            'Start recur Max': this.criteria.startRecurTo ? this.datePipe.transform(this.criteria.startRecurTo , this.dateFormat) : environment.emptyForExport ,
            'End recur Min': this.criteria.endRecurFrom ? this.datePipe.transform(this.criteria.endRecurFrom , this.dateFormat) : environment.emptyForExport ,
            'End recur Max': this.criteria.endRecurTo ? this.datePipe.transform(this.criteria.endRecurTo , this.dateFormat) : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
        }];
      }
}
