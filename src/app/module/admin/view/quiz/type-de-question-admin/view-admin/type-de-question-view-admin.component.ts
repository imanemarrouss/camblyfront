import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {TypeDeQuestionService} from 'src/app/controller/service/TypeDeQuestion.service';
import {TypeDeQuestionDto} from 'src/app/controller/model/TypeDeQuestion.model';
import {TypeDeQuestionCriteria} from 'src/app/controller/criteria/TypeDeQuestionCriteria.model';

@Component({
  selector: 'app-type-de-question-view-admin',
  templateUrl: './type-de-question-view-admin.component.html'
})
export class TypeDeQuestionViewAdminComponent extends AbstractViewController<TypeDeQuestionDto, TypeDeQuestionCriteria, TypeDeQuestionService> implements OnInit {


    constructor(private datePipe: DatePipe, private typeDeQuestionService: TypeDeQuestionService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, typeDeQuestionService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
