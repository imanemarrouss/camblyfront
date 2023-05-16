import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {TypeTeacherService} from 'src/app/controller/service/TypeTeacher.service';
import {TypeTeacherDto} from 'src/app/controller/model/TypeTeacher.model';
import {TypeTeacherCriteria} from 'src/app/controller/criteria/TypeTeacherCriteria.model';

@Component({
  selector: 'app-type-teacher-view-admin',
  templateUrl: './type-teacher-view-admin.component.html'
})
export class TypeTeacherViewAdminComponent extends AbstractViewController<TypeTeacherDto, TypeTeacherCriteria, TypeTeacherService> implements OnInit {


    constructor(private datePipe: DatePipe, private typeTeacherService: TypeTeacherService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, typeTeacherService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
