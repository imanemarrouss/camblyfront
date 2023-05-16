import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {LangueService} from 'src/app/controller/service/Langue.service';
import {LangueDto} from 'src/app/controller/model/Langue.model';
import {LangueCriteria} from 'src/app/controller/criteria/LangueCriteria.model';
@Component({
  selector: 'app-langue-create-admin',
  templateUrl: './langue-create-admin.component.html'
})
export class LangueCreateAdminComponent extends AbstractCreateController<LangueDto, LangueCriteria, LangueService>  implements OnInit {



   private _validLangueRef = true;

    constructor(private datePipe: DatePipe, private langueService: LangueService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, langueService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validLangueRef = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateLangueRef();
    }

    public validateLangueRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validLangueRef = false;
        } else {
            this.validLangueRef = true;
        }
    }






    get validLangueRef(): boolean {
        return this._validLangueRef;
    }

    set validLangueRef(value: boolean) {
         this._validLangueRef = value;
    }



}
