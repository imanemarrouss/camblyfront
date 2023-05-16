import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {NiveauEtudeService} from 'src/app/controller/service/NiveauEtude.service';
import {NiveauEtudeDto} from 'src/app/controller/model/NiveauEtude.model';
import {NiveauEtudeCriteria} from 'src/app/controller/criteria/NiveauEtudeCriteria.model';

@Component({
  selector: 'app-niveau-etude-view-admin',
  templateUrl: './niveau-etude-view-admin.component.html'
})
export class NiveauEtudeViewAdminComponent extends AbstractViewController<NiveauEtudeDto, NiveauEtudeCriteria, NiveauEtudeService> implements OnInit {


    constructor(private datePipe: DatePipe, private niveauEtudeService: NiveauEtudeService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, niveauEtudeService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
