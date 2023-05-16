import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {GroupeEtudeService} from 'src/app/controller/service/GroupeEtude.service';
import {GroupeEtudeDto} from 'src/app/controller/model/GroupeEtude.model';
import {GroupeEtudeCriteria} from 'src/app/controller/criteria/GroupeEtudeCriteria.model';

@Component({
  selector: 'app-groupe-etude-view-admin',
  templateUrl: './groupe-etude-view-admin.component.html'
})
export class GroupeEtudeViewAdminComponent extends AbstractViewController<GroupeEtudeDto, GroupeEtudeCriteria, GroupeEtudeService> implements OnInit {


    constructor(private datePipe: DatePipe, private groupeEtudeService: GroupeEtudeService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, groupeEtudeService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
