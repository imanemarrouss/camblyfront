import {Component, OnInit} from '@angular/core';
import {FreeTrialStudentWhatsTemplateService} from 'src/app/controller/service/FreeTrialStudentWhatsTemplate.service';
import {FreeTrialStudentWhatsTemplateDto} from 'src/app/controller/model/FreeTrialStudentWhatsTemplate.model';
import {FreeTrialStudentWhatsTemplateCriteria} from 'src/app/controller/criteria/FreeTrialStudentWhatsTemplateCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-free-trial-student-whats-template-list-admin',
  templateUrl: './free-trial-student-whats-template-list-admin.component.html'
})
export class FreeTrialStudentWhatsTemplateListAdminComponent extends AbstractListController<FreeTrialStudentWhatsTemplateDto, FreeTrialStudentWhatsTemplateCriteria, FreeTrialStudentWhatsTemplateService>  implements OnInit {

    fileName = 'FreeTrialStudentWhatsTemplate';

  
    constructor(datePipe: DatePipe, freeTrialStudentWhatsTemplateService: FreeTrialStudentWhatsTemplateService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, freeTrialStudentWhatsTemplateService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadFreeTrialStudentWhatsTemplates(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FreeTrialStudentWhatsTemplate', 'list');
        isPermistted ? this.service.findAll().subscribe(freeTrialStudentWhatsTemplates => this.items = freeTrialStudentWhatsTemplates,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'object', header: 'Object'},
            {field: 'source', header: 'Source'},
        ];
    }



	public initDuplicate(res: FreeTrialStudentWhatsTemplateDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Object': e.object ,
                 'Corps': e.corps ,
                 'Source': e.source ,
            }
        });

        this.criteriaData = [{
            'Object': this.criteria.object ? this.criteria.object : environment.emptyForExport ,
            'Corps': this.criteria.corps ? this.criteria.corps : environment.emptyForExport ,
            'Source': this.criteria.source ? this.criteria.source : environment.emptyForExport ,
        }];
      }
}
