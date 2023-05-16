import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {SectionItemService} from 'src/app/controller/service/SectionItem.service';
import {SectionItemDto} from 'src/app/controller/model/SectionItem.model';
import {SectionItemCriteria} from 'src/app/controller/criteria/SectionItemCriteria.model';

import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';
@Component({
  selector: 'app-section-item-view-admin',
  templateUrl: './section-item-view-admin.component.html'
})
export class SectionItemViewAdminComponent extends AbstractViewController<SectionItemDto, SectionItemCriteria, SectionItemService> implements OnInit {


    constructor(private datePipe: DatePipe, private sectionItemService: SectionItemService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private sectionService: SectionService
    ){
        super(datePipe, sectionItemService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.section = new SectionDto();
        this.sectionService.findAll().subscribe((data) => this.sections = data);
    }


    get section(): SectionDto {
       return this.sectionService.item;
    }
    set section(value: SectionDto) {
        this.sectionService.item = value;
    }
    get sections():Array<SectionDto> {
       return this.sectionService.items;
    }
    set sections(value: Array<SectionDto>) {
        this.sectionService.items = value;
    }


}
