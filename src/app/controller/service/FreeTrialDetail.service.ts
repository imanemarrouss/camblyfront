import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {FreeTrialDetailDto} from '../model/FreeTrialDetail.model';
import {FreeTrialDetailCriteria} from '../criteria/FreeTrialDetailCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {EtudiantDto} from '../model/Etudiant.model';
import {FreeTrialDto} from '../model/FreeTrial.model';

@Injectable({
  providedIn: 'root'
})
export class FreeTrialDetailService extends AbstractService<FreeTrialDetailDto, FreeTrialDetailCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/freeTrialDetail/');
    }

    public constrcutDto(): FreeTrialDetailDto {
        return new FreeTrialDetailDto();
    }

    public constrcutCriteria(): FreeTrialDetailCriteria {
        return new FreeTrialDetailCriteria();
    }
}
