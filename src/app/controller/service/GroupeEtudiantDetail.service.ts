import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {GroupeEtudiantDetailDto} from '../model/GroupeEtudiantDetail.model';
import {GroupeEtudiantDetailCriteria} from '../criteria/GroupeEtudiantDetailCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {EtudiantDto} from '../model/Etudiant.model';
import {GroupeEtudiantDto} from '../model/GroupeEtudiant.model';

@Injectable({
  providedIn: 'root'
})
export class GroupeEtudiantDetailService extends AbstractService<GroupeEtudiantDetailDto, GroupeEtudiantDetailCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/groupeEtudiantDetail/');
    }

    public constrcutDto(): GroupeEtudiantDetailDto {
        return new GroupeEtudiantDetailDto();
    }

    public constrcutCriteria(): GroupeEtudiantDetailCriteria {
        return new GroupeEtudiantDetailCriteria();
    }
}
