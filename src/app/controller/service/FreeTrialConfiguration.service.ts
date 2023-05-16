import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {FreeTrialConfigurationDto} from '../model/FreeTrialConfiguration.model';
import {FreeTrialConfigurationCriteria} from '../criteria/FreeTrialConfigurationCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class FreeTrialConfigurationService extends AbstractService<FreeTrialConfigurationDto, FreeTrialConfigurationCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/freeTrialConfiguration/');
    }

    public constrcutDto(): FreeTrialConfigurationDto {
        return new FreeTrialConfigurationDto();
    }

    public constrcutCriteria(): FreeTrialConfigurationCriteria {
        return new FreeTrialConfigurationCriteria();
    }
}
