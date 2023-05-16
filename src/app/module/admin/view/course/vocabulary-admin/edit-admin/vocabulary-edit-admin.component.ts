import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {VocabularyService} from 'src/app/controller/service/Vocabulary.service';
import {VocabularyDto} from 'src/app/controller/model/Vocabulary.model';
import {VocabularyCriteria} from 'src/app/controller/criteria/VocabularyCriteria.model';


import {VocabularyQuizDto} from 'src/app/controller/model/VocabularyQuiz.model';
import {VocabularyQuizService} from 'src/app/controller/service/VocabularyQuiz.service';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';

@Component({
  selector: 'app-vocabulary-edit-admin',
  templateUrl: './vocabulary-edit-admin.component.html'
})
export class VocabularyEditAdminComponent extends AbstractEditController<VocabularyDto, VocabularyCriteria, VocabularyService>   implements OnInit {



    private _validSectionCode = true;
    private _validVocabularyQuizLibelle = true;



    constructor(private datePipe: DatePipe, private vocabularyService: VocabularyService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private vocabularyQuizService: VocabularyQuizService, private sectionService: SectionService
    ) {
        super(datePipe, vocabularyService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.section = new SectionDto();
    this.sectionService.findAll().subscribe((data) => this.sections = data);
    this.vocabularyQuiz = new VocabularyQuizDto();
    this.vocabularyQuizService.findAll().subscribe((data) => this.vocabularyQuizs = data);
}

    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



   public async openCreateVocabularyQuiz(vocabularyQuiz: string) {
        const isPermistted = await this.roleService.isPermitted('VocabularyQuiz', 'edit');
        if(isPermistted) {
             this.vocabularyQuiz = new VocabularyQuizDto();
             this.createVocabularyQuizDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateSection(section: string) {
        const isPermistted = await this.roleService.isPermitted('Section', 'edit');
        if(isPermistted) {
             this.section = new SectionDto();
             this.createSectionDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get vocabularyQuiz(): VocabularyQuizDto {
       return this.vocabularyQuizService.item;
   }
  set vocabularyQuiz(value: VocabularyQuizDto) {
        this.vocabularyQuizService.item = value;
   }
   get vocabularyQuizs(): Array<VocabularyQuizDto> {
        return this.vocabularyQuizService.items;
   }
   set vocabularyQuizs(value: Array<VocabularyQuizDto>) {
        this.vocabularyQuizService.items = value;
   }
   get createVocabularyQuizDialog(): boolean {
       return this.vocabularyQuizService.createDialog;
   }
  set createVocabularyQuizDialog(value: boolean) {
       this.vocabularyQuizService.createDialog= value;
   }
   get section(): SectionDto {
       return this.sectionService.item;
   }
  set section(value: SectionDto) {
        this.sectionService.item = value;
   }
   get sections(): Array<SectionDto> {
        return this.sectionService.items;
   }
   set sections(value: Array<SectionDto>) {
        this.sectionService.items = value;
   }
   get createSectionDialog(): boolean {
       return this.sectionService.createDialog;
   }
  set createSectionDialog(value: boolean) {
       this.sectionService.createDialog= value;
   }



    get validSectionCode(): boolean {
        return this._validSectionCode;
    }
    set validSectionCode(value: boolean) {
        this._validSectionCode = value;
    }
    get validVocabularyQuizLibelle(): boolean {
        return this._validVocabularyQuizLibelle;
    }
    set validVocabularyQuizLibelle(value: boolean) {
        this._validVocabularyQuizLibelle = value;
    }
}
