import {Component, OnInit} from '@angular/core';
import {FreeTrialformuleService} from 'src/app/controller/service/FreeTrialformule.service';
import {FreeTrialformuleDto} from 'src/app/controller/model/FreeTrialformule.model';
import {FreeTrialformuleCriteria} from 'src/app/controller/criteria/FreeTrialformuleCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { InscriptionService } from 'src/app/controller/service/Inscription.service';

import {InscriptionDto} from 'src/app/controller/model/Inscription.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-free-trialformule-list-admin',
  templateUrl: './free-trialformule-list-admin.component.html'
})
export class FreeTrialformuleListAdminComponent extends AbstractListController<FreeTrialformuleDto, FreeTrialformuleCriteria, FreeTrialformuleService>  implements OnInit {

    fileName = 'FreeTrialformule';

     yesOrNoStatus :any[] =[];
    inscriptions :Array<InscriptionDto>;
  
    constructor(datePipe: DatePipe, freeTrialformuleService: FreeTrialformuleService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private inscriptionService: InscriptionService) {
        super(datePipe, freeTrialformuleService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadInscription();
    this.yesOrNoStatus =  [{label: 'Status', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }

    public async loadFreeTrialformules(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FreeTrialformule', 'list');
        isPermistted ? this.service.findAll().subscribe(freeTrialformules => this.items = freeTrialformules,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'inscription?.id', header: 'Inscription'},
            {field: 'dayspeerweek', header: 'Dayspeerweek'},
            {field: 'timeperday', header: 'Timeperday'},
            {field: 'teacherGenderoption', header: 'Teacher genderoption'},
            {field: 'teacherAgeRange', header: 'Teacher age range'},
            {field: 'teacherPersonnality', header: 'Teacher personnality'},
            {field: 'status', header: 'Status'},
            {field: 'dateConfirmation', header: 'Date confirmation'},
        ];
    }


    public async loadInscription(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FreeTrialformule', 'list');
        isPermistted ? this.inscriptionService.findAll().subscribe(inscriptions => this.inscriptions = inscriptions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: FreeTrialformuleDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                'Inscription': e.inscription?.id ,
                 'Dayspeerweek': e.dayspeerweek ,
                 'Timeperday': e.timeperday ,
                 'Teacher genderoption': e.teacherGenderoption ,
                 'Teacher age range': e.teacherAgeRange ,
                 'Teacher personnality': e.teacherPersonnality ,
                'Status': e.status? 'Vrai' : 'Faux' ,
                'Date confirmation': this.datePipe.transform(e.dateConfirmation , 'dd/MM/yyyy hh:mm'),
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        //'Inscription': this.criteria.inscription?.id ? this.criteria.inscription?.id : environment.emptyForExport ,
            'Dayspeerweek': this.criteria.dayspeerweek ? this.criteria.dayspeerweek : environment.emptyForExport ,
            'Timeperday': this.criteria.timeperday ? this.criteria.timeperday : environment.emptyForExport ,
            'Teacher genderoption': this.criteria.teacherGenderoption ? this.criteria.teacherGenderoption : environment.emptyForExport ,
            'Teacher age range': this.criteria.teacherAgeRange ? this.criteria.teacherAgeRange : environment.emptyForExport ,
            'Teacher personnality': this.criteria.teacherPersonnality ? this.criteria.teacherPersonnality : environment.emptyForExport ,
            'Status': this.criteria.status ? (this.criteria.status ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Date confirmation Min': this.criteria.dateConfirmationFrom ? this.datePipe.transform(this.criteria.dateConfirmationFrom , this.dateFormat) : environment.emptyForExport ,
            'Date confirmation Max': this.criteria.dateConfirmationTo ? this.datePipe.transform(this.criteria.dateConfirmationTo , this.dateFormat) : environment.emptyForExport ,
        }];
      }
}
