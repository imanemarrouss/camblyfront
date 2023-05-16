import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ClassAverageBonusDto} from '../model/ClassAverageBonus.model';
import {ClassAverageBonusCriteria} from '../criteria/ClassAverageBonusCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ClassAverageBonusService extends AbstractService<ClassAverageBonusDto, ClassAverageBonusCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/classAverageBonus/');
    }

    public constrcutDto(): ClassAverageBonusDto {
        return new ClassAverageBonusDto();
    }

    public constrcutCriteria(): ClassAverageBonusCriteria {
        return new ClassAverageBonusCriteria();
    }
}
