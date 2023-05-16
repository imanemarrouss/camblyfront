import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {FreeTrialConfigurationService} from 'src/app/controller/service/FreeTrialConfiguration.service';
import {FreeTrialConfigurationDto} from 'src/app/controller/model/FreeTrialConfiguration.model';
import {FreeTrialConfigurationCriteria} from 'src/app/controller/criteria/FreeTrialConfigurationCriteria.model';
@Component({
  selector: 'app-free-trial-configuration-create-admin',
  templateUrl: './free-trial-configuration-create-admin.component.html'
})
export class FreeTrialConfigurationCreateAdminComponent extends AbstractCreateController<FreeTrialConfigurationDto, FreeTrialConfigurationCriteria, FreeTrialConfigurationService>  implements OnInit {




    constructor(private datePipe: DatePipe, private freeTrialConfigurationService: FreeTrialConfigurationService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, freeTrialConfigurationService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }










}
