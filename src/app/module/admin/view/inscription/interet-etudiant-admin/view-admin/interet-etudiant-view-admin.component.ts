import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {InteretEtudiantService} from 'src/app/controller/service/InteretEtudiant.service';
import {InteretEtudiantDto} from 'src/app/controller/model/InteretEtudiant.model';
import {InteretEtudiantCriteria} from 'src/app/controller/criteria/InteretEtudiantCriteria.model';

@Component({
  selector: 'app-interet-etudiant-view-admin',
  templateUrl: './interet-etudiant-view-admin.component.html'
})
export class InteretEtudiantViewAdminComponent extends AbstractViewController<InteretEtudiantDto, InteretEtudiantCriteria, InteretEtudiantService> implements OnInit {


    constructor(private datePipe: DatePipe, private interetEtudiantService: InteretEtudiantService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, interetEtudiantService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
