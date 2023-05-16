import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {SkillService} from 'src/app/controller/service/Skill.service';
import {SkillDto} from 'src/app/controller/model/Skill.model';
import {SkillCriteria} from 'src/app/controller/criteria/SkillCriteria.model';

@Component({
  selector: 'app-skill-view-admin',
  templateUrl: './skill-view-admin.component.html'
})
export class SkillViewAdminComponent extends AbstractViewController<SkillDto, SkillCriteria, SkillService> implements OnInit {


    constructor(private datePipe: DatePipe, private skillService: SkillService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, skillService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
