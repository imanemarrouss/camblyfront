import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {FreeTrialStudentEmailTemplateService} from 'src/app/controller/service/FreeTrialStudentEmailTemplate.service';
import {FreeTrialStudentEmailTemplateDto} from 'src/app/controller/model/FreeTrialStudentEmailTemplate.model';
import {FreeTrialStudentEmailTemplateCriteria} from 'src/app/controller/criteria/FreeTrialStudentEmailTemplateCriteria.model';



@Component({
  selector: 'app-free-trial-student-email-template-edit-admin',
  templateUrl: './free-trial-student-email-template-edit-admin.component.html'
})
export class FreeTrialStudentEmailTemplateEditAdminComponent extends AbstractEditController<FreeTrialStudentEmailTemplateDto, FreeTrialStudentEmailTemplateCriteria, FreeTrialStudentEmailTemplateService>   implements OnInit {






    constructor(private datePipe: DatePipe, private freeTrialStudentEmailTemplateService: FreeTrialStudentEmailTemplateService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, freeTrialStudentEmailTemplateService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}

    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }







}
