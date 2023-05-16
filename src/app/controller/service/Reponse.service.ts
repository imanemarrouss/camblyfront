import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ReponseDto} from '../model/Reponse.model';
import {ReponseCriteria} from '../criteria/ReponseCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {EtatReponseDto} from '../model/EtatReponse.model';
import {QuestionDto} from '../model/Question.model';

@Injectable({
  providedIn: 'root'
})
export class ReponseService extends AbstractService<ReponseDto, ReponseCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/reponse/');
    }

    public constrcutDto(): ReponseDto {
        return new ReponseDto();
    }

    public constrcutCriteria(): ReponseCriteria {
        return new ReponseCriteria();
    }
}
