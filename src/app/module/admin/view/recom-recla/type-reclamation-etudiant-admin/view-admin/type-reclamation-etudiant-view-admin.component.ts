import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {TypeReclamationEtudiantService} from 'src/app/controller/service/TypeReclamationEtudiant.service';
import {TypeReclamationEtudiantDto} from 'src/app/controller/model/TypeReclamationEtudiant.model';
import {TypeReclamationEtudiantCriteria} from 'src/app/controller/criteria/TypeReclamationEtudiantCriteria.model';

@Component({
  selector: 'app-type-reclamation-etudiant-view-admin',
  templateUrl: './type-reclamation-etudiant-view-admin.component.html'
})
export class TypeReclamationEtudiantViewAdminComponent extends AbstractViewController<TypeReclamationEtudiantDto, TypeReclamationEtudiantCriteria, TypeReclamationEtudiantService> implements OnInit {


    constructor(private datePipe: DatePipe, private typeReclamationEtudiantService: TypeReclamationEtudiantService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, typeReclamationEtudiantService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
