import {Component, OnInit} from '@angular/core';
import {FaqEtudiantService} from 'src/app/controller/service/FaqEtudiant.service';
import {FaqEtudiantDto} from 'src/app/controller/model/FaqEtudiant.model';
import {FaqEtudiantCriteria} from 'src/app/controller/criteria/FaqEtudiantCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { EtudiantService } from 'src/app/controller/service/Etudiant.service';
import { AdminService } from 'src/app/controller/service/Admin.service';
import { FaqTypeService } from 'src/app/controller/service/FaqType.service';

import {FaqTypeDto} from 'src/app/controller/model/FaqType.model';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {AdminDto} from 'src/app/controller/model/Admin.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-faq-etudiant-list-admin',
  templateUrl: './faq-etudiant-list-admin.component.html'
})
export class FaqEtudiantListAdminComponent extends AbstractListController<FaqEtudiantDto, FaqEtudiantCriteria, FaqEtudiantService>  implements OnInit {

    fileName = 'FaqEtudiant';

    etudiants :Array<EtudiantDto>;
    admins :Array<AdminDto>;
    faqTypes :Array<FaqTypeDto>;
  
    constructor(datePipe: DatePipe, faqEtudiantService: FaqEtudiantService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private etudiantService: EtudiantService, private adminService: AdminService, private faqTypeService: FaqTypeService) {
        super(datePipe, faqEtudiantService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadEtudiant();
      this.loadAdmin();
      this.loadFaqType();
    }

    public async loadFaqEtudiants(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FaqEtudiant', 'list');
        isPermistted ? this.service.findAll().subscribe(faqEtudiants => this.items = faqEtudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'etudiant?.ref', header: 'Etudiant'},
            {field: 'admin?.id', header: 'Admin'},
            {field: 'faqType?.libelle', header: 'Faq type'},
        ];
    }


    public async loadEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FaqEtudiant', 'list');
        isPermistted ? this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadAdmin(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FaqEtudiant', 'list');
        isPermistted ? this.adminService.findAll().subscribe(admins => this.admins = admins,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadFaqType(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FaqEtudiant', 'list');
        isPermistted ? this.faqTypeService.findAllOptimized().subscribe(faqTypes => this.faqTypes = faqTypes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: FaqEtudiantDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Description': e.description ,
                 'Libelle': e.libelle ,
                'Etudiant': e.etudiant?.ref ,
                'Admin': e.admin?.id ,
                'Faq type': e.faqType?.libelle ,
            }
        });

        this.criteriaData = [{
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
        //'Admin': this.criteria.admin?.id ? this.criteria.admin?.id : environment.emptyForExport ,
        //'Faq type': this.criteria.faqType?.libelle ? this.criteria.faqType?.libelle : environment.emptyForExport ,
        }];
      }
}
