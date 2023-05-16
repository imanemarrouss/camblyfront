import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {EtatEtudiantScheduleService} from 'src/app/controller/service/EtatEtudiantSchedule.service';
import {EtatEtudiantScheduleDto} from 'src/app/controller/model/EtatEtudiantSchedule.model';
import {EtatEtudiantScheduleCriteria} from 'src/app/controller/criteria/EtatEtudiantScheduleCriteria.model';

@Component({
  selector: 'app-etat-etudiant-schedule-view-admin',
  templateUrl: './etat-etudiant-schedule-view-admin.component.html'
})
export class EtatEtudiantScheduleViewAdminComponent extends AbstractViewController<EtatEtudiantScheduleDto, EtatEtudiantScheduleCriteria, EtatEtudiantScheduleService> implements OnInit {


    constructor(private datePipe: DatePipe, private etatEtudiantScheduleService: EtatEtudiantScheduleService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, etatEtudiantScheduleService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
