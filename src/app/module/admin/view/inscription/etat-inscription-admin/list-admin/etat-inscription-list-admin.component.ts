import {Component, OnInit} from '@angular/core';
import {EtatInscriptionService} from 'src/app/controller/service/EtatInscription.service';
import {EtatInscriptionDto} from 'src/app/controller/model/EtatInscription.model';
import {EtatInscriptionCriteria} from 'src/app/controller/criteria/EtatInscriptionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-etat-inscription-list-admin',
  templateUrl: './etat-inscription-list-admin.component.html'
})
export class EtatInscriptionListAdminComponent extends AbstractListController<EtatInscriptionDto, EtatInscriptionCriteria, EtatInscriptionService>  implements OnInit {

    fileName = 'EtatInscription';

  
    constructor(datePipe: DatePipe, etatInscriptionService: EtatInscriptionService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, etatInscriptionService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadEtatInscriptions(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EtatInscription', 'list');
        isPermistted ? this.service.findAll().subscribe(etatInscriptions => this.items = etatInscriptions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: EtatInscriptionDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}
