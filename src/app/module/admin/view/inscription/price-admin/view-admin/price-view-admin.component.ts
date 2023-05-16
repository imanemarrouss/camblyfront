import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {PriceService} from 'src/app/controller/service/Price.service';
import {PriceDto} from 'src/app/controller/model/Price.model';
import {PriceCriteria} from 'src/app/controller/criteria/PriceCriteria.model';

@Component({
  selector: 'app-price-view-admin',
  templateUrl: './price-view-admin.component.html'
})
export class PriceViewAdminComponent extends AbstractViewController<PriceDto, PriceCriteria, PriceService> implements OnInit {


    constructor(private datePipe: DatePipe, private priceService: PriceService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, priceService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
