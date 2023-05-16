import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {HoweWorkQSTReponseService} from 'src/app/controller/service/HoweWorkQSTReponse.service';
import {HoweWorkQSTReponseDto} from 'src/app/controller/model/HoweWorkQSTReponse.model';
import {HoweWorkQSTReponseCriteria} from 'src/app/controller/criteria/HoweWorkQSTReponseCriteria.model';

import {HomeWorkQuestionDto} from 'src/app/controller/model/HomeWorkQuestion.model';
import {HomeWorkQuestionService} from 'src/app/controller/service/HomeWorkQuestion.service';
import {EtatReponseDto} from 'src/app/controller/model/EtatReponse.model';
import {EtatReponseService} from 'src/app/controller/service/EtatReponse.service';
@Component({
  selector: 'app-howe-work-q-s-t-reponse-view-admin',
  templateUrl: './howe-work-q-s-t-reponse-view-admin.component.html'
})
export class HoweWorkQSTReponseViewAdminComponent extends AbstractViewController<HoweWorkQSTReponseDto, HoweWorkQSTReponseCriteria, HoweWorkQSTReponseService> implements OnInit {


    constructor(private datePipe: DatePipe, private howeWorkQSTReponseService: HoweWorkQSTReponseService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private homeWorkQuestionService: HomeWorkQuestionService, private etatReponseService: EtatReponseService
    ){
        super(datePipe, howeWorkQSTReponseService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.etatReponse = new EtatReponseDto();
        this.etatReponseService.findAll().subscribe((data) => this.etatReponses = data);
        this.homeWorkQuestion = new HomeWorkQuestionDto();
        this.homeWorkQuestionService.findAll().subscribe((data) => this.homeWorkQuestions = data);
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
