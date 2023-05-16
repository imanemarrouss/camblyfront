import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {EtatInscriptionService} from 'src/app/controller/service/EtatInscription.service';
import {EtatInscriptionDto} from 'src/app/controller/model/EtatInscription.model';
import {EtatInscriptionCriteria} from 'src/app/controller/criteria/EtatInscriptionCriteria.model';

@Component({
  selector: 'app-etat-inscription-view-admin',
  templateUrl: './etat-inscription-view-admin.component.html'
})
export class EtatInscriptionViewAdminComponent extends AbstractViewController<EtatInscriptionDto, EtatInscriptionCriteria, EtatInscriptionService> implements OnInit {


    constructor(private datePipe: DatePipe, private etatInscriptionService: EtatInscriptionService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, etatInscriptionService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
