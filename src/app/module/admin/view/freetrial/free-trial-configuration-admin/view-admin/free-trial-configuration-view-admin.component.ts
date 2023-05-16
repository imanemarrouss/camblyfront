import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {FreeTrialConfigurationService} from 'src/app/controller/service/FreeTrialConfiguration.service';
import {FreeTrialConfigurationDto} from 'src/app/controller/model/FreeTrialConfiguration.model';
import {FreeTrialConfigurationCriteria} from 'src/app/controller/criteria/FreeTrialConfigurationCriteria.model';

@Component({
  selector: 'app-free-trial-configuration-view-admin',
  templateUrl: './free-trial-configuration-view-admin.component.html'
})
export class FreeTrialConfigurationViewAdminComponent extends AbstractViewController<FreeTrialConfigurationDto, FreeTrialConfigurationCriteria, FreeTrialConfigurationService> implements OnInit {


    constructor(private datePipe: DatePipe, private freeTrialConfigurationService: FreeTrialConfigurationService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, freeTrialConfigurationService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
