import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {GroupeEtudiantDetailService} from 'src/app/controller/service/GroupeEtudiantDetail.service';
import {GroupeEtudiantDetailDto} from 'src/app/controller/model/GroupeEtudiantDetail.model';
import {GroupeEtudiantDetailCriteria} from 'src/app/controller/criteria/GroupeEtudiantDetailCriteria.model';

import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {GroupeEtudiantDto} from 'src/app/controller/model/GroupeEtudiant.model';
import {GroupeEtudiantService} from 'src/app/controller/service/GroupeEtudiant.service';
@Component({
  selector: 'app-groupe-etudiant-detail-view-admin',
  templateUrl: './groupe-etudiant-detail-view-admin.component.html'
})
export class GroupeEtudiantDetailViewAdminComponent extends AbstractViewController<GroupeEtudiantDetailDto, GroupeEtudiantDetailCriteria, GroupeEtudiantDetailService> implements OnInit {


    constructor(private datePipe: DatePipe, private groupeEtudiantDetailService: GroupeEtudiantDetailService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private etudiantService: EtudiantService, private groupeEtudiantService: GroupeEtudiantService
    ){
        super(datePipe, groupeEtudiantDetailService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.groupeEtudiant = new GroupeEtudiantDto();
        this.groupeEtudiantService.findAll().subscribe((data) => this.groupeEtudiants = data);
        this.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
    }


    get groupeEtudiant(): GroupeEtudiantDto {
       return this.groupeEtudiantService.item;
    }
    set groupeEtudiant(value: GroupeEtudiantDto) {
        this.groupeEtudiantService.item = value;
    }
    get groupeEtudiants():Array<GroupeEtudiantDto> {
       return this.groupeEtudiantService.items;
    }
    set groupeEtudiants(value: Array<GroupeEtudiantDto>) {
        this.groupeEtudiantService.items = value;
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
