import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ReponseEtudiantHomeWorkService} from 'src/app/controller/service/ReponseEtudiantHomeWork.service';
import {ReponseEtudiantHomeWorkDto} from 'src/app/controller/model/ReponseEtudiantHomeWork.model';
import {ReponseEtudiantHomeWorkCriteria} from 'src/app/controller/criteria/ReponseEtudiantHomeWorkCriteria.model';
import {HoweWorkQSTReponseDto} from 'src/app/controller/model/HoweWorkQSTReponse.model';
import {HoweWorkQSTReponseService} from 'src/app/controller/service/HoweWorkQSTReponse.service';
import {HomeWorkQuestionDto} from 'src/app/controller/model/HomeWorkQuestion.model';
import {HomeWorkQuestionService} from 'src/app/controller/service/HomeWorkQuestion.service';
import {HomeWorkEtudiantDto} from 'src/app/controller/model/HomeWorkEtudiant.model';
import {HomeWorkEtudiantService} from 'src/app/controller/service/HomeWorkEtudiant.service';
@Component({
  selector: 'app-reponse-etudiant-home-work-create-admin',
  templateUrl: './reponse-etudiant-home-work-create-admin.component.html'
})
export class ReponseEtudiantHomeWorkCreateAdminComponent extends AbstractCreateController<ReponseEtudiantHomeWorkDto, ReponseEtudiantHomeWorkCriteria, ReponseEtudiantHomeWorkService>  implements OnInit {



    private _validHoweWorkQSTReponseRef = true;
    private _validHoweWorkQSTReponseLib = true;
    private _validHomeWorkQuestionRef = true;
    private _validHomeWorkQuestionLibelle = true;

    constructor(private datePipe: DatePipe, private reponseEtudiantHomeWorkService: ReponseEtudiantHomeWorkService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  
, private howeWorkQSTReponseService: HoweWorkQSTReponseService, private homeWorkQuestionService: HomeWorkQuestionService, private homeWorkEtudiantService: HomeWorkEtudiantService
    ) {
        super(datePipe, reponseEtudiantHomeWorkService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.howeWorkQSTReponse = new HoweWorkQSTReponseDto();
    this.howeWorkQSTReponseService.findAll().subscribe((data) => this.howeWorkQSTReponses = data);
    this.homeWorkEtudiant = new HomeWorkEtudiantDto();
    this.homeWorkEtudiantService.findAll().subscribe((data) => this.homeWorkEtudiants = data);
    this.homeWorkQuestion = new HomeWorkQuestionDto();
    this.homeWorkQuestionService.findAll().subscribe((data) => this.homeWorkQuestions = data);
}





    public setValidation(value: boolean){
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



    public async openCreateHomeWorkEtudiant(homeWorkEtudiant: string) {
    const isPermistted = await this.roleService.isPermitted('HomeWorkEtudiant', 'add');
    if(isPermistted) {
         this.homeWorkEtudiant = new HomeWorkEtudiantDto();
         this.createHomeWorkEtudiantDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateHoweWorkQSTReponse(howeWorkQSTReponse: string) {
    const isPermistted = await this.roleService.isPermitted('HoweWorkQSTReponse', 'add');
    if(isPermistted) {
         this.howeWorkQSTReponse = new HoweWorkQSTReponseDto();
         this.createHoweWorkQSTReponseDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateHomeWorkQuestion(homeWorkQuestion: string) {
    const isPermistted = await this.roleService.isPermitted('HomeWorkQuestion', 'add');
    if(isPermistted) {
         this.homeWorkQuestion = new HomeWorkQuestionDto();
         this.createHomeWorkQuestionDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get homeWorkEtudiant(): HomeWorkEtudiantDto {
        return this.homeWorkEtudiantService.item;
    }
    set homeWorkEtudiant(value: HomeWorkEtudiantDto) {
        this.homeWorkEtudiantService.item = value;
    }
    get homeWorkEtudiants(): Array<HomeWorkEtudiantDto> {
        return this.homeWorkEtudiantService.items;
    }
    set homeWorkEtudiants(value: Array<HomeWorkEtudiantDto>) {
        this.homeWorkEtudiantService.items = value;
    }
    get createHomeWorkEtudiantDialog(): boolean {
       return this.homeWorkEtudiantService.createDialog;
    }
    set createHomeWorkEtudiantDialog(value: boolean) {
        this.homeWorkEtudiantService.createDialog= value;
    }
    get howeWorkQSTReponse(): HoweWorkQSTReponseDto {
        return this.howeWorkQSTReponseService.item;
    }
    set howeWorkQSTReponse(value: HoweWorkQSTReponseDto) {
        this.howeWorkQSTReponseService.item = value;
    }
    get howeWorkQSTReponses(): Array<HoweWorkQSTReponseDto> {
        return this.howeWorkQSTReponseService.items;
    }
    set howeWorkQSTReponses(value: Array<HoweWorkQSTReponseDto>) {
        this.howeWorkQSTReponseService.items = value;
    }
    get createHoweWorkQSTReponseDialog(): boolean {
       return this.howeWorkQSTReponseService.createDialog;
    }
    set createHoweWorkQSTReponseDialog(value: boolean) {
        this.howeWorkQSTReponseService.createDialog= value;
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
