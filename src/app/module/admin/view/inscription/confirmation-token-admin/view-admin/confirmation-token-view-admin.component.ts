import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {ConfirmationTokenService} from 'src/app/controller/service/ConfirmationToken.service';
import {ConfirmationTokenDto} from 'src/app/controller/model/ConfirmationToken.model';
import {ConfirmationTokenCriteria} from 'src/app/controller/criteria/ConfirmationTokenCriteria.model';

import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
@Component({
  selector: 'app-confirmation-token-view-admin',
  templateUrl: './confirmation-token-view-admin.component.html'
})
export class ConfirmationTokenViewAdminComponent extends AbstractViewController<ConfirmationTokenDto, ConfirmationTokenCriteria, ConfirmationTokenService> implements OnInit {


    constructor(private datePipe: DatePipe, private confirmationTokenService: ConfirmationTokenService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private etudiantService: EtudiantService
    ){
        super(datePipe, confirmationTokenService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
    }


    get etudiant(): EtudiantDto {
       return this.etudiantService.item;
    }
    set etudiant(value: EtudiantDto) {
        this.etudiantService.item = value;
    }
    get etudiants():Array<EtudiantDto> {
       return this.etudiantService.items;
    }
    set etudiants(value: Array<EtudiantDto>) {
        this.etudiantService.items = value;
    }


}
