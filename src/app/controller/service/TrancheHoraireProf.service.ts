import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {TrancheHoraireProfDto} from '../model/TrancheHoraireProf.model';
import {TrancheHoraireProfCriteria} from '../criteria/TrancheHoraireProfCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {ProfDto} from '../model/Prof.model';

@Injectable({
  providedIn: 'root'
})
export class TrancheHoraireProfService extends AbstractService<TrancheHoraireProfDto, TrancheHoraireProfCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/trancheHoraireProf/');
    }

    public constrcutDto(): TrancheHoraireProfDto {
        return new TrancheHoraireProfDto();
    }

    public constrcutCriteria(): TrancheHoraireProfCriteria {
        return new TrancheHoraireProfCriteria();
    }
}
