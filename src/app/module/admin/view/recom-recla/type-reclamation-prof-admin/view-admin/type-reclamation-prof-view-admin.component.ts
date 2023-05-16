import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {TypeReclamationProfService} from 'src/app/controller/service/TypeReclamationProf.service';
import {TypeReclamationProfDto} from 'src/app/controller/model/TypeReclamationProf.model';
import {TypeReclamationProfCriteria} from 'src/app/controller/criteria/TypeReclamationProfCriteria.model';

@Component({
  selector: 'app-type-reclamation-prof-view-admin',
  templateUrl: './type-reclamation-prof-view-admin.component.html'
})
export class TypeReclamationProfViewAdminComponent extends AbstractViewController<TypeReclamationProfDto, TypeReclamationProfCriteria, TypeReclamationProfService> implements OnInit {


    constructor(private datePipe: DatePipe, private typeReclamationProfService: TypeReclamationProfService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, typeReclamationProfService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
