import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ScheduleProfDto} from '../model/ScheduleProf.model';
import {ScheduleProfCriteria} from '../criteria/ScheduleProfCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {GroupeEtudiantDto} from '../model/GroupeEtudiant.model';
import {CoursDto} from '../model/Cours.model';
import {ProfDto} from '../model/Prof.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleProfService extends AbstractService<ScheduleProfDto, ScheduleProfCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/scheduleProf/');
    }

    public constrcutDto(): ScheduleProfDto {
        return new ScheduleProfDto();
    }

    public constrcutCriteria(): ScheduleProfCriteria {
        return new ScheduleProfCriteria();
    }
}
