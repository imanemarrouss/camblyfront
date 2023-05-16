import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {VocabularyDto} from '../model/Vocabulary.model';
import {VocabularyCriteria} from '../criteria/VocabularyCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {VocabularyQuizDto} from '../model/VocabularyQuiz.model';
import {SectionDto} from '../model/Section.model';

@Injectable({
  providedIn: 'root'
})
export class VocabularyService extends AbstractService<VocabularyDto, VocabularyCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/vocabulary/');
    }

    public constrcutDto(): VocabularyDto {
        return new VocabularyDto();
    }

    public constrcutCriteria(): VocabularyCriteria {
        return new VocabularyCriteria();
    }
}
