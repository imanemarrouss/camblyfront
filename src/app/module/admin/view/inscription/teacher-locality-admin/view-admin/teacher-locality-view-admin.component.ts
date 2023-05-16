import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {TeacherLocalityService} from 'src/app/controller/service/TeacherLocality.service';
import {TeacherLocalityDto} from 'src/app/controller/model/TeacherLocality.model';
import {TeacherLocalityCriteria} from 'src/app/controller/criteria/TeacherLocalityCriteria.model';

@Component({
  selector: 'app-teacher-locality-view-admin',
  templateUrl: './teacher-locality-view-admin.component.html'
})
export class TeacherLocalityViewAdminComponent extends AbstractViewController<TeacherLocalityDto, TeacherLocalityCriteria, TeacherLocalityService> implements OnInit {


    constructor(private datePipe: DatePipe, private teacherLocalityService: TeacherLocalityService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, teacherLocalityService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
