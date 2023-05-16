import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {LevelTestConfigurationService} from 'src/app/controller/service/LevelTestConfiguration.service';
import {LevelTestConfigurationDto} from 'src/app/controller/model/LevelTestConfiguration.model';
import {LevelTestConfigurationCriteria} from 'src/app/controller/criteria/LevelTestConfigurationCriteria.model';

import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {ParcoursService} from 'src/app/controller/service/Parcours.service';
@Component({
  selector: 'app-level-test-configuration-view-admin',
  templateUrl: './level-test-configuration-view-admin.component.html'
})
export class LevelTestConfigurationViewAdminComponent extends AbstractViewController<LevelTestConfigurationDto, LevelTestConfigurationCriteria, LevelTestConfigurationService> implements OnInit {


    constructor(private datePipe: DatePipe, private levelTestConfigurationService: LevelTestConfigurationService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private parcoursService: ParcoursService
    ){
        super(datePipe, levelTestConfigurationService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.parcours = new ParcoursDto();
        this.parcoursService.findAll().subscribe((data) => this.parcourss = data);
    }


    get parcours(): ParcoursDto {
       return this.parcoursService.item;
    }
    set parcours(value: ParcoursDto) {
        this.parcoursService.item = value;
    }
    get parcourss():Array<ParcoursDto> {
       return this.parcoursService.items;
    }
    set parcourss(value: Array<ParcoursDto>) {
        this.parcoursService.items = value;
    }


}
