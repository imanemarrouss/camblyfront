import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {ReclamationEtudiantService} from 'src/app/controller/service/ReclamationEtudiant.service';
import {ReclamationEtudiantDto} from 'src/app/controller/model/ReclamationEtudiant.model';
import {ReclamationEtudiantCriteria} from 'src/app/controller/criteria/ReclamationEtudiantCriteria.model';

import {TypeReclamationEtudiantDto} from 'src/app/controller/model/TypeReclamationEtudiant.model';
import {TypeReclamationEtudiantService} from 'src/app/controller/service/TypeReclamationEtudiant.service';
@Component({
  selector: 'app-reclamation-etudiant-view-admin',
  templateUrl: './reclamation-etudiant-view-admin.component.html'
})
export class ReclamationEtudiantViewAdminComponent extends AbstractViewController<ReclamationEtudiantDto, ReclamationEtudiantCriteria, ReclamationEtudiantService> implements OnInit {


    constructor(private datePipe: DatePipe, private reclamationEtudiantService: ReclamationEtudiantService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private typeReclamationEtudiantService: TypeReclamationEtudiantService
    ){
        super(datePipe, reclamationEtudiantService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.typeReclamationEtudiant = new TypeReclamationEtudiantDto();
        this.typeReclamationEtudiantService.findAll().subscribe((data) => this.typeReclamationEtudiants = data);
    }


    get typeReclamationEtudiant(): TypeReclamationEtudiantDto {
       return this.typeReclamationEtudiantService.item;
    }
    set typeReclamationEtudiant(value: TypeReclamationEtudiantDto) {
        this.typeReclamationEtudiantService.item = value;
    }
    get typeReclamationEtudiants():Array<TypeReclamationEtudiantDto> {
       return this.typeReclamationEtudiantService.items;
    }
    set typeReclamationEtudiants(value: Array<TypeReclamationEtudiantDto>) {
        this.typeReclamationEtudiantService.items = value;
    }


}
