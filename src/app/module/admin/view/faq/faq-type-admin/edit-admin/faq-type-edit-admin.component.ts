import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {FaqTypeService} from 'src/app/controller/service/FaqType.service';
import {FaqTypeDto} from 'src/app/controller/model/FaqType.model';
import {FaqTypeCriteria} from 'src/app/controller/criteria/FaqTypeCriteria.model';



@Component({
  selector: 'app-faq-type-edit-admin',
  templateUrl: './faq-type-edit-admin.component.html'
})
export class FaqTypeEditAdminComponent extends AbstractEditController<FaqTypeDto, FaqTypeCriteria, FaqTypeService>   implements OnInit {


    private _validFaqTypeLibelle = true;




    constructor(private datePipe: DatePipe, private faqTypeService: FaqTypeService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, faqTypeService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}

    public setValidation(value : boolean){
        this.validFaqTypeLibelle = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateFaqTypeLibelle();
    }
    public validateFaqTypeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validFaqTypeLibelle = false;
        } else {
            this.validFaqTypeLibelle = true;
        }
    }






    get validFaqTypeLibelle(): boolean {
        return this._validFaqTypeLibelle;
    }
    set validFaqTypeLibelle(value: boolean) {
        this._validFaqTypeLibelle = value;
    }

}
