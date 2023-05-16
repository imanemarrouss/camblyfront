import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {HomeWorkEtudiantService} from 'src/app/controller/service/HomeWorkEtudiant.service';
import {HomeWorkEtudiantDto} from 'src/app/controller/model/HomeWorkEtudiant.model';
import {HomeWorkEtudiantCriteria} from 'src/app/controller/criteria/HomeWorkEtudiantCriteria.model';


import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {HoweWorkQSTReponseDto} from 'src/app/controller/model/HoweWorkQSTReponse.model';
import {HoweWorkQSTReponseService} from 'src/app/controller/service/HoweWorkQSTReponse.service';
import {HomeWorkQuestionDto} from 'src/app/controller/model/HomeWorkQuestion.model';
import {HomeWorkQuestionService} from 'src/app/controller/service/HomeWorkQuestion.service';
import {HomeWorkDto} from 'src/app/controller/model/HomeWork.model';
import {HomeWorkService} from 'src/app/controller/service/HomeWork.service';
import {ResultatHomeWorkDto} from 'src/app/controller/model/ResultatHomeWork.model';
import {ResultatHomeWorkService} from 'src/app/controller/service/ResultatHomeWork.service';
import {ReponseEtudiantHomeWorkDto} from 'src/app/controller/model/ReponseEtudiantHomeWork.model';
import {ReponseEtudiantHomeWorkService} from 'src/app/controller/service/ReponseEtudiantHomeWork.service';

@Component({
  selector: 'app-home-work-etudiant-edit-admin',
  templateUrl: './home-work-etudiant-edit-admin.component.html'
})
export class HomeWorkEtudiantEditAdminComponent extends AbstractEditController<HomeWorkEtudiantDto, HomeWorkEtudiantCriteria, HomeWorkEtudiantService>   implements OnInit {

    private _reponseEtudiantHomeWorksElement = new ReponseEtudiantHomeWorkDto();


    private _validEtudiantRef = true;
    private _validHomeWorkLibelle = true;
    private _validResultatHomeWorkLibelle = true;
    private _validResultatHomeWorkCode = true;



    constructor(private datePipe: DatePipe, private homeWorkEtudiantService: HomeWorkEtudiantService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private etudiantService: EtudiantService, private howeWorkQSTReponseService: HoweWorkQSTReponseService, private homeWorkQuestionService: HomeWorkQuestionService, private homeWorkService: HomeWorkService, private resultatHomeWorkService: ResultatHomeWorkService, private reponseEtudiantHomeWorkService: ReponseEtudiantHomeWorkService
    ) {
        super(datePipe, homeWorkEtudiantService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.reponseEtudiantHomeWorksElement.howeWorkQSTReponse = new HoweWorkQSTReponseDto();
        this.howeWorkQSTReponseService.findAll().subscribe((data) => this.howeWorkQSTReponses = data);
        this.reponseEtudiantHomeWorksElement.homeWorkQuestion = new HomeWorkQuestionDto();
        this.homeWorkQuestionService.findAll().subscribe((data) => this.homeWorkQuestions = data);

    this.etudiant = new EtudiantDto();
    this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
    this.homeWork = new HomeWorkDto();
    this.homeWorkService.findAll().subscribe((data) => this.homeWorks = data);
    this.resultatHomeWork = new ResultatHomeWorkDto();
    this.resultatHomeWorkService.findAll().subscribe((data) => this.resultatHomeWorks = data);
}

    public validateReponseEtudiantHomeWorks(){
        this.errorMessages = new Array();
    }
    public setValidation(value : boolean){
        }
   public addReponseEtudiantHomeWorks() {
        if( this.item.reponseEtudiantHomeWorks == null )
            this.item.reponseEtudiantHomeWorks = new Array<ReponseEtudiantHomeWorkDto>();
       this.validateReponseEtudiantHomeWorks();
       if (this.errorMessages.length === 0) {
            if(this.reponseEtudiantHomeWorksElement.id == null){
                this.item.reponseEtudiantHomeWorks.push(this.reponseEtudiantHomeWorksElement);
            }else{
                const index = this.item.reponseEtudiantHomeWorks.findIndex(e => e.id == this.reponseEtudiantHomeWorksElement.id);
                this.item.reponseEtudiantHomeWorks[index] = this.reponseEtudiantHomeWorksElement;
            }
          this.reponseEtudiantHomeWorksElement = new ReponseEtudiantHomeWorkDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteReponseEtudiantHomeWork(p: ReponseEtudiantHomeWorkDto) {
        this.item.reponseEtudiantHomeWorks.forEach((element, index) => {
            if (element === p) { this.item.reponseEtudiantHomeWorks.splice(index, 1); }
        });
    }

    public editReponseEtudiantHomeWork(p: ReponseEtudiantHomeWorkDto) {
        this.reponseEtudiantHomeWorksElement = {... p};
        this.activeTab = 0;
    }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



   public async openCreateHoweWorkQSTReponse(howeWorkQSTReponse: string) {
        const isPermistted = await this.roleService.isPermitted('HoweWorkQSTReponse', 'edit');
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
   public async openCreateResultatHomeWork(resultatHomeWork: string) {
        const isPermistted = await this.roleService.isPermitted('ResultatHomeWork', 'edit');
        if(isPermistted) {
             this.resultatHomeWork = new ResultatHomeWorkDto();
             this.createResultatHomeWorkDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
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
   get resultatHomeWork(): ResultatHomeWorkDto {
       return this.resultatHomeWorkService.item;
   }
  set resultatHomeWork(value: ResultatHomeWorkDto) {
        this.resultatHomeWorkService.item = value;
   }
   get resultatHomeWorks(): Array<ResultatHomeWorkDto> {
        return this.resultatHomeWorkService.items;
   }
   set resultatHomeWorks(value: Array<ResultatHomeWorkDto>) {
        this.resultatHomeWorkService.items = value;
   }
   get createResultatHomeWorkDialog(): boolean {
       return this.resultatHomeWorkService.createDialog;
   }
  set createResultatHomeWorkDialog(value: boolean) {
       this.resultatHomeWorkService.createDialog= value;
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

    get reponseEtudiantHomeWorksElement(): ReponseEtudiantHomeWorkDto {
        if( this._reponseEtudiantHomeWorksElement == null )
            this._reponseEtudiantHomeWorksElement = new ReponseEtudiantHomeWorkDto();
         return this._reponseEtudiantHomeWorksElement;
    }

    set reponseEtudiantHomeWorksElement(value: ReponseEtudiantHomeWorkDto) {
        this._reponseEtudiantHomeWorksElement = value;
    }


    get validEtudiantRef(): boolean {
        return this._validEtudiantRef;
    }
    set validEtudiantRef(value: boolean) {
        this._validEtudiantRef = value;
    }
    get validHomeWorkLibelle(): boolean {
        return this._validHomeWorkLibelle;
    }
    set validHomeWorkLibelle(value: boolean) {
        this._validHomeWorkLibelle = value;
    }
    get validResultatHomeWorkLibelle(): boolean {
        return this._validResultatHomeWorkLibelle;
    }
    set validResultatHomeWorkLibelle(value: boolean) {
        this._validResultatHomeWorkLibelle = value;
    }
    get validResultatHomeWorkCode(): boolean {
        return this._validResultatHomeWorkCode;
    }
    set validResultatHomeWorkCode(value: boolean) {
        this._validResultatHomeWorkCode = value;
    }
}
