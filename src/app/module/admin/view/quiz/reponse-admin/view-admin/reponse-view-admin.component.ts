import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {ReponseService} from 'src/app/controller/service/Reponse.service';
import {ReponseDto} from 'src/app/controller/model/Reponse.model';
import {ReponseCriteria} from 'src/app/controller/criteria/ReponseCriteria.model';

import {QuestionDto} from 'src/app/controller/model/Question.model';
import {QuestionService} from 'src/app/controller/service/Question.service';
import {EtatReponseDto} from 'src/app/controller/model/EtatReponse.model';
import {EtatReponseService} from 'src/app/controller/service/EtatReponse.service';
@Component({
  selector: 'app-reponse-view-admin',
  templateUrl: './reponse-view-admin.component.html'
})
export class ReponseViewAdminComponent extends AbstractViewController<ReponseDto, ReponseCriteria, ReponseService> implements OnInit {


    constructor(private datePipe: DatePipe, private reponseService: ReponseService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private questionService: QuestionService, private etatReponseService: EtatReponseService
    ){
        super(datePipe, reponseService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.etatReponse = new EtatReponseDto();
        this.etatReponseService.findAll().subscribe((data) => this.etatReponses = data);
        this.question = new QuestionDto();
        this.questionService.findAll().subscribe((data) => this.questions = data);
    }


    get question(): QuestionDto {
       return this.questionService.item;
    }
    set question(value: QuestionDto) {
        this.questionService.item = value;
    }
    get questions():Array<QuestionDto> {
       return this.questionService.items;
    }
    set questions(value: Array<QuestionDto>) {
        this.questionService.items = value;
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


}
