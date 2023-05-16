import {Component, OnInit} from '@angular/core';
import {AdminService} from 'src/app/controller/service/Admin.service';
import {AdminDto} from 'src/app/controller/model/Admin.model';
import {AdminCriteria} from 'src/app/controller/criteria/AdminCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-admin-list-admin',
  templateUrl: './admin-list-admin.component.html'
})
export class AdminListAdminComponent extends AbstractListController<AdminDto, AdminCriteria, AdminService>  implements OnInit {

    fileName = 'Admin';

  
    constructor(datePipe: DatePipe, adminService: AdminService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, adminService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadAdmins(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Admin', 'list');
        isPermistted ? this.service.findAll().subscribe(admins => this.items = admins,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'description', header: 'Description'},
        ];
    }



	public initDuplicate(res: AdminDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Description': e.description ,
            }
        });

        this.criteriaData = [{
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        }];
      }
}
