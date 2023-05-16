import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {CategorieProfService} from 'src/app/controller/service/CategorieProf.service';
import {CategorieProfDto} from 'src/app/controller/model/CategorieProf.model';
import {CategorieProfCriteria} from 'src/app/controller/criteria/CategorieProfCriteria.model';


import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
import {ClassRoomDto} from 'src/app/controller/model/ClassRoom.model';
import {ClassRoomService} from 'src/app/controller/service/ClassRoom.service';
import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {ParcoursService} from 'src/app/controller/service/Parcours.service';
import {TypeTeacherDto} from 'src/app/controller/model/TypeTeacher.model';
import {TypeTeacherService} from 'src/app/controller/service/TypeTeacher.service';
import {RecommendTeacherDto} from 'src/app/controller/model/RecommendTeacher.model';
import {RecommendTeacherService} from 'src/app/controller/service/RecommendTeacher.service';
import {TrancheHoraireProfDto} from 'src/app/controller/model/TrancheHoraireProf.model';
import {TrancheHoraireProfService} from 'src/app/controller/service/TrancheHoraireProf.service';

@Component({
  selector: 'app-categorie-prof-edit-admin',
  templateUrl: './categorie-prof-edit-admin.component.html'
})
export class CategorieProfEditAdminComponent extends AbstractEditController<CategorieProfDto, CategorieProfCriteria, CategorieProfService>   implements OnInit {

    private _profsElement = new ProfDto();

    private _validCategorieProfCode = true;

    private _validProfsRef = true;



    constructor(private datePipe: DatePipe, private categorieProfService: CategorieProfService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private profService: ProfService, private parcoursService: ParcoursService, private typeTeacherService: TypeTeacherService
    ) {
        super(datePipe, categorieProfService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.profsElement.parcours = new ParcoursDto();
        this.parcoursService.findAll().subscribe((data) => this.parcourss = data);
        this.profsElement.typeTeacher = new TypeTeacherDto();
        this.typeTeacherService.findAll().subscribe((data) => this.typeTeachers = data);

}

    public validateProfs(){
        this.errorMessages = new Array();
        this.validateProfsRef();
    }
    public setValidation(value : boolean){
        this.validCategorieProfCode = value;
        this.validProfsRef = value;
        }
   public addProfs() {
        if( this.item.profs == null )
            this.item.profs = new Array<ProfDto>();
       this.validateProfs();
       if (this.errorMessages.length === 0) {
            if(this.profsElement.id == null){
                this.item.profs.push(this.profsElement);
            }else{
                const index = this.item.profs.findIndex(e => e.id == this.profsElement.id);
                this.item.profs[index] = this.profsElement;
            }
          this.profsElement = new ProfDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteProf(p: ProfDto) {
        this.item.profs.forEach((element, index) => {
            if (element === p) { this.item.profs.splice(index, 1); }
        });
    }

    public editProf(p: ProfDto) {
        this.profsElement = {... p};
        this.activeTab = 0;
    }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCategorieProfCode();
    }
    public validateCategorieProfCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validCategorieProfCode = false;
        } else {
            this.validCategorieProfCode = true;
        }
    }


    private validateProfsRef(){
        if (this.profsElement.ref == null) {
        this.errorMessages.push('Ref de la prof est  invalide');
            this.validProfsRef = false;
        } else {
            this.validProfsRef = true;
        }
    }

   public async openCreateTypeTeacher(typeTeacher: string) {
        const isPermistted = await this.roleService.isPermitted('TypeTeacher', 'edit');
        if(isPermistted) {
             this.typeTeacher = new TypeTeacherDto();
             this.createTypeTeacherDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get parcours(): ParcoursDto {
       return this.parcoursService.item;
   }
  set parcours(value: ParcoursDto) {
        this.parcoursService.item = value;
   }
   get parcourss(): Array<ParcoursDto> {
        return this.parcoursService.items;
   }
   set parcourss(value: Array<ParcoursDto>) {
        this.parcoursService.items = value;
   }
   get createParcoursDialog(): boolean {
       return this.parcoursService.createDialog;
   }
  set createParcoursDialog(value: boolean) {
       this.parcoursService.createDialog= value;
   }
   get typeTeacher(): TypeTeacherDto {
       return this.typeTeacherService.item;
   }
  set typeTeacher(value: TypeTeacherDto) {
        this.typeTeacherService.item = value;
   }
   get typeTeachers(): Array<TypeTeacherDto> {
        return this.typeTeacherService.items;
   }
   set typeTeachers(value: Array<TypeTeacherDto>) {
        this.typeTeacherService.items = value;
   }
   get createTypeTeacherDialog(): boolean {
       return this.typeTeacherService.createDialog;
   }
  set createTypeTeacherDialog(value: boolean) {
       this.typeTeacherService.createDialog= value;
   }

    get profsElement(): ProfDto {
        if( this._profsElement == null )
            this._profsElement = new ProfDto();
         return this._profsElement;
    }

    set profsElement(value: ProfDto) {
        this._profsElement = value;
    }

    get validCategorieProfCode(): boolean {
        return this._validCategorieProfCode;
    }
    set validCategorieProfCode(value: boolean) {
        this._validCategorieProfCode = value;
    }

    get validProfsRef(): boolean {
        return this._validProfsRef;
    }
    set validProfsRef(value: boolean) {
        this._validProfsRef = value;
    }
}
