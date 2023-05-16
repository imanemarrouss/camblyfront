import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {ReclamationProfService} from 'src/app/controller/service/ReclamationProf.service';
import {ReclamationProfDto} from 'src/app/controller/model/ReclamationProf.model';
import {ReclamationProfCriteria} from 'src/app/controller/criteria/ReclamationProfCriteria.model';

import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
import {TypeReclamationProfDto} from 'src/app/controller/model/TypeReclamationProf.model';
import {TypeReclamationProfService} from 'src/app/controller/service/TypeReclamationProf.service';
import {AdminDto} from 'src/app/controller/model/Admin.model';
import {AdminService} from 'src/app/controller/service/Admin.service';
@Component({
  selector: 'app-reclamation-prof-view-admin',
  templateUrl: './reclamation-prof-view-admin.component.html'
})
export class ReclamationProfViewAdminComponent extends AbstractViewController<ReclamationProfDto, ReclamationProfCriteria, ReclamationProfService> implements OnInit {


    constructor(private datePipe: DatePipe, private reclamationProfService: ReclamationProfService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private profService: ProfService, private typeReclamationProfService: TypeReclamationProfService, private adminService: AdminService
    ){
        super(datePipe, reclamationProfService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.admin = new AdminDto();
        this.adminService.findAll().subscribe((data) => this.admins = data);
        this.prof = new ProfDto();
        this.profService.findAll().subscribe((data) => this.profs = data);
        this.typeReclamationProf = new TypeReclamationProfDto();
        this.typeReclamationProfService.findAll().subscribe((data) => this.typeReclamationProfs = data);
    }


    get typeReclamationProf(): TypeReclamationProfDto {
       return this.typeReclamationProfService.item;
    }
    set typeReclamationProf(value: TypeReclamationProfDto) {
        this.typeReclamationProfService.item = value;
    }
    get typeReclamationProfs():Array<TypeReclamationProfDto> {
       return this.typeReclamationProfService.items;
    }
    set typeReclamationProfs(value: Array<TypeReclamationProfDto>) {
        this.typeReclamationProfService.items = value;
    }
    get prof(): ProfDto {
       return this.profService.item;
    }
    set prof(value: ProfDto) {
        this.profService.item = value;
    }
    get profs():Array<ProfDto> {
       return this.profService.items;
    }
    set profs(value: Array<ProfDto>) {
        this.profService.items = value;
    }
    get admin(): AdminDto {
       return this.adminService.item;
    }
    set admin(value: AdminDto) {
        this.adminService.item = value;
    }
    get admins():Array<AdminDto> {
       return this.adminService.items;
    }
    set admins(value: Array<AdminDto>) {
        this.adminService.items = value;
    }


}
