import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {HomeWorkQuestionDto} from '../model/HomeWorkQuestion.model';
import {HomeWorkQuestionCriteria} from '../criteria/HomeWorkQuestionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {HoweWorkQSTReponseDto} from '../model/HoweWorkQSTReponse.model';
import {TypeDeQuestionDto} from '../model/TypeDeQuestion.model';
import {HomeWorkDto} from '../model/HomeWork.model';

@Injectable({
  providedIn: 'root'
})
export class HomeWorkQuestionService extends AbstractService<HomeWorkQuestionDto, HomeWorkQuestionCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/homeWorkQuestion/');
    }

    public constrcutDto(): HomeWorkQuestionDto {
        return new HomeWorkQuestionDto();
    }

    public constrcutCriteria(): HomeWorkQuestionCriteria {
        return new HomeWorkQuestionCriteria();
    }
}
