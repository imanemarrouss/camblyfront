import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {LangueService} from 'src/app/controller/service/Langue.service';
import {LangueDto} from 'src/app/controller/model/Langue.model';
import {LangueCriteria} from 'src/app/controller/criteria/LangueCriteria.model';

@Component({
  selector: 'app-langue-view-admin',
  templateUrl: './langue-view-admin.component.html'
})
export class LangueViewAdminComponent extends AbstractViewController<LangueDto, LangueCriteria, LangueService> implements OnInit {


    constructor(private datePipe: DatePipe, private langueService: LangueService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, langueService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
