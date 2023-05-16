import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {WorkloadBonusService} from 'src/app/controller/service/WorkloadBonus.service';
import {WorkloadBonusDto} from 'src/app/controller/model/WorkloadBonus.model';
import {WorkloadBonusCriteria} from 'src/app/controller/criteria/WorkloadBonusCriteria.model';

@Component({
  selector: 'app-workload-bonus-view-admin',
  templateUrl: './workload-bonus-view-admin.component.html'
})
export class WorkloadBonusViewAdminComponent extends AbstractViewController<WorkloadBonusDto, WorkloadBonusCriteria, WorkloadBonusService> implements OnInit {


    constructor(private datePipe: DatePipe, private workloadBonusService: WorkloadBonusService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, workloadBonusService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
