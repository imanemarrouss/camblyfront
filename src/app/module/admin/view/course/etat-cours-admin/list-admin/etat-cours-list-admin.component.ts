import {Component, OnInit} from '@angular/core';
import {EtatCoursService} from 'src/app/controller/service/EtatCours.service';
import {EtatCoursDto} from 'src/app/controller/model/EtatCours.model';
import {EtatCoursCriteria} from 'src/app/controller/criteria/EtatCoursCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-etat-cours-list-admin',
  templateUrl: './etat-cours-list-admin.component.html'
})
export class EtatCoursListAdminComponent extends AbstractListController<EtatCoursDto, EtatCoursCriteria, EtatCoursService>  implements OnInit {

    fileName = 'EtatCours';

  
    constructor(datePipe: DatePipe, etatCoursService: EtatCoursService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, etatCoursService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadEtatCourss(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EtatCours', 'list');
        isPermistted ? this.service.findAll().subscribe(etatCourss => this.items = etatCourss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: EtatCoursDto) {
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
