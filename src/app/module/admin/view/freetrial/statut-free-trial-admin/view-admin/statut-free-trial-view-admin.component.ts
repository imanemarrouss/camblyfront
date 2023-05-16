import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {StatutFreeTrialService} from 'src/app/controller/service/StatutFreeTrial.service';
import {StatutFreeTrialDto} from 'src/app/controller/model/StatutFreeTrial.model';
import {StatutFreeTrialCriteria} from 'src/app/controller/criteria/StatutFreeTrialCriteria.model';

@Component({
  selector: 'app-statut-free-trial-view-admin',
  templateUrl: './statut-free-trial-view-admin.component.html'
})
export class StatutFreeTrialViewAdminComponent extends AbstractViewController<StatutFreeTrialDto, StatutFreeTrialCriteria, StatutFreeTrialService> implements OnInit {


    constructor(private datePipe: DatePipe, private statutFreeTrialService: StatutFreeTrialService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, statutFreeTrialService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
