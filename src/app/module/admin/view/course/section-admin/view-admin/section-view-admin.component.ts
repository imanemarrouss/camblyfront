import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {SectionService} from 'src/app/controller/service/Section.service';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionCriteria} from 'src/app/controller/criteria/SectionCriteria.model';

import {CategorieSectionDto} from 'src/app/controller/model/CategorieSection.model';
import {CategorieSectionService} from 'src/app/controller/service/CategorieSection.service';
import {SectionItemDto} from 'src/app/controller/model/SectionItem.model';
import {SectionItemService} from 'src/app/controller/service/SectionItem.service';
import {SessionCoursDto} from 'src/app/controller/model/SessionCours.model';
import {SessionCoursService} from 'src/app/controller/service/SessionCours.service';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import {CoursService} from 'src/app/controller/service/Cours.service';
@Component({
  selector: 'app-section-view-admin',
  templateUrl: './section-view-admin.component.html'
})
export class SectionViewAdminComponent extends AbstractViewController<SectionDto, SectionCriteria, SectionService> implements OnInit {

    sectionItems = new SectionItemDto();
    sectionItemss: Array<SectionItemDto> = [];

    constructor(private datePipe: DatePipe, private sectionService: SectionService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private categorieSectionService: CategorieSectionService, private sectionItemService: SectionItemService, private sessionCoursService: SessionCoursService, private coursService: CoursService
    ){
        super(datePipe, sectionService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.categorieSection = new CategorieSectionDto();
        this.categorieSectionService.findAll().subscribe((data) => this.categorieSections = data);
        this.cours = new CoursDto();
        this.coursService.findAll().subscribe((data) => this.courss = data);
        this.sessionCours = new SessionCoursDto();
        this.sessionCoursService.findAll().subscribe((data) => this.sessionCourss = data);
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
