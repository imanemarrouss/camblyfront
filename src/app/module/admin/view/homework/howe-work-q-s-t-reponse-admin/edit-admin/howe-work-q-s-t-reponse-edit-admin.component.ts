import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {HoweWorkQSTReponseService} from 'src/app/controller/service/HoweWorkQSTReponse.service';
import {HoweWorkQSTReponseDto} from 'src/app/controller/model/HoweWorkQSTReponse.model';
import {HoweWorkQSTReponseCriteria} from 'src/app/controller/criteria/HoweWorkQSTReponseCriteria.model';


import {HomeWorkQuestionDto} from 'src/app/controller/model/HomeWorkQuestion.model';
import {HomeWorkQuestionService} from 'src/app/controller/service/HomeWorkQuestion.service';
import {EtatReponseDto} from 'src/app/controller/model/EtatReponse.model';
import {EtatReponseService} from 'src/app/controller/service/EtatReponse.service';

@Component({
  selector: 'app-howe-work-q-s-t-reponse-edit-admin',
  templateUrl: './howe-work-q-s-t-reponse-edit-admin.component.html'
})
export class HoweWorkQSTReponseEditAdminComponent extends AbstractEditController<HoweWorkQSTReponseDto, HoweWorkQSTReponseCriteria, HoweWorkQSTReponseService>   implements OnInit {


    private _validHoweWorkQSTReponseRef = true;
    private _validHoweWorkQSTReponseLib = true;

    private _validEtatReponseCode = true;
    private _validEtatReponseLibelle = true;
    private _validHomeWorkQuestionRef = true;
    private _validHomeWorkQuestionLibelle = true;



    constructor(private datePipe: DatePipe, private howeWorkQSTReponseService: HoweWorkQSTReponseService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private homeWorkQuestionService: HomeWorkQuestionService, private etatReponseService: EtatReponseService
    ) {
        super(datePipe, howeWorkQSTReponseService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.etatReponse = new EtatReponseDto();
    this.etatReponseService.findAll().subscribe((data) => this.etatReponses = data);
    this.homeWorkQuestion = new HomeWorkQuestionDto();
    this.homeWorkQuestionService.findAll().subscribe((data) => this.homeWorkQuestions = data);
}

    public setValidation(value : boolean){
        this.validHoweWorkQSTReponseRef = value;
        this.validHoweWorkQSTReponseLib = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateHoweWorkQSTReponseRef();
        this.validateHoweWorkQSTReponseLib();
    }
    public validateHoweWorkQSTReponseRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validHoweWorkQSTReponseRef = false;
        } else {
            this.validHoweWorkQSTReponseRef = true;
        }
    }
    public validateHoweWorkQSTReponseLib(){
        if (this.stringUtilService.isEmpty(this.item.lib)) {
            this.errorMessages.push('Lib non valide');
            this.validHoweWorkQSTReponseLib = false;
        } else {
            this.validHoweWorkQSTReponseLib = true;
        }
    }



   public async openCreateHomeWorkQuestion(homeWorkQuestion: string) {
        const isPermistted = await this.roleService.isPermitted('HomeWorkQuestion', 'edit');
        if(isPermistted) {
             this.homeWorkQuestion = new HomeWorkQuestionDto();
             this.createHomeWorkQuestionDialog = true;
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
   get homeWorkQuestion(): HomeWorkQuestionDto {
       return this.homeWorkQuestionService.item;
   }
  set homeWorkQuestion(value: HomeWorkQuestionDto) {
        this.homeWorkQuestionService.item = value;
   }
   get homeWorkQuestions(): Array<HomeWorkQuestionDto> {
        return this.homeWorkQuestionService.items;
   }
   set homeWorkQuestions(value: Array<HomeWorkQuestionDto>) {
        this.homeWorkQuestionService.items = value;
   }
   get createHomeWorkQuestionDialog(): boolean {
       return this.homeWorkQuestionService.createDialog;
   }
  set createHomeWorkQuestionDialog(value: boolean) {
       this.homeWorkQuestionService.createDialog= value;
   }


    get validHoweWorkQSTReponseRef(): boolean {
        return this._validHoweWorkQSTReponseRef;
    }
    set validHoweWorkQSTReponseRef(value: boolean) {
        this._validHoweWorkQSTReponseRef = value;
    }
    get validHoweWorkQSTReponseLib(): boolean {
        return this._validHoweWorkQSTReponseLib;
    }
    set validHoweWorkQSTReponseLib(value: boolean) {
        this._validHoweWorkQSTReponseLib = value;
    }

    get validEtatReponseCode(): boolean {
        return this._validEtatReponseCode;
    }
    set validEtatReponseCode(value: boolean) {
        this._validEtatReponseCode = value;
    }
    get validEtatReponseLibelle(): boolean {
        return this._validEtatReponseLibelle;
    }
    set validEtatReponseLibelle(value: boolean) {
        this._validEtatReponseLibelle = value;
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
}
