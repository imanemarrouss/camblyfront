import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {HomeWorkQuestionService} from 'src/app/controller/service/HomeWorkQuestion.service';
import {HomeWorkQuestionDto} from 'src/app/controller/model/HomeWorkQuestion.model';
import {HomeWorkQuestionCriteria} from 'src/app/controller/criteria/HomeWorkQuestionCriteria.model';


import {HoweWorkQSTReponseDto} from 'src/app/controller/model/HoweWorkQSTReponse.model';
import {HoweWorkQSTReponseService} from 'src/app/controller/service/HoweWorkQSTReponse.service';
import {HomeWorkDto} from 'src/app/controller/model/HomeWork.model';
import {HomeWorkService} from 'src/app/controller/service/HomeWork.service';
import {EtatReponseDto} from 'src/app/controller/model/EtatReponse.model';
import {EtatReponseService} from 'src/app/controller/service/EtatReponse.service';
import {TypeDeQuestionDto} from 'src/app/controller/model/TypeDeQuestion.model';
import {TypeDeQuestionService} from 'src/app/controller/service/TypeDeQuestion.service';

@Component({
  selector: 'app-home-work-question-edit-admin',
  templateUrl: './home-work-question-edit-admin.component.html'
})
export class HomeWorkQuestionEditAdminComponent extends AbstractEditController<HomeWorkQuestionDto, HomeWorkQuestionCriteria, HomeWorkQuestionService>   implements OnInit {

    private _howeWorkQSTReponsesElement = new HoweWorkQSTReponseDto();

    private _validHomeWorkQuestionRef = true;
    private _validHomeWorkQuestionLibelle = true;

    private _validTypeDeQuestionRef = true;
    private _validTypeDeQuestionLib = true;
    private _validHoweWorkQSTReponsesRef = true;
    private _validHoweWorkQSTReponsesLib = true;
    private _validHomeWorkLibelle = true;



    constructor(private datePipe: DatePipe, private homeWorkQuestionService: HomeWorkQuestionService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private howeWorkQSTReponseService: HoweWorkQSTReponseService, private homeWorkService: HomeWorkService, private etatReponseService: EtatReponseService, private typeDeQuestionService: TypeDeQuestionService
    ) {
        super(datePipe, homeWorkQuestionService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.howeWorkQSTReponsesElement.etatReponse = new EtatReponseDto();
        this.etatReponseService.findAll().subscribe((data) => this.etatReponses = data);

    this.typeDeQuestion = new TypeDeQuestionDto();
    this.typeDeQuestionService.findAll().subscribe((data) => this.typeDeQuestions = data);
    this.homeWork = new HomeWorkDto();
    this.homeWorkService.findAll().subscribe((data) => this.homeWorks = data);
}

    public validateHoweWorkQSTReponses(){
        this.errorMessages = new Array();
        this.validateHoweWorkQSTReponsesRef();
        this.validateHoweWorkQSTReponsesLib();
    }
    public setValidation(value : boolean){
        this.validHomeWorkQuestionRef = value;
        this.validHomeWorkQuestionLibelle = value;
        this.validHoweWorkQSTReponsesRef = value;
        this.validHoweWorkQSTReponsesLib = value;
        }
   public addHoweWorkQSTReponses() {
        if( this.item.howeWorkQSTReponses == null )
            this.item.howeWorkQSTReponses = new Array<HoweWorkQSTReponseDto>();
       this.validateHoweWorkQSTReponses();
       if (this.errorMessages.length === 0) {
            if(this.howeWorkQSTReponsesElement.id == null){
                this.item.howeWorkQSTReponses.push(this.howeWorkQSTReponsesElement);
            }else{
                const index = this.item.howeWorkQSTReponses.findIndex(e => e.id == this.howeWorkQSTReponsesElement.id);
                this.item.howeWorkQSTReponses[index] = this.howeWorkQSTReponsesElement;
            }
          this.howeWorkQSTReponsesElement = new HoweWorkQSTReponseDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteHoweWorkQSTReponse(p: HoweWorkQSTReponseDto) {
        this.item.howeWorkQSTReponses.forEach((element, index) => {
            if (element === p) { this.item.howeWorkQSTReponses.splice(index, 1); }
        });
    }

    public editHoweWorkQSTReponse(p: HoweWorkQSTReponseDto) {
        this.howeWorkQSTReponsesElement = {... p};
        this.activeTab = 0;
    }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateHomeWorkQuestionRef();
        this.validateHomeWorkQuestionLibelle();
    }
    public validateHomeWorkQuestionRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validHomeWorkQuestionRef = false;
        } else {
            this.validHomeWorkQuestionRef = true;
        }
    }
    public validateHomeWorkQuestionLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validHomeWorkQuestionLibelle = false;
        } else {
            this.validHomeWorkQuestionLibelle = true;
        }
    }


    private validateHoweWorkQSTReponsesRef(){
        if (this.howeWorkQSTReponsesElement.ref == null) {
        this.errorMessages.push('Ref de la howeWorkQSTReponse est  invalide');
            this.validHoweWorkQSTReponsesRef = false;
        } else {
            this.validHoweWorkQSTReponsesRef = true;
        }
    }
    private validateHoweWorkQSTReponsesLib(){
        if (this.howeWorkQSTReponsesElement.lib == null) {
        this.errorMessages.push('Lib de la howeWorkQSTReponse est  invalide');
            this.validHoweWorkQSTReponsesLib = false;
        } else {
            this.validHoweWorkQSTReponsesLib = true;
        }
    }

   public async openCreateHomeWork(homeWork: string) {
        const isPermistted = await this.roleService.isPermitted('HomeWork', 'edit');
        if(isPermistted) {
             this.homeWork = new HomeWorkDto();
             this.createHomeWorkDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get etatReponse(): EtatReponseDto {
       return this.etatReponseService.item;
   }
  set etatReponse(value: EtatReponseDto) {
        this.etatReponseService.item = value;
   }
   get etatReponses(): Array<EtatReponseDto> {
        return this.etatReponseService.items;
   }
   set etatReponses(value: Array<EtatReponseDto>) {
        this.etatReponseService.items = value;
   }
   get createEtatReponseDialog(): boolean {
       return this.etatReponseService.createDialog;
   }
  set createEtatReponseDialog(value: boolean) {
       this.etatReponseService.createDialog= value;
   }
   get typeDeQuestion(): TypeDeQuestionDto {
       return this.typeDeQuestionService.item;
   }
  set typeDeQuestion(value: TypeDeQuestionDto) {
        this.typeDeQuestionService.item = value;
   }
   get typeDeQuestions(): Array<TypeDeQuestionDto> {
        return this.typeDeQuestionService.items;
   }
   set typeDeQuestions(value: Array<TypeDeQuestionDto>) {
        this.typeDeQuestionService.items = value;
   }
   get createTypeDeQuestionDialog(): boolean {
       return this.typeDeQuestionService.createDialog;
   }
  set createTypeDeQuestionDialog(value: boolean) {
       this.typeDeQuestionService.createDialog= value;
   }
   get homeWork(): HomeWorkDto {
       return this.homeWorkService.item;
   }
  set homeWork(value: HomeWorkDto) {
        this.homeWorkService.item = value;
   }
   get homeWorks(): Array<HomeWorkDto> {
        return this.homeWorkService.items;
   }
   set homeWorks(value: Array<HomeWorkDto>) {
        this.homeWorkService.items = value;
   }
   get createHomeWorkDialog(): boolean {
       return this.homeWorkService.createDialog;
   }
  set createHomeWorkDialog(value: boolean) {
       this.homeWorkService.createDialog= value;
   }

    get howeWorkQSTReponsesElement(): HoweWorkQSTReponseDto {
        if( this._howeWorkQSTReponsesElement == null )
            this._howeWorkQSTReponsesElement = new HoweWorkQSTReponseDto();
         return this._howeWorkQSTReponsesElement;
    }

    set howeWorkQSTReponsesElement(value: HoweWorkQSTReponseDto) {
        this._howeWorkQSTReponsesElement = value;
    }

    get validHomeWorkQuestionRef(): boolean {
        return this._validHomeWorkQuestionRef;
    }
    set validHomeWorkQuestionRef(value: boolean) {
        this._validHomeWorkQuestionRef = value;
    }
    get validHomeWorkQuestionLibelle(): boolean {
        return this._validHomeWorkQuestionLibelle;
    }
    set validHomeWorkQuestionLibelle(value: boolean) {
        this._validHomeWorkQuestionLibelle = value;
    }

    get validTypeDeQuestionRef(): boolean {
        return this._validTypeDeQuestionRef;
    }
    set validTypeDeQuestionRef(value: boolean) {
        this._validTypeDeQuestionRef = value;
    }
    get validTypeDeQuestionLib(): boolean {
        return this._validTypeDeQuestionLib;
    }
    set validTypeDeQuestionLib(value: boolean) {
        this._validTypeDeQuestionLib = value;
    }
    get validHoweWorkQSTReponsesRef(): boolean {
        return this._validHoweWorkQSTReponsesRef;
    }
    set validHoweWorkQSTReponsesRef(value: boolean) {
        this._validHoweWorkQSTReponsesRef = value;
    }
    get validHoweWorkQSTReponsesLib(): boolean {
        return this._validHoweWorkQSTReponsesLib;
    }
    set validHoweWorkQSTReponsesLib(value: boolean) {
        this._validHoweWorkQSTReponsesLib = value;
    }
    get validHomeWorkLibelle(): boolean {
        return this._validHomeWorkLibelle;
    }
    set validHomeWorkLibelle(value: boolean) {
        this._validHomeWorkLibelle = value;
    }
}
