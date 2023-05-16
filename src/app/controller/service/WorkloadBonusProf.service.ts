import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {WorkloadBonusProfDto} from '../model/WorkloadBonusProf.model';
import {WorkloadBonusProfCriteria} from '../criteria/WorkloadBonusProfCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {SalaryDto} from '../model/Salary.model';
import {WorkloadBonusDto} from '../model/WorkloadBonus.model';
import {ProfDto} from '../model/Prof.model';

@Injectable({
  providedIn: 'root'
})
export class WorkloadBonusProfService extends AbstractService<WorkloadBonusProfDto, WorkloadBonusProfCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/workloadBonusProf/');
    }

    public constrcutDto(): WorkloadBonusProfDto {
        return new WorkloadBonusProfDto();
    }

    public constrcutCriteria(): WorkloadBonusProfCriteria {
        return new WorkloadBonusProfCriteria();
    }
}
