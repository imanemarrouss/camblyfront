import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {VocabularyQuizService} from 'src/app/controller/service/VocabularyQuiz.service';
import {VocabularyQuizDto} from 'src/app/controller/model/VocabularyQuiz.model';
import {VocabularyQuizCriteria} from 'src/app/controller/criteria/VocabularyQuizCriteria.model';
import {VocabularyDto} from 'src/app/controller/model/Vocabulary.model';
import {VocabularyService} from 'src/app/controller/service/Vocabulary.service';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';
@Component({
  selector: 'app-vocabulary-quiz-create-admin',
  templateUrl: './vocabulary-quiz-create-admin.component.html'
})
export class VocabularyQuizCreateAdminComponent extends AbstractCreateController<VocabularyQuizDto, VocabularyQuizCriteria, VocabularyQuizService>  implements OnInit {

    private _vocabularysElement = new VocabularyDto();


   private _validVocabularyQuizLibelle = true;
    private _validSectionCode = true;

    constructor(private datePipe: DatePipe, private vocabularyQuizService: VocabularyQuizService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  
, private vocabularyService: VocabularyService, private sectionService: SectionService
    ) {
        super(datePipe, vocabularyQuizService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.vocabularysElement.section = new SectionDto();
        this.sectionService.findAll().subscribe((data) => this.sections = data);
    this.section = new SectionDto();
    this.sectionService.findAll().subscribe((data) => this.sections = data);
}



    validateVocabularys(){
        this.errorMessages = new Array();
    }


    public setValidation(value: boolean){
        this.validVocabularyQuizLibelle = value;
    }

    public addVocabularys() {
        if( this.item.vocabularys == null )
            this.item.vocabularys = new Array<VocabularyDto>();
       this.validateVocabularys();
       if (this.errorMessages.length === 0) {
              this.item.vocabularys.push({... this.vocabularysElement});
              this.vocabularysElement = new VocabularyDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deleteVocabulary(p: VocabularyDto) {
        this.item.vocabularys.forEach((element, index) => {
            if (element === p) { this.item.vocabularys.splice(index, 1); }
        });
    }

    public editVocabulary(p: VocabularyDto) {
        this.vocabularysElement = {... p};
        this.activeTab = 0;
    }


    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateVocabularyQuizLibelle();
    }

    public validateVocabularyQuizLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validVocabularyQuizLibelle = false;
        } else {
            this.validVocabularyQuizLibelle = true;
        }
    }


    public async openCreateSection(section: string) {
    const isPermistted = await this.roleService.isPermitted('Section', 'add');
    if(isPermistted) {
         this.section = new SectionDto();
         this.createSectionDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
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



    get validVocabularyQuizLibelle(): boolean {
        return this._validVocabularyQuizLibelle;
    }

    set validVocabularyQuizLibelle(value: boolean) {
         this._validVocabularyQuizLibelle = value;
    }

    get validSectionCode(): boolean {
        return this._validSectionCode;
    }
    set validSectionCode(value: boolean) {
        this._validSectionCode = value;
    }

    get vocabularysElement(): VocabularyDto {
        if( this._vocabularysElement == null )
            this._vocabularysElement = new VocabularyDto();
        return this._vocabularysElement;
    }

    set vocabularysElement(value: VocabularyDto) {
        this._vocabularysElement = value;
    }

}
