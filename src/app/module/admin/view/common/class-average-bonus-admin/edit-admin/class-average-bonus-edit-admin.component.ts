import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {ClassAverageBonusService} from 'src/app/controller/service/ClassAverageBonus.service';
import {ClassAverageBonusDto} from 'src/app/controller/model/ClassAverageBonus.model';
import {ClassAverageBonusCriteria} from 'src/app/controller/criteria/ClassAverageBonusCriteria.model';



@Component({
  selector: 'app-class-average-bonus-edit-admin',
  templateUrl: './class-average-bonus-edit-admin.component.html'
})
export class ClassAverageBonusEditAdminComponent extends AbstractEditController<ClassAverageBonusDto, ClassAverageBonusCriteria, ClassAverageBonusService>   implements OnInit {


    private _validClassAverageBonusCode = true;




    constructor(private datePipe: DatePipe, private classAverageBonusService: ClassAverageBonusService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, classAverageBonusService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}

    public setValidation(value : boolean){
        this.validClassAverageBonusCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateClassAverageBonusCode();
    }
    public validateClassAverageBonusCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validClassAverageBonusCode = false;
        } else {
            this.validClassAverageBonusCode = true;
        }
    }






    get validClassAverageBonusCode(): boolean {
        return this._validClassAverageBonusCode;
    }
    set validClassAverageBonusCode(value: boolean) {
        this._validClassAverageBonusCode = value;
    }

}
