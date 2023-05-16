import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {FonctionService} from 'src/app/controller/service/Fonction.service';
import {FonctionDto} from 'src/app/controller/model/Fonction.model';
import {FonctionCriteria} from 'src/app/controller/criteria/FonctionCriteria.model';

@Component({
  selector: 'app-fonction-view-admin',
  templateUrl: './fonction-view-admin.component.html'
})
export class FonctionViewAdminComponent extends AbstractViewController<FonctionDto, FonctionCriteria, FonctionService> implements OnInit {


    constructor(private datePipe: DatePipe, private fonctionService: FonctionService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, fonctionService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
