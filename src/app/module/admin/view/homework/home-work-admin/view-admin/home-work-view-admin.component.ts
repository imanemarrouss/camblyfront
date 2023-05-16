import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {HomeWorkService} from 'src/app/controller/service/HomeWork.service';
import {HomeWorkDto} from 'src/app/controller/model/HomeWork.model';
import {HomeWorkCriteria} from 'src/app/controller/criteria/HomeWorkCriteria.model';

import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {HoweWorkQSTReponseDto} from 'src/app/controller/model/HoweWorkQSTReponse.model';
import {HoweWorkQSTReponseService} from 'src/app/controller/service/HoweWorkQSTReponse.service';
import {HomeWorkQuestionDto} from 'src/app/controller/model/HomeWorkQuestion.model';
import {HomeWorkQuestionService} from 'src/app/controller/service/HomeWorkQuestion.service';
import {HomeWorkEtudiantDto} from 'src/app/controller/model/HomeWorkEtudiant.model';
import {HomeWorkEtudiantService} from 'src/app/controller/service/HomeWorkEtudiant.service';
import {TypeHomeWorkDto} from 'src/app/controller/model/TypeHomeWork.model';
import {TypeHomeWorkService} from 'src/app/controller/service/TypeHomeWork.service';
import {ResultatHomeWorkDto} from 'src/app/controller/model/ResultatHomeWork.model';
import {ResultatHomeWorkService} from 'src/app/controller/service/ResultatHomeWork.service';
import {ReponseEtudiantHomeWorkDto} from 'src/app/controller/model/ReponseEtudiantHomeWork.model';
import {ReponseEtudiantHomeWorkService} from 'src/app/controller/service/ReponseEtudiantHomeWork.service';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import {CoursService} from 'src/app/controller/service/Cours.service';
import {TypeDeQuestionDto} from 'src/app/controller/model/TypeDeQuestion.model';
import {TypeDeQuestionService} from 'src/app/controller/service/TypeDeQuestion.service';
@Component({
  selector: 'app-home-work-view-admin',
  templateUrl: './home-work-view-admin.component.html'
})
export class HomeWorkViewAdminComponent extends AbstractViewController<HomeWorkDto, HomeWorkCriteria, HomeWorkService> implements OnInit {

    homeWorkQuestions = new HomeWorkQuestionDto();
    homeWorkQuestionss: Array<HomeWorkQuestionDto> = [];
    homeWorkEtudiants = new HomeWorkEtudiantDto();
    homeWorkEtudiantss: Array<HomeWorkEtudiantDto> = [];

    constructor(private datePipe: DatePipe, private homeWorkService: HomeWorkService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private etudiantService: EtudiantService, private homeWorkQuestionService: HomeWorkQuestionService, private homeWorkEtudiantService: HomeWorkEtudiantService, private typeHomeWorkService: TypeHomeWorkService, private resultatHomeWorkService: ResultatHomeWorkService, private coursService: CoursService, private typeDeQuestionService: TypeDeQuestionService
    ){
        super(datePipe, homeWorkService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.homeWorkQuestions.typeDeQuestion = new TypeDeQuestionDto();
        this.typeDeQuestionService.findAll().subscribe((data) => this.typeDeQuestions = data);
        this.homeWorkEtudiants.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
        this.homeWorkEtudiants.resultatHomeWork = new ResultatHomeWorkDto();
        this.resultatHomeWorkService.findAll().subscribe((data) => this.resultatHomeWorks = data);
        this.cours = new CoursDto();
        this.coursService.findAll().subscribe((data) => this.courss = data);
        this.typeHomeWork = new TypeHomeWorkDto();
        this.typeHomeWorkService.findAll().subscribe((data) => this.typeHomeWorks = data);
    }


    get typeHomeWork(): TypeHomeWorkDto {
       return this.typeHomeWorkService.item;
    }
    set typeHomeWork(value: TypeHomeWorkDto) {
        this.typeHomeWorkService.item = value;
    }
    get typeHomeWorks():Array<TypeHomeWorkDto> {
       return this.typeHomeWorkService.items;
    }
    set typeHomeWorks(value: Array<TypeHomeWorkDto>) {
        this.typeHomeWorkService.items = value;
    }
    get cours(): CoursDto {
       return this.coursService.item;
    }
    set cours(value: CoursDto) {
        this.coursService.item = value;
    }
    get courss():Array<CoursDto> {
       return this.coursService.items;
    }
    set courss(value: Array<CoursDto>) {
        this.coursService.items = value;
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


}
