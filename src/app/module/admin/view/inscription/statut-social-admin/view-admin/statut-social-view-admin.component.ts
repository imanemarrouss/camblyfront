import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {StatutSocialService} from 'src/app/controller/service/StatutSocial.service';
import {StatutSocialDto} from 'src/app/controller/model/StatutSocial.model';
import {StatutSocialCriteria} from 'src/app/controller/criteria/StatutSocialCriteria.model';

@Component({
  selector: 'app-statut-social-view-admin',
  templateUrl: './statut-social-view-admin.component.html'
})
export class StatutSocialViewAdminComponent extends AbstractViewController<StatutSocialDto, StatutSocialCriteria, StatutSocialService> implements OnInit {


    constructor(private datePipe: DatePipe, private statutSocialService: StatutSocialService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, statutSocialService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
