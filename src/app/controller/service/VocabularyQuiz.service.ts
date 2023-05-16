import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {VocabularyQuizDto} from '../model/VocabularyQuiz.model';
import {VocabularyQuizCriteria} from '../criteria/VocabularyQuizCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {VocabularyDto} from '../model/Vocabulary.model';
import {SectionDto} from '../model/Section.model';

@Injectable({
  providedIn: 'root'
})
export class VocabularyQuizService extends AbstractService<VocabularyQuizDto, VocabularyQuizCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/vocabularyQuiz/');
    }

    public constrcutDto(): VocabularyQuizDto {
        return new VocabularyQuizDto();
    }

    public constrcutCriteria(): VocabularyQuizCriteria {
        return new VocabularyQuizCriteria();
    }
}
