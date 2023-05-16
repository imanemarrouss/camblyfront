import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {EtatCoursService} from 'src/app/controller/service/EtatCours.service';
import {EtatCoursDto} from 'src/app/controller/model/EtatCours.model';
import {EtatCoursCriteria} from 'src/app/controller/criteria/EtatCoursCriteria.model';

@Component({
  selector: 'app-etat-cours-view-admin',
  templateUrl: './etat-cours-view-admin.component.html'
})
export class EtatCoursViewAdminComponent extends AbstractViewController<EtatCoursDto, EtatCoursCriteria, EtatCoursService> implements OnInit {


    constructor(private datePipe: DatePipe, private etatCoursService: EtatCoursService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, etatCoursService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
