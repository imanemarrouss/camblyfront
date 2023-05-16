import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {PackStudentService} from 'src/app/controller/service/PackStudent.service';
import {PackStudentDto} from 'src/app/controller/model/PackStudent.model';
import {PackStudentCriteria} from 'src/app/controller/criteria/PackStudentCriteria.model';

import {PriceDto} from 'src/app/controller/model/Price.model';
import {PriceService} from 'src/app/controller/service/Price.service';
import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {ParcoursService} from 'src/app/controller/service/Parcours.service';
@Component({
  selector: 'app-pack-student-view-admin',
  templateUrl: './pack-student-view-admin.component.html'
})
export class PackStudentViewAdminComponent extends AbstractViewController<PackStudentDto, PackStudentCriteria, PackStudentService> implements OnInit {


    constructor(private datePipe: DatePipe, private packStudentService: PackStudentService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private priceService: PriceService, private parcoursService: ParcoursService
    ){
        super(datePipe, packStudentService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.parcours = new ParcoursDto();
        this.parcoursService.findAll().subscribe((data) => this.parcourss = data);
        this.price = new PriceDto();
        this.priceService.findAll().subscribe((data) => this.prices = data);
    }


    get price(): PriceDto {
       return this.priceService.item;
    }
    set price(value: PriceDto) {
        this.priceService.item = value;
    }
    get prices():Array<PriceDto> {
       return this.priceService.items;
    }
    set prices(value: Array<PriceDto>) {
        this.priceService.items = value;
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
