import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {CalendrierProfDto} from '../model/CalendrierProf.model';
import {CalendrierProfCriteria} from '../criteria/CalendrierProfCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {EtudiantDto} from '../model/Etudiant.model';
import {ProfDto} from '../model/Prof.model';

@Injectable({
  providedIn: 'root'
})
export class CalendrierProfService extends AbstractService<CalendrierProfDto, CalendrierProfCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/calendrierProf/');
    }

    public constrcutDto(): CalendrierProfDto {
        return new CalendrierProfDto();
    }

    public constrcutCriteria(): CalendrierProfCriteria {
        return new CalendrierProfCriteria();
    }
}
