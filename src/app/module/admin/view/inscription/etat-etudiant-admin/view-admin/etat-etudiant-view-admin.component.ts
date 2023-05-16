import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {EtatEtudiantService} from 'src/app/controller/service/EtatEtudiant.service';
import {EtatEtudiantDto} from 'src/app/controller/model/EtatEtudiant.model';
import {EtatEtudiantCriteria} from 'src/app/controller/criteria/EtatEtudiantCriteria.model';

@Component({
  selector: 'app-etat-etudiant-view-admin',
  templateUrl: './etat-etudiant-view-admin.component.html'
})
export class EtatEtudiantViewAdminComponent extends AbstractViewController<EtatEtudiantDto, EtatEtudiantCriteria, EtatEtudiantService> implements OnInit {


    constructor(private datePipe: DatePipe, private etatEtudiantService: EtatEtudiantService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, etatEtudiantService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
