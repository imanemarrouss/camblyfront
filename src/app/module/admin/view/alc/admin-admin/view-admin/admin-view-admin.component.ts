import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {AdminService} from 'src/app/controller/service/Admin.service';
import {AdminDto} from 'src/app/controller/model/Admin.model';
import {AdminCriteria} from 'src/app/controller/criteria/AdminCriteria.model';

@Component({
  selector: 'app-admin-view-admin',
  templateUrl: './admin-view-admin.component.html'
})
export class AdminViewAdminComponent extends AbstractViewController<AdminDto, AdminCriteria, AdminService> implements OnInit {


    constructor(private datePipe: DatePipe, private adminService: AdminService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, adminService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
