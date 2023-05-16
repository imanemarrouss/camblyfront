import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {FaqProfService} from 'src/app/controller/service/FaqProf.service';
import {FaqProfDto} from 'src/app/controller/model/FaqProf.model';
import {FaqProfCriteria} from 'src/app/controller/criteria/FaqProfCriteria.model';

import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
import {AdminDto} from 'src/app/controller/model/Admin.model';
import {AdminService} from 'src/app/controller/service/Admin.service';
import {FaqTypeDto} from 'src/app/controller/model/FaqType.model';
import {FaqTypeService} from 'src/app/controller/service/FaqType.service';
@Component({
  selector: 'app-faq-prof-view-admin',
  templateUrl: './faq-prof-view-admin.component.html'
})
export class FaqProfViewAdminComponent extends AbstractViewController<FaqProfDto, FaqProfCriteria, FaqProfService> implements OnInit {


    constructor(private datePipe: DatePipe, private faqProfService: FaqProfService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private profService: ProfService, private adminService: AdminService, private faqTypeService: FaqTypeService
    ){
        super(datePipe, faqProfService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.prof = new ProfDto();
        this.profService.findAll().subscribe((data) => this.profs = data);
        this.admin = new AdminDto();
        this.adminService.findAll().subscribe((data) => this.admins = data);
        this.faqType = new FaqTypeDto();
        this.faqTypeService.findAll().subscribe((data) => this.faqTypes = data);
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
    get admin(): AdminDto {
       return this.adminService.item;
    }
    set admin(value: AdminDto) {
        this.adminService.item = value;
    }
    get admins():Array<AdminDto> {
       return this.adminService.items;
    }
    set admins(value: Array<AdminDto>) {
        this.adminService.items = value;
    }


}
