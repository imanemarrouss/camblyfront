import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {ServicesService} from 'src/app/controller/service/Services.service';
import {ServicesDto} from 'src/app/controller/model/Services.model';
import {ServicesCriteria} from 'src/app/controller/criteria/ServicesCriteria.model';

@Component({
  selector: 'app-services-view-admin',
  templateUrl: './services-view-admin.component.html'
})
export class ServicesViewAdminComponent extends AbstractViewController<ServicesDto, ServicesCriteria, ServicesService> implements OnInit {


    constructor(private datePipe: DatePipe, private servicesService: ServicesService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, servicesService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
