import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {InteretEtudiantDto} from '../model/InteretEtudiant.model';
import {InteretEtudiantCriteria} from '../criteria/InteretEtudiantCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class InteretEtudiantService extends AbstractService<InteretEtudiantDto, InteretEtudiantCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/interetEtudiant/');
    }

    public constrcutDto(): InteretEtudiantDto {
        return new InteretEtudiantDto();
    }

    public constrcutCriteria(): InteretEtudiantCriteria {
        return new InteretEtudiantCriteria();
    }
}
