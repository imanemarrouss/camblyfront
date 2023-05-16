import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {VocabularyService} from 'src/app/controller/service/Vocabulary.service';
import {VocabularyDto} from 'src/app/controller/model/Vocabulary.model';
import {VocabularyCriteria} from 'src/app/controller/criteria/VocabularyCriteria.model';

import {VocabularyQuizDto} from 'src/app/controller/model/VocabularyQuiz.model';
import {VocabularyQuizService} from 'src/app/controller/service/VocabularyQuiz.service';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';
@Component({
  selector: 'app-vocabulary-view-admin',
  templateUrl: './vocabulary-view-admin.component.html'
})
export class VocabularyViewAdminComponent extends AbstractViewController<VocabularyDto, VocabularyCriteria, VocabularyService> implements OnInit {


    constructor(private datePipe: DatePipe, private vocabularyService: VocabularyService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private vocabularyQuizService: VocabularyQuizService, private sectionService: SectionService
    ){
        super(datePipe, vocabularyService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.section = new SectionDto();
        this.sectionService.findAll().subscribe((data) => this.sections = data);
        this.vocabularyQuiz = new VocabularyQuizDto();
        this.vocabularyQuizService.findAll().subscribe((data) => this.vocabularyQuizs = data);
    }


    get vocabularyQuiz(): VocabularyQuizDto {
       return this.vocabularyQuizService.item;
    }
    set vocabularyQuiz(value: VocabularyQuizDto) {
        this.vocabularyQuizService.item = value;
    }
    get vocabularyQuizs():Array<VocabularyQuizDto> {
       return this.vocabularyQuizService.items;
    }
    set vocabularyQuizs(value: Array<VocabularyQuizDto>) {
        this.vocabularyQuizService.items = value;
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
