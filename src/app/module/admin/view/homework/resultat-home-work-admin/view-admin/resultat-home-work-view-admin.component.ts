import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {ResultatHomeWorkService} from 'src/app/controller/service/ResultatHomeWork.service';
import {ResultatHomeWorkDto} from 'src/app/controller/model/ResultatHomeWork.model';
import {ResultatHomeWorkCriteria} from 'src/app/controller/criteria/ResultatHomeWorkCriteria.model';

@Component({
  selector: 'app-resultat-home-work-view-admin',
  templateUrl: './resultat-home-work-view-admin.component.html'
})
export class ResultatHomeWorkViewAdminComponent extends AbstractViewController<ResultatHomeWorkDto, ResultatHomeWorkCriteria, ResultatHomeWorkService> implements OnInit {


    constructor(private datePipe: DatePipe, private resultatHomeWorkService: ResultatHomeWorkService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, resultatHomeWorkService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
