import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {FreeTrialStudentWhatsTemplateService} from 'src/app/controller/service/FreeTrialStudentWhatsTemplate.service';
import {FreeTrialStudentWhatsTemplateDto} from 'src/app/controller/model/FreeTrialStudentWhatsTemplate.model';
import {FreeTrialStudentWhatsTemplateCriteria} from 'src/app/controller/criteria/FreeTrialStudentWhatsTemplateCriteria.model';

@Component({
  selector: 'app-free-trial-student-whats-template-view-admin',
  templateUrl: './free-trial-student-whats-template-view-admin.component.html'
})
export class FreeTrialStudentWhatsTemplateViewAdminComponent extends AbstractViewController<FreeTrialStudentWhatsTemplateDto, FreeTrialStudentWhatsTemplateCriteria, FreeTrialStudentWhatsTemplateService> implements OnInit {


    constructor(private datePipe: DatePipe, private freeTrialStudentWhatsTemplateService: FreeTrialStudentWhatsTemplateService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, freeTrialStudentWhatsTemplateService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
