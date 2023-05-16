import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ReclamationProfDto} from '../model/ReclamationProf.model';
import {ReclamationProfCriteria} from '../criteria/ReclamationProfCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {TypeReclamationProfDto} from '../model/TypeReclamationProf.model';
import {AdminDto} from '../model/Admin.model';
import {ProfDto} from '../model/Prof.model';

@Injectable({
  providedIn: 'root'
})
export class ReclamationProfService extends AbstractService<ReclamationProfDto, ReclamationProfCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/reclamationProf/');
    }

    public constrcutDto(): ReclamationProfDto {
        return new ReclamationProfDto();
    }

    public constrcutCriteria(): ReclamationProfCriteria {
        return new ReclamationProfCriteria();
    }
}
