import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ClassAverageBonusProfDto} from '../model/ClassAverageBonusProf.model';
import {ClassAverageBonusProfCriteria} from '../criteria/ClassAverageBonusProfCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {SalaryDto} from '../model/Salary.model';
import {ProfDto} from '../model/Prof.model';

@Injectable({
  providedIn: 'root'
})
export class ClassAverageBonusProfService extends AbstractService<ClassAverageBonusProfDto, ClassAverageBonusProfCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/classAverageBonusProf/');
    }

    public constrcutDto(): ClassAverageBonusProfDto {
        return new ClassAverageBonusProfDto();
    }

    public constrcutCriteria(): ClassAverageBonusProfCriteria {
        return new ClassAverageBonusProfCriteria();
    }
}
