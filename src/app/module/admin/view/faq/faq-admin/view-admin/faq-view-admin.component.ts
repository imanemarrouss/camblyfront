import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {FaqService} from 'src/app/controller/service/Faq.service';
import {FaqDto} from 'src/app/controller/model/Faq.model';
import {FaqCriteria} from 'src/app/controller/criteria/FaqCriteria.model';

import {FaqTypeDto} from 'src/app/controller/model/FaqType.model';
import {FaqTypeService} from 'src/app/controller/service/FaqType.service';
@Component({
  selector: 'app-faq-view-admin',
  templateUrl: './faq-view-admin.component.html'
})
export class FaqViewAdminComponent extends AbstractViewController<FaqDto, FaqCriteria, FaqService> implements OnInit {


    constructor(private datePipe: DatePipe, private faqService: FaqService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private faqTypeService: FaqTypeService
    ){
        super(datePipe, faqService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.faqType = new FaqTypeDto();
        this.faqTypeService.findAll().subscribe((data) => this.faqTypes = data);
    }


    get faqType(): FaqTypeDto {
       return this.faqTypeService.item;
    }
    set faqType(value: FaqTypeDto) {
        this.faqTypeService.item = value;
    }
    get faqTypes():Array<FaqTypeDto> {
       return this.faqTypeService.items;
    }
    set faqTypes(value: Array<FaqTypeDto>) {
        this.faqTypeService.items = value;
    }


}
