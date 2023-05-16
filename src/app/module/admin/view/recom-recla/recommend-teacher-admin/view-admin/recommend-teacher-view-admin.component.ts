import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {RecommendTeacherService} from 'src/app/controller/service/RecommendTeacher.service';
import {RecommendTeacherDto} from 'src/app/controller/model/RecommendTeacher.model';
import {RecommendTeacherCriteria} from 'src/app/controller/criteria/RecommendTeacherCriteria.model';

import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
@Component({
  selector: 'app-recommend-teacher-view-admin',
  templateUrl: './recommend-teacher-view-admin.component.html'
})
export class RecommendTeacherViewAdminComponent extends AbstractViewController<RecommendTeacherDto, RecommendTeacherCriteria, RecommendTeacherService> implements OnInit {


    constructor(private datePipe: DatePipe, private recommendTeacherService: RecommendTeacherService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private profService: ProfService
    ){
        super(datePipe, recommendTeacherService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.prof = new ProfDto();
        this.profService.findAll().subscribe((data) => this.profs = data);
    }


    get prof(): ProfDto {
       return this.profService.item;
    }
    set prof(value: ProfDto) {
        this.profService.item = value;
    }
    get profs():Array<ProfDto> {
       return this.profService.items;
    }
    set profs(value: Array<ProfDto>) {
        this.profService.items = value;
    }


}
