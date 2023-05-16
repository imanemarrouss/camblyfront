import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
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
  selector: 'app-home-work-etudiant-view-admin',
  templateUrl: './home-work-etudiant-view-admin.component.html'
})
export class HomeWorkEtudiantViewAdminComponent extends AbstractViewController<HomeWorkEtudiantDto, HomeWorkEtudiantCriteria, HomeWorkEtudiantService> implements OnInit {

    reponseEtudiantHomeWorks = new ReponseEtudiantHomeWorkDto();
    reponseEtudiantHomeWorkss: Array<ReponseEtudiantHomeWorkDto> = [];

    constructor(private datePipe: DatePipe, private homeWorkEtudiantService: HomeWorkEtudiantService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private etudiantService: EtudiantService, private howeWorkQSTReponseService: HoweWorkQSTReponseService, private homeWorkQuestionService: HomeWorkQuestionService, private homeWorkService: HomeWorkService, private resultatHomeWorkService: ResultatHomeWorkService, private reponseEtudiantHomeWorkService: ReponseEtudiantHomeWorkService
    ){
        super(datePipe, homeWorkEtudiantService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.reponseEtudiantHomeWorks.howeWorkQSTReponse = new HoweWorkQSTReponseDto();
        this.howeWorkQSTReponseService.findAll().subscribe((data) => this.howeWorkQSTReponses = data);
        this.reponseEtudiantHomeWorks.homeWorkQuestion = new HomeWorkQuestionDto();
        this.homeWorkQuestionService.findAll().subscribe((data) => this.homeWorkQuestions = data);
        this.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
        this.homeWork = new HomeWorkDto();
        this.homeWorkService.findAll().subscribe((data) => this.homeWorks = data);
        this.resultatHomeWork = new ResultatHomeWorkDto();
        this.resultatHomeWorkService.findAll().subscribe((data) => this.resultatHomeWorks = data);
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
    get howeWorkQSTReponse(): HoweWorkQSTReponseDto {
       return this.howeWorkQSTReponseService.item;
    }
    set howeWorkQSTReponse(value: HoweWorkQSTReponseDto) {
        this.howeWorkQSTReponseService.item = value;
    }
    get howeWorkQSTReponses():Array<HoweWorkQSTReponseDto> {
       return this.howeWorkQSTReponseService.items;
    }
    set howeWorkQSTReponses(value: Array<HoweWorkQSTReponseDto>) {
        this.howeWorkQSTReponseService.items = value;
    }
    get homeWorkQuestion(): HomeWorkQuestionDto {
       return this.homeWorkQuestionService.item;
    }
    set homeWorkQuestion(value: HomeWorkQuestionDto) {
        this.homeWorkQuestionService.item = value;
    }
    get homeWorkQuestions():Array<HomeWorkQuestionDto> {
       return this.homeWorkQuestionService.items;
    }
    set homeWorkQuestions(value: Array<HomeWorkQuestionDto>) {
        this.homeWorkQuestionService.items = value;
    }
    get resultatHomeWork(): ResultatHomeWorkDto {
       return this.resultatHomeWorkService.item;
    }
    set resultatHomeWork(value: ResultatHomeWorkDto) {
        this.resultatHomeWorkService.item = value;
    }
    get resultatHomeWorks():Array<ResultatHomeWorkDto> {
       return this.resultatHomeWorkService.items;
    }
    set resultatHomeWorks(value: Array<ResultatHomeWorkDto>) {
        this.resultatHomeWorkService.items = value;
    }
    get homeWork(): HomeWorkDto {
       return this.homeWorkService.item;
    }
    set homeWork(value: HomeWorkDto) {
        this.homeWorkService.item = value;
    }
    get homeWorks():Array<HomeWorkDto> {
       return this.homeWorkService.items;
    }
    set homeWorks(value: Array<HomeWorkDto>) {
        this.homeWorkService.items = value;
    }


}
