import {Component, OnInit} from '@angular/core';
import {FreeTrialDetailService} from 'src/app/controller/service/FreeTrialDetail.service';
import {FreeTrialDetailDto} from 'src/app/controller/model/FreeTrialDetail.model';
import {FreeTrialDetailCriteria} from 'src/app/controller/criteria/FreeTrialDetailCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { FreeTrialService } from 'src/app/controller/service/FreeTrial.service';
import { EtudiantService } from 'src/app/controller/service/Etudiant.service';

import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {FreeTrialDto} from 'src/app/controller/model/FreeTrial.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-free-trial-detail-list-admin',
  templateUrl: './free-trial-detail-list-admin.component.html'
})
export class FreeTrialDetailListAdminComponent extends AbstractListController<FreeTrialDetailDto, FreeTrialDetailCriteria, FreeTrialDetailService>  implements OnInit {

    fileName = 'FreeTrialDetail';

     yesOrNoPresence :any[] =[];
     yesOrNoWhatsUpMessageSent :any[] =[];
     yesOrNoEmailMessageSent :any[] =[];
     yesOrNoAbonne :any[] =[];
    freeTrials :Array<FreeTrialDto>;
    etudiants :Array<EtudiantDto>;
  
    constructor(datePipe: DatePipe, freeTrialDetailService: FreeTrialDetailService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private freeTrialService: FreeTrialService, private etudiantService: EtudiantService) {
        super(datePipe, freeTrialDetailService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadFreeTrial();
      this.loadEtudiant();
    this.yesOrNoPresence =  [{label: 'Presence', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoWhatsUpMessageSent =  [{label: 'WhatsUpMessageSent', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoEmailMessageSent =  [{label: 'EmailMessageSent', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoAbonne =  [{label: 'Abonne', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }

    public async loadFreeTrialDetails(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FreeTrialDetail', 'list');
        isPermistted ? this.service.findAll().subscribe(freeTrialDetails => this.items = freeTrialDetails,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'freeTrial?.reference', header: 'Free trial'},
            {field: 'etudiant?.ref', header: 'Etudiant'},
            {field: 'presence', header: 'Presence'},
            {field: 'whatsUpMessageSent', header: 'Whats up message sent'},
            {field: 'dateEnvoiwhatsUpMessage', header: 'Date envoiwhats up message'},
            {field: 'emailMessageSent', header: 'Email message sent'},
            {field: 'dateEnvoiEmailMessage', header: 'Date envoi email message'},
            {field: 'abonne', header: 'Abonne'},
        ];
    }


    public async loadFreeTrial(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FreeTrialDetail', 'list');
        isPermistted ? this.freeTrialService.findAllOptimized().subscribe(freeTrials => this.freeTrials = freeTrials,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FreeTrialDetail', 'list');
        isPermistted ? this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: FreeTrialDetailDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Free trial': e.freeTrial?.reference ,
                'Etudiant': e.etudiant?.ref ,
                'Presence': e.presence? 'Vrai' : 'Faux' ,
                'Whats up message sent': e.whatsUpMessageSent? 'Vrai' : 'Faux' ,
                'Date envoiwhats up message': this.datePipe.transform(e.dateEnvoiwhatsUpMessage , 'dd/MM/yyyy hh:mm'),
                'Email message sent': e.emailMessageSent? 'Vrai' : 'Faux' ,
                'Date envoi email message': this.datePipe.transform(e.dateEnvoiEmailMessage , 'dd/MM/yyyy hh:mm'),
                'Abonne': e.abonne? 'Vrai' : 'Faux' ,
            }
        });

        this.criteriaData = [{
        //'Free trial': this.criteria.freeTrial?.reference ? this.criteria.freeTrial?.reference : environment.emptyForExport ,
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
            'Presence': this.criteria.presence ? (this.criteria.presence ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Whats up message sent': this.criteria.whatsUpMessageSent ? (this.criteria.whatsUpMessageSent ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Date envoiwhats up message Min': this.criteria.dateEnvoiwhatsUpMessageFrom ? this.datePipe.transform(this.criteria.dateEnvoiwhatsUpMessageFrom , this.dateFormat) : environment.emptyForExport ,
            'Date envoiwhats up message Max': this.criteria.dateEnvoiwhatsUpMessageTo ? this.datePipe.transform(this.criteria.dateEnvoiwhatsUpMessageTo , this.dateFormat) : environment.emptyForExport ,
            'Email message sent': this.criteria.emailMessageSent ? (this.criteria.emailMessageSent ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Date envoi email message Min': this.criteria.dateEnvoiEmailMessageFrom ? this.datePipe.transform(this.criteria.dateEnvoiEmailMessageFrom , this.dateFormat) : environment.emptyForExport ,
            'Date envoi email message Max': this.criteria.dateEnvoiEmailMessageTo ? this.datePipe.transform(this.criteria.dateEnvoiEmailMessageTo , this.dateFormat) : environment.emptyForExport ,
            'Abonne': this.criteria.abonne ? (this.criteria.abonne ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
        }];
      }
}
