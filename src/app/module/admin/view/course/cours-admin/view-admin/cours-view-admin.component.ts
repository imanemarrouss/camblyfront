import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {CoursService} from 'src/app/controller/service/Cours.service';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import {CoursCriteria} from 'src/app/controller/criteria/CoursCriteria.model';

import {SectionItemDto} from 'src/app/controller/model/SectionItem.model';
import {SectionItemService} from 'src/app/controller/service/SectionItem.service';
import {TypeHomeWorkDto} from 'src/app/controller/model/TypeHomeWork.model';
import {TypeHomeWorkService} from 'src/app/controller/service/TypeHomeWork.service';
import {SessionCoursDto} from 'src/app/controller/model/SessionCours.model';
import {SessionCoursService} from 'src/app/controller/service/SessionCours.service';
import {CategorieSectionDto} from 'src/app/controller/model/CategorieSection.model';
import {CategorieSectionService} from 'src/app/controller/service/CategorieSection.service';
import {EtatCoursDto} from 'src/app/controller/model/EtatCours.model';
import {EtatCoursService} from 'src/app/controller/service/EtatCours.service';
import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {ParcoursService} from 'src/app/controller/service/Parcours.service';
import {HomeWorkQuestionDto} from 'src/app/controller/model/HomeWorkQuestion.model';
import {HomeWorkQuestionService} from 'src/app/controller/service/HomeWorkQuestion.service';
import {HomeWorkEtudiantDto} from 'src/app/controller/model/HomeWorkEtudiant.model';
import {HomeWorkEtudiantService} from 'src/app/controller/service/HomeWorkEtudiant.service';
import {HomeWorkDto} from 'src/app/controller/model/HomeWork.model';
import {HomeWorkService} from 'src/app/controller/service/HomeWork.service';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';
@Component({
  selector: 'app-cours-view-admin',
  templateUrl: './cours-view-admin.component.html'
})
export class CoursViewAdminComponent extends AbstractViewController<CoursDto, CoursCriteria, CoursService> implements OnInit {

    sections = new SectionDto();
    sectionss: Array<SectionDto> = [];
    homeWorks = new HomeWorkDto();
    homeWorkss: Array<HomeWorkDto> = [];

    constructor(private datePipe: DatePipe, private coursService: CoursService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private categorieSectionService: CategorieSectionService, private etatCoursService: EtatCoursService, private parcoursService: ParcoursService, private homeWorkService: HomeWorkService, private typeHomeWorkService: TypeHomeWorkService, private sessionCoursService: SessionCoursService, private sectionService: SectionService
    ){
        super(datePipe, coursService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.sections.categorieSection = new CategorieSectionDto();
        this.categorieSectionService.findAll().subscribe((data) => this.categorieSections = data);
        this.sections.sessionCours = new SessionCoursDto();
        this.sessionCoursService.findAll().subscribe((data) => this.sessionCourss = data);
        this.homeWorks.typeHomeWork = new TypeHomeWorkDto();
        this.typeHomeWorkService.findAll().subscribe((data) => this.typeHomeWorks = data);
        this.etatCours = new EtatCoursDto();
        this.etatCoursService.findAll().subscribe((data) => this.etatCourss = data);
        this.parcours = new ParcoursDto();
        this.parcoursService.findAll().subscribe((data) => this.parcourss = data);
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
    get etatCours(): EtatCoursDto {
       return this.etatCoursService.item;
    }
    set etatCours(value: EtatCoursDto) {
        this.etatCoursService.item = value;
    }
    get etatCourss():Array<EtatCoursDto> {
       return this.etatCoursService.items;
    }
    set etatCourss(value: Array<EtatCoursDto>) {
        this.etatCoursService.items = value;
    }
    get parcours(): ParcoursDto {
       return this.parcoursService.item;
    }
    set parcours(value: ParcoursDto) {
        this.parcoursService.item = value;
    }
    get parcourss():Array<ParcoursDto> {
       return this.parcoursService.items;
    }
    set parcourss(value: Array<ParcoursDto>) {
        this.parcoursService.items = value;
    }
    get categorieSection(): CategorieSectionDto {
       return this.categorieSectionService.item;
    }
    set categorieSection(value: CategorieSectionDto) {
        this.categorieSectionService.item = value;
    }
    get categorieSections():Array<CategorieSectionDto> {
       return this.categorieSectionService.items;
    }
    set categorieSections(value: Array<CategorieSectionDto>) {
        this.categorieSectionService.items = value;
    }
    get sessionCours(): SessionCoursDto {
       return this.sessionCoursService.item;
    }
    set sessionCours(value: SessionCoursDto) {
        this.sessionCoursService.item = value;
    }
    get sessionCourss():Array<SessionCoursDto> {
       return this.sessionCoursService.items;
    }
    set sessionCourss(value: Array<SessionCoursDto>) {
        this.sessionCoursService.items = value;
    }


}
