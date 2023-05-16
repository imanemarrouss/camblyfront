import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {FreeTrialTeacherEmailTemplateService} from 'src/app/controller/service/FreeTrialTeacherEmailTemplate.service';
import {FreeTrialTeacherEmailTemplateDto} from 'src/app/controller/model/FreeTrialTeacherEmailTemplate.model';
import {FreeTrialTeacherEmailTemplateCriteria} from 'src/app/controller/criteria/FreeTrialTeacherEmailTemplateCriteria.model';

@Component({
  selector: 'app-free-trial-teacher-email-template-view-admin',
  templateUrl: './free-trial-teacher-email-template-view-admin.component.html'
})
export class FreeTrialTeacherEmailTemplateViewAdminComponent extends AbstractViewController<FreeTrialTeacherEmailTemplateDto, FreeTrialTeacherEmailTemplateCriteria, FreeTrialTeacherEmailTemplateService> implements OnInit {


    constructor(private datePipe: DatePipe, private freeTrialTeacherEmailTemplateService: FreeTrialTeacherEmailTemplateService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, freeTrialTeacherEmailTemplateService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
