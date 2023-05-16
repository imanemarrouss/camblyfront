import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {PriceService} from 'src/app/controller/service/Price.service';
import {PriceDto} from 'src/app/controller/model/Price.model';
import {PriceCriteria} from 'src/app/controller/criteria/PriceCriteria.model';



@Component({
  selector: 'app-price-edit-admin',
  templateUrl: './price-edit-admin.component.html'
})
export class PriceEditAdminComponent extends AbstractEditController<PriceDto, PriceCriteria, PriceService>   implements OnInit {


    private _validPriceLib = true;




    constructor(private datePipe: DatePipe, private priceService: PriceService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, priceService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}

    public setValidation(value : boolean){
        this.validPriceLib = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePriceLib();
    }
    public validatePriceLib(){
        if (this.stringUtilService.isEmpty(this.item.lib)) {
            this.errorMessages.push('Lib non valide');
            this.validPriceLib = false;
        } else {
            this.validPriceLib = true;
        }
    }






    get validPriceLib(): boolean {
        return this._validPriceLib;
    }
    set validPriceLib(value: boolean) {
        this._validPriceLib = value;
    }

}
