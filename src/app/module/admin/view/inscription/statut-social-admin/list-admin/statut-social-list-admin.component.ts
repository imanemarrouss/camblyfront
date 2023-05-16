import {Component, OnInit} from '@angular/core';
import {StatutSocialService} from 'src/app/controller/service/StatutSocial.service';
import {StatutSocialDto} from 'src/app/controller/model/StatutSocial.model';
import {StatutSocialCriteria} from 'src/app/controller/criteria/StatutSocialCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-statut-social-list-admin',
  templateUrl: './statut-social-list-admin.component.html'
})
export class StatutSocialListAdminComponent extends AbstractListController<StatutSocialDto, StatutSocialCriteria, StatutSocialService>  implements OnInit {

    fileName = 'StatutSocial';

  
    constructor(datePipe: DatePipe, statutSocialService: StatutSocialService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, statutSocialService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadStatutSocials(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('StatutSocial', 'list');
        isPermistted ? this.service.findAll().subscribe(statutSocials => this.items = statutSocials,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: StatutSocialDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}
