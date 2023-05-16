import {Component, OnInit} from '@angular/core';
import {TypeReclamationEtudiantService} from 'src/app/controller/service/TypeReclamationEtudiant.service';
import {TypeReclamationEtudiantDto} from 'src/app/controller/model/TypeReclamationEtudiant.model';
import {TypeReclamationEtudiantCriteria} from 'src/app/controller/criteria/TypeReclamationEtudiantCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-type-reclamation-etudiant-list-admin',
  templateUrl: './type-reclamation-etudiant-list-admin.component.html'
})
export class TypeReclamationEtudiantListAdminComponent extends AbstractListController<TypeReclamationEtudiantDto, TypeReclamationEtudiantCriteria, TypeReclamationEtudiantService>  implements OnInit {

    fileName = 'TypeReclamationEtudiant';

  
    constructor(datePipe: DatePipe, typeReclamationEtudiantService: TypeReclamationEtudiantService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, typeReclamationEtudiantService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadTypeReclamationEtudiants(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TypeReclamationEtudiant', 'list');
        isPermistted ? this.service.findAll().subscribe(typeReclamationEtudiants => this.items = typeReclamationEtudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: TypeReclamationEtudiantDto) {
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
