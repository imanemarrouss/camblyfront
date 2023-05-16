import {Component, OnInit} from '@angular/core';
import {FaqTypeService} from 'src/app/controller/service/FaqType.service';
import {FaqTypeDto} from 'src/app/controller/model/FaqType.model';
import {FaqTypeCriteria} from 'src/app/controller/criteria/FaqTypeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-faq-type-list-admin',
  templateUrl: './faq-type-list-admin.component.html'
})
export class FaqTypeListAdminComponent extends AbstractListController<FaqTypeDto, FaqTypeCriteria, FaqTypeService>  implements OnInit {

    fileName = 'FaqType';

  
    constructor(datePipe: DatePipe, faqTypeService: FaqTypeService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, faqTypeService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadFaqTypes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FaqType', 'list');
        isPermistted ? this.service.findAll().subscribe(faqTypes => this.items = faqTypes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: FaqTypeDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Destinataire': e.destinataire ,
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Destinataire': this.criteria.destinataire ? this.criteria.destinataire : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}
