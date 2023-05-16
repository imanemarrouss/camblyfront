import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {ContactService} from 'src/app/controller/service/Contact.service';
import {ContactDto} from 'src/app/controller/model/Contact.model';
import {ContactCriteria} from 'src/app/controller/criteria/ContactCriteria.model';

@Component({
  selector: 'app-contact-view-admin',
  templateUrl: './contact-view-admin.component.html'
})
export class ContactViewAdminComponent extends AbstractViewController<ContactDto, ContactCriteria, ContactService> implements OnInit {


    constructor(private datePipe: DatePipe, private contactService: ContactService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, contactService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
