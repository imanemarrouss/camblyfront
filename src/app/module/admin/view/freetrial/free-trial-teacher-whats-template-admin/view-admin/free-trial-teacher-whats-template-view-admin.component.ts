import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {FreeTrialTeacherWhatsTemplateService} from 'src/app/controller/service/FreeTrialTeacherWhatsTemplate.service';
import {FreeTrialTeacherWhatsTemplateDto} from 'src/app/controller/model/FreeTrialTeacherWhatsTemplate.model';
import {FreeTrialTeacherWhatsTemplateCriteria} from 'src/app/controller/criteria/FreeTrialTeacherWhatsTemplateCriteria.model';

@Component({
  selector: 'app-free-trial-teacher-whats-template-view-admin',
  templateUrl: './free-trial-teacher-whats-template-view-admin.component.html'
})
export class FreeTrialTeacherWhatsTemplateViewAdminComponent extends AbstractViewController<FreeTrialTeacherWhatsTemplateDto, FreeTrialTeacherWhatsTemplateCriteria, FreeTrialTeacherWhatsTemplateService> implements OnInit {


    constructor(private datePipe: DatePipe, private freeTrialTeacherWhatsTemplateService: FreeTrialTeacherWhatsTemplateService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, freeTrialTeacherWhatsTemplateService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
