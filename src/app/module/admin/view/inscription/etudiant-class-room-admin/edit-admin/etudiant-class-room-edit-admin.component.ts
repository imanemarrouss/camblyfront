import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {EtudiantClassRoomService} from 'src/app/controller/service/EtudiantClassRoom.service';
import {EtudiantClassRoomDto} from 'src/app/controller/model/EtudiantClassRoom.model';
import {EtudiantClassRoomCriteria} from 'src/app/controller/criteria/EtudiantClassRoomCriteria.model';


import {ClassRoomDto} from 'src/app/controller/model/ClassRoom.model';
import {ClassRoomService} from 'src/app/controller/service/ClassRoom.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';

@Component({
  selector: 'app-etudiant-class-room-edit-admin',
  templateUrl: './etudiant-class-room-edit-admin.component.html'
})
export class EtudiantClassRoomEditAdminComponent extends AbstractEditController<EtudiantClassRoomDto, EtudiantClassRoomCriteria, EtudiantClassRoomService>   implements OnInit {



    private _validClassRoomLibelle = true;
    private _validEtudiantRef = true;



    constructor(private datePipe: DatePipe, private etudiantClassRoomService: EtudiantClassRoomService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private classRoomService: ClassRoomService, private etudiantService: EtudiantService
    ) {
        super(datePipe, etudiantClassRoomService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.classRoom = new ClassRoomDto();
    this.classRoomService.findAll().subscribe((data) => this.classRooms = data);
    this.etudiant = new EtudiantDto();
    this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
}

    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



   public async openCreateEtudiant(etudiant: string) {
        const isPermistted = await this.roleService.isPermitted('Etudiant', 'edit');
        if(isPermistted) {
             this.etudiant = new EtudiantDto();
             this.createEtudiantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get classRoom(): ClassRoomDto {
       return this.classRoomService.item;
   }
  set classRoom(value: ClassRoomDto) {
        this.classRoomService.item = value;
   }
   get classRooms(): Array<ClassRoomDto> {
        return this.classRoomService.items;
   }
   set classRooms(value: Array<ClassRoomDto>) {
        this.classRoomService.items = value;
   }
   get createClassRoomDialog(): boolean {
       return this.classRoomService.createDialog;
   }
  set createClassRoomDialog(value: boolean) {
       this.classRoomService.createDialog= value;
   }
   get etudiant(): EtudiantDto {
       return this.etudiantService.item;
   }
  set etudiant(value: EtudiantDto) {
        this.etudiantService.item = value;
   }
   get etudiants(): Array<EtudiantDto> {
        return this.etudiantService.items;
   }
   set etudiants(value: Array<EtudiantDto>) {
        this.etudiantService.items = value;
   }
   get createEtudiantDialog(): boolean {
       return this.etudiantService.createDialog;
   }
  set createEtudiantDialog(value: boolean) {
       this.etudiantService.createDialog= value;
   }



    get validClassRoomLibelle(): boolean {
        return this._validClassRoomLibelle;
    }
    set validClassRoomLibelle(value: boolean) {
        this._validClassRoomLibelle = value;
    }
    get validEtudiantRef(): boolean {
        return this._validEtudiantRef;
    }
    set validEtudiantRef(value: boolean) {
        this._validEtudiantRef = value;
    }
}
