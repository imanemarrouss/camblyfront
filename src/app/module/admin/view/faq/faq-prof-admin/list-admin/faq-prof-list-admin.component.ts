import {Component, OnInit} from '@angular/core';
import {FaqProfService} from 'src/app/controller/service/FaqProf.service';
import {FaqProfDto} from 'src/app/controller/model/FaqProf.model';
import {FaqProfCriteria} from 'src/app/controller/criteria/FaqProfCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { ProfService } from 'src/app/controller/service/Prof.service';
import { AdminService } from 'src/app/controller/service/Admin.service';
import { FaqTypeService } from 'src/app/controller/service/FaqType.service';

import {FaqTypeDto} from 'src/app/controller/model/FaqType.model';
import {AdminDto} from 'src/app/controller/model/Admin.model';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-faq-prof-list-admin',
  templateUrl: './faq-prof-list-admin.component.html'
})
export class FaqProfListAdminComponent extends AbstractListController<FaqProfDto, FaqProfCriteria, FaqProfService>  implements OnInit {

    fileName = 'FaqProf';

    profs :Array<ProfDto>;
    admins :Array<AdminDto>;
    faqTypes :Array<FaqTypeDto>;
  
    constructor(datePipe: DatePipe, faqProfService: FaqProfService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private profService: ProfService, private adminService: AdminService, private faqTypeService: FaqTypeService) {
        super(datePipe, faqProfService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadProf();
      this.loadAdmin();
      this.loadFaqType();
    }

    public async loadFaqProfs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FaqProf', 'list');
        isPermistted ? this.service.findAll().subscribe(faqProfs => this.items = faqProfs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'admin?.id', header: 'Admin'},
            {field: 'faqType?.libelle', header: 'Faq type'},
        ];
    }


    public async loadProf(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FaqProf', 'list');
        isPermistted ? this.profService.findAllOptimized().subscribe(profs => this.profs = profs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadAdmin(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FaqProf', 'list');
        isPermistted ? this.adminService.findAll().subscribe(admins => this.admins = admins,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadFaqType(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FaqProf', 'list');
        isPermistted ? this.faqTypeService.findAllOptimized().subscribe(faqTypes => this.faqTypes = faqTypes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: FaqProfDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Description': e.description ,
                 'Libelle': e.libelle ,
                'Prof': e.prof?.ref ,
                'Admin': e.admin?.id ,
                'Faq type': e.faqType?.libelle ,
            }
        });

        this.criteriaData = [{
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
        //'Admin': this.criteria.admin?.id ? this.criteria.admin?.id : environment.emptyForExport ,
        //'Faq type': this.criteria.faqType?.libelle ? this.criteria.faqType?.libelle : environment.emptyForExport ,
        }];
      }
}
