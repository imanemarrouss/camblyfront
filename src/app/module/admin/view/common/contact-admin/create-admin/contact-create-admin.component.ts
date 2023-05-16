import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ContactService} from 'src/app/controller/service/Contact.service';
import {ContactDto} from 'src/app/controller/model/Contact.model';
import {ContactCriteria} from 'src/app/controller/criteria/ContactCriteria.model';
@Component({
  selector: 'app-contact-create-admin',
  templateUrl: './contact-create-admin.component.html'
})
export class ContactCreateAdminComponent extends AbstractCreateController<ContactDto, ContactCriteria, ContactService>  implements OnInit {




    constructor(private datePipe: DatePipe, private contactService: ContactService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, contactService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }










}
