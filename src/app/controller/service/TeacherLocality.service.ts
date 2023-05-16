import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {TeacherLocalityDto} from '../model/TeacherLocality.model';
import {TeacherLocalityCriteria} from '../criteria/TeacherLocalityCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class TeacherLocalityService extends AbstractService<TeacherLocalityDto, TeacherLocalityCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/teacherLocality/');
    }

    public constrcutDto(): TeacherLocalityDto {
        return new TeacherLocalityDto();
    }

    public constrcutCriteria(): TeacherLocalityCriteria {
        return new TeacherLocalityCriteria();
    }
}
