import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {VocabularyQuizService} from 'src/app/controller/service/VocabularyQuiz.service';
import {VocabularyQuizDto} from 'src/app/controller/model/VocabularyQuiz.model';
import {VocabularyQuizCriteria} from 'src/app/controller/criteria/VocabularyQuizCriteria.model';

import {VocabularyDto} from 'src/app/controller/model/Vocabulary.model';
import {VocabularyService} from 'src/app/controller/service/Vocabulary.service';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';
@Component({
  selector: 'app-vocabulary-quiz-view-admin',
  templateUrl: './vocabulary-quiz-view-admin.component.html'
})
export class VocabularyQuizViewAdminComponent extends AbstractViewController<VocabularyQuizDto, VocabularyQuizCriteria, VocabularyQuizService> implements OnInit {

    vocabularys = new VocabularyDto();
    vocabularyss: Array<VocabularyDto> = [];

    constructor(private datePipe: DatePipe, private vocabularyQuizService: VocabularyQuizService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private vocabularyService: VocabularyService, private sectionService: SectionService
    ){
        super(datePipe, vocabularyQuizService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.vocabularys.section = new SectionDto();
        this.sectionService.findAll().subscribe((data) => this.sections = data);
        this.section = new SectionDto();
        this.sectionService.findAll().subscribe((data) => this.sections = data);
    }


    get section(): SectionDto {
       return this.sectionService.item;
    }
    set section(value: SectionDto) {
        this.sectionService.item = value;
    }
    get sections():Array<SectionDto> {
       return this.sectionService.items;
    }
    set sections(value: Array<SectionDto>) {
        this.sectionService.items = value;
    }


}
