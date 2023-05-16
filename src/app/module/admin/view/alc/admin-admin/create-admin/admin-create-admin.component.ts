import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {AdminService} from 'src/app/controller/service/Admin.service';
import {AdminDto} from 'src/app/controller/model/Admin.model';
import {AdminCriteria} from 'src/app/controller/criteria/AdminCriteria.model';
@Component({
  selector: 'app-admin-create-admin',
  templateUrl: './admin-create-admin.component.html'
})
export class AdminCreateAdminComponent extends AbstractCreateController<AdminDto, AdminCriteria, AdminService>  implements OnInit {




    constructor(private datePipe: DatePipe, private adminService: AdminService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, adminService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }










}
