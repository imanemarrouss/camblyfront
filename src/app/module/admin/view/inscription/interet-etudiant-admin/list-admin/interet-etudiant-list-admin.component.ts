import {Component, OnInit} from '@angular/core';
import {InteretEtudiantService} from 'src/app/controller/service/InteretEtudiant.service';
import {InteretEtudiantDto} from 'src/app/controller/model/InteretEtudiant.model';
import {InteretEtudiantCriteria} from 'src/app/controller/criteria/InteretEtudiantCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-interet-etudiant-list-admin',
  templateUrl: './interet-etudiant-list-admin.component.html'
})
export class InteretEtudiantListAdminComponent extends AbstractListController<InteretEtudiantDto, InteretEtudiantCriteria, InteretEtudiantService>  implements OnInit {

    fileName = 'InteretEtudiant';

  
    constructor(datePipe: DatePipe, interetEtudiantService: InteretEtudiantService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, interetEtudiantService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadInteretEtudiants(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('InteretEtudiant', 'list');
        isPermistted ? this.service.findAll().subscribe(interetEtudiants => this.items = interetEtudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: InteretEtudiantDto) {
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
