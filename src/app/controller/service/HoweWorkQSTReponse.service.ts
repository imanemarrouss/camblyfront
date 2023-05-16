import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {HoweWorkQSTReponseDto} from '../model/HoweWorkQSTReponse.model';
import {HoweWorkQSTReponseCriteria} from '../criteria/HoweWorkQSTReponseCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {EtatReponseDto} from '../model/EtatReponse.model';
import {HomeWorkQuestionDto} from '../model/HomeWorkQuestion.model';

@Injectable({
  providedIn: 'root'
})
export class HoweWorkQSTReponseService extends AbstractService<HoweWorkQSTReponseDto, HoweWorkQSTReponseCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/howeWorkQSTReponse/');
    }

    public constrcutDto(): HoweWorkQSTReponseDto {
        return new HoweWorkQSTReponseDto();
    }

    public constrcutCriteria(): HoweWorkQSTReponseCriteria {
        return new HoweWorkQSTReponseCriteria();
    }
}
