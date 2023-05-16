import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {TypeHomeWorkService} from 'src/app/controller/service/TypeHomeWork.service';
import {TypeHomeWorkDto} from 'src/app/controller/model/TypeHomeWork.model';
import {TypeHomeWorkCriteria} from 'src/app/controller/criteria/TypeHomeWorkCriteria.model';

@Component({
  selector: 'app-type-home-work-view-admin',
  templateUrl: './type-home-work-view-admin.component.html'
})
export class TypeHomeWorkViewAdminComponent extends AbstractViewController<TypeHomeWorkDto, TypeHomeWorkCriteria, TypeHomeWorkService> implements OnInit {


    constructor(private datePipe: DatePipe, private typeHomeWorkService: TypeHomeWorkService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, typeHomeWorkService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
