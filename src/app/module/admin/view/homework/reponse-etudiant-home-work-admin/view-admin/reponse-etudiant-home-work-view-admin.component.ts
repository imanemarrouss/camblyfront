import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
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
  selector: 'app-reponse-etudiant-home-work-view-admin',
  templateUrl: './reponse-etudiant-home-work-view-admin.component.html'
})
export class ReponseEtudiantHomeWorkViewAdminComponent extends AbstractViewController<ReponseEtudiantHomeWorkDto, ReponseEtudiantHomeWorkCriteria, ReponseEtudiantHomeWorkService> implements OnInit {


    constructor(private datePipe: DatePipe, private reponseEtudiantHomeWorkService: ReponseEtudiantHomeWorkService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private howeWorkQSTReponseService: HoweWorkQSTReponseService, private homeWorkQuestionService: HomeWorkQuestionService, private homeWorkEtudiantService: HomeWorkEtudiantService
    ){
        super(datePipe, reponseEtudiantHomeWorkService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.howeWorkQSTReponse = new HoweWorkQSTReponseDto();
        this.howeWorkQSTReponseService.findAll().subscribe((data) => this.howeWorkQSTReponses = data);
        this.homeWorkEtudiant = new HomeWorkEtudiantDto();
        this.homeWorkEtudiantService.findAll().subscribe((data) => this.homeWorkEtudiants = data);
        this.homeWorkQuestion = new HomeWorkQuestionDto();
        this.homeWorkQuestionService.findAll().subscribe((data) => this.homeWorkQuestions = data);
    }


    get homeWorkEtudiant(): HomeWorkEtudiantDto {
       return this.homeWorkEtudiantService.item;
    }
    set homeWorkEtudiant(value: HomeWorkEtudiantDto) {
        this.homeWorkEtudiantService.item = value;
    }
    get homeWorkEtudiants():Array<HomeWorkEtudiantDto> {
       return this.homeWorkEtudiantService.items;
    }
    set homeWorkEtudiants(value: Array<HomeWorkEtudiantDto>) {
        this.homeWorkEtudiantService.items = value;
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


}
