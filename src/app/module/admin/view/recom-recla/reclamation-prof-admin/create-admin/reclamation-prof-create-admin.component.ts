import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

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
  selector: 'app-reclamation-prof-create-admin',
  templateUrl: './reclamation-prof-create-admin.component.html'
})
export class ReclamationProfCreateAdminComponent extends AbstractCreateController<ReclamationProfDto, ReclamationProfCriteria, ReclamationProfService>  implements OnInit {



   private _validReclamationProfReference = true;
    private _validProfRef = true;
    private _validTypeReclamationProfCode = true;
    private _validTypeReclamationProfLibelle = true;

    constructor(private datePipe: DatePipe, private reclamationProfService: ReclamationProfService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  
, private profService: ProfService, private typeReclamationProfService: TypeReclamationProfService, private adminService: AdminService
    ) {
        super(datePipe, reclamationProfService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.admin = new AdminDto();
    this.adminService.findAll().subscribe((data) => this.admins = data);
    this.prof = new ProfDto();
    this.profService.findAll().subscribe((data) => this.profs = data);
    this.typeReclamationProf = new TypeReclamationProfDto();
    this.typeReclamationProfService.findAll().subscribe((data) => this.typeReclamationProfs = data);
}





    public setValidation(value: boolean){
        this.validReclamationProfReference = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateReclamationProfReference();
    }

    public validateReclamationProfReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
        this.errorMessages.push('Reference non valide');
        this.validReclamationProfReference = false;
        } else {
            this.validReclamationProfReference = true;
        }
    }


    public async openCreateTypeReclamationProf(typeReclamationProf: string) {
    const isPermistted = await this.roleService.isPermitted('TypeReclamationProf', 'add');
    if(isPermistted) {
         this.typeReclamationProf = new TypeReclamationProfDto();
         this.createTypeReclamationProfDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get typeReclamationProf(): TypeReclamationProfDto {
        return this.typeReclamationProfService.item;
    }
    set typeReclamationProf(value: TypeReclamationProfDto) {
        this.typeReclamationProfService.item = value;
    }
    get typeReclamationProfs(): Array<TypeReclamationProfDto> {
        return this.typeReclamationProfService.items;
    }
    set typeReclamationProfs(value: Array<TypeReclamationProfDto>) {
        this.typeReclamationProfService.items = value;
    }
    get createTypeReclamationProfDialog(): boolean {
       return this.typeReclamationProfService.createDialog;
    }
    set createTypeReclamationProfDialog(value: boolean) {
        this.typeReclamationProfService.createDialog= value;
    }
    get prof(): ProfDto {
        return this.profService.item;
    }
    set prof(value: ProfDto) {
        this.profService.item = value;
    }
    get profs(): Array<ProfDto> {
        return this.profService.items;
    }
    set profs(value: Array<ProfDto>) {
        this.profService.items = value;
    }
    get createProfDialog(): boolean {
       return this.profService.createDialog;
    }
    set createProfDialog(value: boolean) {
        this.profService.createDialog= value;
    }
    get admin(): AdminDto {
        return this.adminService.item;
    }
    set admin(value: AdminDto) {
        this.adminService.item = value;
    }
    get admins(): Array<AdminDto> {
        return this.adminService.items;
    }
    set admins(value: Array<AdminDto>) {
        this.adminService.items = value;
    }
    get createAdminDialog(): boolean {
       return this.adminService.createDialog;
    }
    set createAdminDialog(value: boolean) {
        this.adminService.createDialog= value;
    }



    get validReclamationProfReference(): boolean {
        return this._validReclamationProfReference;
    }

    set validReclamationProfReference(value: boolean) {
         this._validReclamationProfReference = value;
    }

    get validProfRef(): boolean {
        return this._validProfRef;
    }
    set validProfRef(value: boolean) {
        this._validProfRef = value;
    }
    get validTypeReclamationProfCode(): boolean {
        return this._validTypeReclamationProfCode;
    }
    set validTypeReclamationProfCode(value: boolean) {
        this._validTypeReclamationProfCode = value;
    }
    get validTypeReclamationProfLibelle(): boolean {
        return this._validTypeReclamationProfLibelle;
    }
    set validTypeReclamationProfLibelle(value: boolean) {
        this._validTypeReclamationProfLibelle = value;
    }


}
