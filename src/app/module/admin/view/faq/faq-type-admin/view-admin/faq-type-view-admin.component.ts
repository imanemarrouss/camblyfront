import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {FaqTypeService} from 'src/app/controller/service/FaqType.service';
import {FaqTypeDto} from 'src/app/controller/model/FaqType.model';
import {FaqTypeCriteria} from 'src/app/controller/criteria/FaqTypeCriteria.model';

@Component({
  selector: 'app-faq-type-view-admin',
  templateUrl: './faq-type-view-admin.component.html'
})
export class FaqTypeViewAdminComponent extends AbstractViewController<FaqTypeDto, FaqTypeCriteria, FaqTypeService> implements OnInit {


    constructor(private datePipe: DatePipe, private faqTypeService: FaqTypeService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, faqTypeService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
