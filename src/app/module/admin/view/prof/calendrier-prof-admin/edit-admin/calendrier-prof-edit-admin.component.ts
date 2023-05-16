import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {CalendrierProfService} from 'src/app/controller/service/CalendrierProf.service';
import {CalendrierProfDto} from 'src/app/controller/model/CalendrierProf.model';
import {CalendrierProfCriteria} from 'src/app/controller/criteria/CalendrierProfCriteria.model';


import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';

@Component({
  selector: 'app-calendrier-prof-edit-admin',
  templateUrl: './calendrier-prof-edit-admin.component.html'
})
export class CalendrierProfEditAdminComponent extends AbstractEditController<CalendrierProfDto, CalendrierProfCriteria, CalendrierProfService>   implements OnInit {


    private _validCalendrierProfRef = true;

    private _validProfRef = true;
    private _validEtudiantRef = true;



    constructor(private datePipe: DatePipe, private calendrierProfService: CalendrierProfService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private profService: ProfService, private etudiantService: EtudiantService
    ) {
        super(datePipe, calendrierProfService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.prof = new ProfDto();
    this.profService.findAll().subscribe((data) => this.profs = data);
    this.etudiant = new EtudiantDto();
    this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
}

    public setValidation(value : boolean){
        this.validCalendrierProfRef = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCalendrierProfRef();
    }
    public validateCalendrierProfRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validCalendrierProfRef = false;
        } else {
            this.validCalendrierProfRef = true;
        }
    }



   public async openCreateProf(prof: string) {
        const isPermistted = await this.roleService.isPermitted('Prof', 'edit');
        if(isPermistted) {
             this.prof = new ProfDto();
             this.createProfDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
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


    get validCalendrierProfRef(): boolean {
        return this._validCalendrierProfRef;
    }
    set validCalendrierProfRef(value: boolean) {
        this._validCalendrierProfRef = value;
    }

    get validProfRef(): boolean {
        return this._validProfRef;
    }
    set validProfRef(value: boolean) {
        this._validProfRef = value;
    }
    get validEtudiantRef(): boolean {
        return this._validEtudiantRef;
    }
    set validEtudiantRef(value: boolean) {
        this._validEtudiantRef = value;
    }
}
