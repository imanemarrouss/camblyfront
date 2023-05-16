import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {FreeTrialformuleDto} from '../model/FreeTrialformule.model';
import {FreeTrialformuleCriteria} from '../criteria/FreeTrialformuleCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {InscriptionDto} from '../model/Inscription.model';

@Injectable({
  providedIn: 'root'
})
export class FreeTrialformuleService extends AbstractService<FreeTrialformuleDto, FreeTrialformuleCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/freeTrialformule/');
    }

    public constrcutDto(): FreeTrialformuleDto {
        return new FreeTrialformuleDto();
    }

    public constrcutCriteria(): FreeTrialformuleCriteria {
        return new FreeTrialformuleCriteria();
    }
}
