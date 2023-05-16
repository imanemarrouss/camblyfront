import {Component, OnInit} from '@angular/core';
import {GroupeEtudeService} from 'src/app/controller/service/GroupeEtude.service';
import {GroupeEtudeDto} from 'src/app/controller/model/GroupeEtude.model';
import {GroupeEtudeCriteria} from 'src/app/controller/criteria/GroupeEtudeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-groupe-etude-list-admin',
  templateUrl: './groupe-etude-list-admin.component.html'
})
export class GroupeEtudeListAdminComponent extends AbstractListController<GroupeEtudeDto, GroupeEtudeCriteria, GroupeEtudeService>  implements OnInit {

    fileName = 'GroupeEtude';

  
    constructor(datePipe: DatePipe, groupeEtudeService: GroupeEtudeService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, groupeEtudeService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadGroupeEtudes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('GroupeEtude', 'list');
        isPermistted ? this.service.findAll().subscribe(groupeEtudes => this.items = groupeEtudes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'nombreEtudiant', header: 'Nombre etudiant'},
        ];
    }



	public initDuplicate(res: GroupeEtudeDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Description': e.description ,
                 'Nombre etudiant': e.nombreEtudiant ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Nombre etudiant Min': this.criteria.nombreEtudiantMin ? this.criteria.nombreEtudiantMin : environment.emptyForExport ,
            'Nombre etudiant Max': this.criteria.nombreEtudiantMax ? this.criteria.nombreEtudiantMax : environment.emptyForExport ,
        }];
      }
}
