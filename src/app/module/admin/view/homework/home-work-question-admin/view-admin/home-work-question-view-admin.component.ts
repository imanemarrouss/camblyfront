import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
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
  selector: 'app-home-work-question-view-admin',
  templateUrl: './home-work-question-view-admin.component.html'
})
export class HomeWorkQuestionViewAdminComponent extends AbstractViewController<HomeWorkQuestionDto, HomeWorkQuestionCriteria, HomeWorkQuestionService> implements OnInit {

    howeWorkQSTReponses = new HoweWorkQSTReponseDto();
    howeWorkQSTReponsess: Array<HoweWorkQSTReponseDto> = [];

    constructor(private datePipe: DatePipe, private homeWorkQuestionService: HomeWorkQuestionService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private howeWorkQSTReponseService: HoweWorkQSTReponseService, private homeWorkService: HomeWorkService, private etatReponseService: EtatReponseService, private typeDeQuestionService: TypeDeQuestionService
    ){
        super(datePipe, homeWorkQuestionService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.howeWorkQSTReponses.etatReponse = new EtatReponseDto();
        this.etatReponseService.findAll().subscribe((data) => this.etatReponses = data);
        this.typeDeQuestion = new TypeDeQuestionDto();
        this.typeDeQuestionService.findAll().subscribe((data) => this.typeDeQuestions = data);
        this.homeWork = new HomeWorkDto();
        this.homeWorkService.findAll().subscribe((data) => this.homeWorks = data);
    }


    get etatReponse(): EtatReponseDto {
       return this.etatReponseService.item;
    }
    set etatReponse(value: EtatReponseDto) {
        this.etatReponseService.item = value;
    }
    get etatReponses():Array<EtatReponseDto> {
       return this.etatReponseService.items;
    }
    set etatReponses(value: Array<EtatReponseDto>) {
        this.etatReponseService.items = value;
    }
    get typeDeQuestion(): TypeDeQuestionDto {
       return this.typeDeQuestionService.item;
    }
    set typeDeQuestion(value: TypeDeQuestionDto) {
        this.typeDeQuestionService.item = value;
    }
    get typeDeQuestions():Array<TypeDeQuestionDto> {
       return this.typeDeQuestionService.items;
    }
    set typeDeQuestions(value: Array<TypeDeQuestionDto>) {
        this.typeDeQuestionService.items = value;
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
