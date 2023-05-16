import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {WorkloadBonusDto} from '../model/WorkloadBonus.model';
import {WorkloadBonusCriteria} from '../criteria/WorkloadBonusCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class WorkloadBonusService extends AbstractService<WorkloadBonusDto, WorkloadBonusCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/workloadBonus/');
    }

    public constrcutDto(): WorkloadBonusDto {
        return new WorkloadBonusDto();
    }

    public constrcutCriteria(): WorkloadBonusCriteria {
        return new WorkloadBonusCriteria();
    }
}
