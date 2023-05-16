import {Component, OnInit} from '@angular/core';
import {InviteStudentService} from 'src/app/controller/service/InviteStudent.service';
import {InviteStudentDto} from 'src/app/controller/model/InviteStudent.model';
import {InviteStudentCriteria} from 'src/app/controller/criteria/InviteStudentCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { EtudiantService } from 'src/app/controller/service/Etudiant.service';

import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-invite-student-list-admin',
  templateUrl: './invite-student-list-admin.component.html'
})
export class InviteStudentListAdminComponent extends AbstractListController<InviteStudentDto, InviteStudentCriteria, InviteStudentService>  implements OnInit {

    fileName = 'InviteStudent';

     yesOrNoIsAccepted :any[] =[];
     yesOrNoIsPaidPack :any[] =[];
    etudiants :Array<EtudiantDto>;
  
    constructor(datePipe: DatePipe, inviteStudentService: InviteStudentService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private etudiantService: EtudiantService) {
        super(datePipe, inviteStudentService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadEtudiant();
    this.yesOrNoIsAccepted =  [{label: 'IsAccepted', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoIsPaidPack =  [{label: 'IsPaidPack', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }

    public async loadInviteStudents(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('InviteStudent', 'list');
        isPermistted ? this.service.findAll().subscribe(inviteStudents => this.items = inviteStudents,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'etudiant?.ref', header: 'Etudiant'},
            {field: 'isAccepted', header: 'Is accepted'},
            {field: 'isPaidPack', header: 'Is paid pack'},
            {field: 'emailInvited', header: 'Email invited'},
            {field: 'dateSentInvitation', header: 'Date sent invitation'},
            {field: 'dateAcceptInvitation', header: 'Date accept invitation'},
            {field: 'datePayPack', header: 'Date pay pack'},
        ];
    }


    public async loadEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('InviteStudent', 'list');
        isPermistted ? this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: InviteStudentDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                'Etudiant': e.etudiant?.ref ,
                'Is accepted': e.isAccepted? 'Vrai' : 'Faux' ,
                'Is paid pack': e.isPaidPack? 'Vrai' : 'Faux' ,
                 'Email invited': e.emailInvited ,
                'Date sent invitation': this.datePipe.transform(e.dateSentInvitation , 'dd/MM/yyyy hh:mm'),
                'Date accept invitation': this.datePipe.transform(e.dateAcceptInvitation , 'dd/MM/yyyy hh:mm'),
                'Date pay pack': this.datePipe.transform(e.datePayPack , 'dd/MM/yyyy hh:mm'),
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
            'Is accepted': this.criteria.isAccepted ? (this.criteria.isAccepted ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Is paid pack': this.criteria.isPaidPack ? (this.criteria.isPaidPack ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Email invited': this.criteria.emailInvited ? this.criteria.emailInvited : environment.emptyForExport ,
            'Date sent invitation Min': this.criteria.dateSentInvitationFrom ? this.datePipe.transform(this.criteria.dateSentInvitationFrom , this.dateFormat) : environment.emptyForExport ,
            'Date sent invitation Max': this.criteria.dateSentInvitationTo ? this.datePipe.transform(this.criteria.dateSentInvitationTo , this.dateFormat) : environment.emptyForExport ,
            'Date accept invitation Min': this.criteria.dateAcceptInvitationFrom ? this.datePipe.transform(this.criteria.dateAcceptInvitationFrom , this.dateFormat) : environment.emptyForExport ,
            'Date accept invitation Max': this.criteria.dateAcceptInvitationTo ? this.datePipe.transform(this.criteria.dateAcceptInvitationTo , this.dateFormat) : environment.emptyForExport ,
            'Date pay pack Min': this.criteria.datePayPackFrom ? this.datePipe.transform(this.criteria.datePayPackFrom , this.dateFormat) : environment.emptyForExport ,
            'Date pay pack Max': this.criteria.datePayPackTo ? this.datePipe.transform(this.criteria.datePayPackTo , this.dateFormat) : environment.emptyForExport ,
        }];
      }
}
