import {Component, OnInit} from '@angular/core';
import {GroupeEtudiantDetailService} from 'src/app/controller/service/GroupeEtudiantDetail.service';
import {GroupeEtudiantDetailDto} from 'src/app/controller/model/GroupeEtudiantDetail.model';
import {GroupeEtudiantDetailCriteria} from 'src/app/controller/criteria/GroupeEtudiantDetailCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { GroupeEtudiantService } from 'src/app/controller/service/GroupeEtudiant.service';
import { EtudiantService } from 'src/app/controller/service/Etudiant.service';

import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {GroupeEtudiantDto} from 'src/app/controller/model/GroupeEtudiant.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-groupe-etudiant-detail-list-admin',
  templateUrl: './groupe-etudiant-detail-list-admin.component.html'
})
export class GroupeEtudiantDetailListAdminComponent extends AbstractListController<GroupeEtudiantDetailDto, GroupeEtudiantDetailCriteria, GroupeEtudiantDetailService>  implements OnInit {

    fileName = 'GroupeEtudiantDetail';

    groupeEtudiants :Array<GroupeEtudiantDto>;
    etudiants :Array<EtudiantDto>;
  
    constructor(datePipe: DatePipe, groupeEtudiantDetailService: GroupeEtudiantDetailService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private groupeEtudiantService: GroupeEtudiantService, private etudiantService: EtudiantService) {
        super(datePipe, groupeEtudiantDetailService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadGroupeEtudiant();
      this.loadEtudiant();
    }

    public async loadGroupeEtudiantDetails(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('GroupeEtudiantDetail', 'list');
        isPermistted ? this.service.findAll().subscribe(groupeEtudiantDetails => this.items = groupeEtudiantDetails,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'groupeEtudiant?.id', header: 'Groupe etudiant'},
            {field: 'etudiant?.ref', header: 'Etudiant'},
        ];
    }


    public async loadGroupeEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('GroupeEtudiantDetail', 'list');
        isPermistted ? this.groupeEtudiantService.findAll().subscribe(groupeEtudiants => this.groupeEtudiants = groupeEtudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('GroupeEtudiantDetail', 'list');
        isPermistted ? this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: GroupeEtudiantDetailDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Groupe etudiant': e.groupeEtudiant?.id ,
                'Etudiant': e.etudiant?.ref ,
            }
        });

        this.criteriaData = [{
        //'Groupe etudiant': this.criteria.groupeEtudiant?.id ? this.criteria.groupeEtudiant?.id : environment.emptyForExport ,
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
        }];
      }
}
