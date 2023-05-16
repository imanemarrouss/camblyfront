import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {FreeTrialformuleService} from 'src/app/controller/service/FreeTrialformule.service';
import {FreeTrialformuleDto} from 'src/app/controller/model/FreeTrialformule.model';
import {FreeTrialformuleCriteria} from 'src/app/controller/criteria/FreeTrialformuleCriteria.model';

import {InscriptionDto} from 'src/app/controller/model/Inscription.model';
import {InscriptionService} from 'src/app/controller/service/Inscription.service';
@Component({
  selector: 'app-free-trialformule-view-admin',
  templateUrl: './free-trialformule-view-admin.component.html'
})
export class FreeTrialformuleViewAdminComponent extends AbstractViewController<FreeTrialformuleDto, FreeTrialformuleCriteria, FreeTrialformuleService> implements OnInit {


    constructor(private datePipe: DatePipe, private freeTrialformuleService: FreeTrialformuleService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private inscriptionService: InscriptionService
    ){
        super(datePipe, freeTrialformuleService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.inscription = new InscriptionDto();
        this.inscriptionService.findAll().subscribe((data) => this.inscriptions = data);
    }


    get inscription(): InscriptionDto {
       return this.inscriptionService.item;
    }
    set inscription(value: InscriptionDto) {
        this.inscriptionService.item = value;
    }
    get inscriptions():Array<InscriptionDto> {
       return this.inscriptionService.items;
    }
    set inscriptions(value: Array<InscriptionDto>) {
        this.inscriptionService.items = value;
    }


}
