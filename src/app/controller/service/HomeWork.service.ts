import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {HomeWorkDto} from '../model/HomeWork.model';
import {HomeWorkCriteria} from '../criteria/HomeWorkCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {HomeWorkEtudiantDto} from '../model/HomeWorkEtudiant.model';
import {HomeWorkQuestionDto} from '../model/HomeWorkQuestion.model';
import {TypeHomeWorkDto} from '../model/TypeHomeWork.model';
import {CoursDto} from '../model/Cours.model';

@Injectable({
  providedIn: 'root'
})
export class HomeWorkService extends AbstractService<HomeWorkDto, HomeWorkCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/homeWork/');
    }

    public constrcutDto(): HomeWorkDto {
        return new HomeWorkDto();
    }

    public constrcutCriteria(): HomeWorkCriteria {
        return new HomeWorkCriteria();
    }
}
