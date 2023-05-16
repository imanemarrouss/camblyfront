import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {SuperCategorieSectionService} from 'src/app/controller/service/SuperCategorieSection.service';
import {SuperCategorieSectionDto} from 'src/app/controller/model/SuperCategorieSection.model';
import {SuperCategorieSectionCriteria} from 'src/app/controller/criteria/SuperCategorieSectionCriteria.model';

import {CategorieSectionDto} from 'src/app/controller/model/CategorieSection.model';
import {CategorieSectionService} from 'src/app/controller/service/CategorieSection.service';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';
@Component({
  selector: 'app-super-categorie-section-view-admin',
  templateUrl: './super-categorie-section-view-admin.component.html'
})
export class SuperCategorieSectionViewAdminComponent extends AbstractViewController<SuperCategorieSectionDto, SuperCategorieSectionCriteria, SuperCategorieSectionService> implements OnInit {

    categorieSections = new CategorieSectionDto();
    categorieSectionss: Array<CategorieSectionDto> = [];

    constructor(private datePipe: DatePipe, private superCategorieSectionService: SuperCategorieSectionService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private categorieSectionService: CategorieSectionService
    ){
        super(datePipe, superCategorieSectionService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
