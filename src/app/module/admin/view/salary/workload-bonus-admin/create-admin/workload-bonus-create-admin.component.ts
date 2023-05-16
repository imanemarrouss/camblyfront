import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {WorkloadBonusService} from 'src/app/controller/service/WorkloadBonus.service';
import {WorkloadBonusDto} from 'src/app/controller/model/WorkloadBonus.model';
import {WorkloadBonusCriteria} from 'src/app/controller/criteria/WorkloadBonusCriteria.model';
@Component({
  selector: 'app-workload-bonus-create-admin',
  templateUrl: './workload-bonus-create-admin.component.html'
})
export class WorkloadBonusCreateAdminComponent extends AbstractCreateController<WorkloadBonusDto, WorkloadBonusCriteria, WorkloadBonusService>  implements OnInit {



   private _validWorkloadBonusCode = true;

    constructor(private datePipe: DatePipe, private workloadBonusService: WorkloadBonusService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, workloadBonusService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validWorkloadBonusCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateWorkloadBonusCode();
    }

    public validateWorkloadBonusCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validWorkloadBonusCode = false;
        } else {
            this.validWorkloadBonusCode = true;
        }
    }






    get validWorkloadBonusCode(): boolean {
        return this._validWorkloadBonusCode;
    }

    set validWorkloadBonusCode(value: boolean) {
         this._validWorkloadBonusCode = value;
    }



}
