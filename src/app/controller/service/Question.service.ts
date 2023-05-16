import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {QuestionDto} from '../model/Question.model';
import {QuestionCriteria} from '../criteria/QuestionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {QuizDto} from '../model/Quiz.model';
import {TypeDeQuestionDto} from '../model/TypeDeQuestion.model';
import {ReponseDto} from '../model/Reponse.model';
import {HomeWorkDto} from '../model/HomeWork.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends AbstractService<QuestionDto, QuestionCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/question/');
    }

    public constrcutDto(): QuestionDto {
        return new QuestionDto();
    }

    public constrcutCriteria(): QuestionCriteria {
        return new QuestionCriteria();
    }
}
