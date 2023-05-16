import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {CentreDto} from '../model/Centre.model';
import {CentreCriteria} from '../criteria/CentreCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {ParcoursDto} from '../model/Parcours.model';

@Injectable({
  providedIn: 'root'
})
export class CentreService extends AbstractService<CentreDto, CentreCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/centre/');
    }

    public constrcutDto(): CentreDto {
        return new CentreDto();
    }

    public constrcutCriteria(): CentreCriteria {
        return new CentreCriteria();
    }
}
