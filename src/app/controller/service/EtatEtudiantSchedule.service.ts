import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EtatEtudiantScheduleDto} from '../model/EtatEtudiantSchedule.model';
import {EtatEtudiantScheduleCriteria} from '../criteria/EtatEtudiantScheduleCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class EtatEtudiantScheduleService extends AbstractService<EtatEtudiantScheduleDto, EtatEtudiantScheduleCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/etatEtudiantSchedule/');
    }

    public constrcutDto(): EtatEtudiantScheduleDto {
        return new EtatEtudiantScheduleDto();
    }

    public constrcutCriteria(): EtatEtudiantScheduleCriteria {
        return new EtatEtudiantScheduleCriteria();
    }
}
