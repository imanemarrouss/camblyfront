import {Component, OnInit} from '@angular/core';
import {ConfirmationTokenService} from 'src/app/controller/service/ConfirmationToken.service';
import {ConfirmationTokenDto} from 'src/app/controller/model/ConfirmationToken.model';
import {ConfirmationTokenCriteria} from 'src/app/controller/criteria/ConfirmationTokenCriteria.model';
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
  selector: 'app-confirmation-token-list-admin',
  templateUrl: './confirmation-token-list-admin.component.html'
})
export class ConfirmationTokenListAdminComponent extends AbstractListController<ConfirmationTokenDto, ConfirmationTokenCriteria, ConfirmationTokenService>  implements OnInit {

    fileName = 'ConfirmationToken';

    etudiants :Array<EtudiantDto>;
  
    constructor(datePipe: DatePipe, confirmationTokenService: ConfirmationTokenService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private etudiantService: EtudiantService) {
        super(datePipe, confirmationTokenService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadEtudiant();
    }

    public async loadConfirmationTokens(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ConfirmationToken', 'list');
        isPermistted ? this.service.findAll().subscribe(confirmationTokens => this.items = confirmationTokens,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'token', header: 'Token'},
            {field: 'expiresAt', header: 'Expires at'},
            {field: 'createdAt', header: 'Created at'},
            {field: 'confirmedAt', header: 'Confirmed at'},
            {field: 'etudiant?.ref', header: 'Etudiant'},
        ];
    }


    public async loadEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ConfirmationToken', 'list');
        isPermistted ? this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: ConfirmationTokenDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Token': e.token ,
                'Expires at': this.datePipe.transform(e.expiresAt , 'dd/MM/yyyy hh:mm'),
                'Created at': this.datePipe.transform(e.createdAt , 'dd/MM/yyyy hh:mm'),
                'Confirmed at': this.datePipe.transform(e.confirmedAt , 'dd/MM/yyyy hh:mm'),
                'Etudiant': e.etudiant?.ref ,
            }
        });

        this.criteriaData = [{
            'Token': this.criteria.token ? this.criteria.token : environment.emptyForExport ,
            'Expires at Min': this.criteria.expiresAtFrom ? this.datePipe.transform(this.criteria.expiresAtFrom , this.dateFormat) : environment.emptyForExport ,
            'Expires at Max': this.criteria.expiresAtTo ? this.datePipe.transform(this.criteria.expiresAtTo , this.dateFormat) : environment.emptyForExport ,
            'Created at Min': this.criteria.createdAtFrom ? this.datePipe.transform(this.criteria.createdAtFrom , this.dateFormat) : environment.emptyForExport ,
            'Created at Max': this.criteria.createdAtTo ? this.datePipe.transform(this.criteria.createdAtTo , this.dateFormat) : environment.emptyForExport ,
            'Confirmed at Min': this.criteria.confirmedAtFrom ? this.datePipe.transform(this.criteria.confirmedAtFrom , this.dateFormat) : environment.emptyForExport ,
            'Confirmed at Max': this.criteria.confirmedAtTo ? this.datePipe.transform(this.criteria.confirmedAtTo , this.dateFormat) : environment.emptyForExport ,
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
        }];
      }
}
