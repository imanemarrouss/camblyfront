import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {ClassAverageBonusService} from 'src/app/controller/service/ClassAverageBonus.service';
import {ClassAverageBonusDto} from 'src/app/controller/model/ClassAverageBonus.model';
import {ClassAverageBonusCriteria} from 'src/app/controller/criteria/ClassAverageBonusCriteria.model';

@Component({
  selector: 'app-class-average-bonus-view-admin',
  templateUrl: './class-average-bonus-view-admin.component.html'
})
export class ClassAverageBonusViewAdminComponent extends AbstractViewController<ClassAverageBonusDto, ClassAverageBonusCriteria, ClassAverageBonusService> implements OnInit {


    constructor(private datePipe: DatePipe, private classAverageBonusService: ClassAverageBonusService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, classAverageBonusService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
