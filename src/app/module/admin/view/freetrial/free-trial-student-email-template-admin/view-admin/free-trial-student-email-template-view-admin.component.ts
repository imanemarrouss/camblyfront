import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {FreeTrialStudentEmailTemplateService} from 'src/app/controller/service/FreeTrialStudentEmailTemplate.service';
import {FreeTrialStudentEmailTemplateDto} from 'src/app/controller/model/FreeTrialStudentEmailTemplate.model';
import {FreeTrialStudentEmailTemplateCriteria} from 'src/app/controller/criteria/FreeTrialStudentEmailTemplateCriteria.model';

@Component({
  selector: 'app-free-trial-student-email-template-view-admin',
  templateUrl: './free-trial-student-email-template-view-admin.component.html'
})
export class FreeTrialStudentEmailTemplateViewAdminComponent extends AbstractViewController<FreeTrialStudentEmailTemplateDto, FreeTrialStudentEmailTemplateCriteria, FreeTrialStudentEmailTemplateService> implements OnInit {


    constructor(private datePipe: DatePipe, private freeTrialStudentEmailTemplateService: FreeTrialStudentEmailTemplateService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, freeTrialStudentEmailTemplateService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
