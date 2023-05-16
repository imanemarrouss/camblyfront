import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {GroupeEtudiantDto} from '../model/GroupeEtudiant.model';
import {GroupeEtudiantCriteria} from '../criteria/GroupeEtudiantCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {ParcoursDto} from '../model/Parcours.model';
import {GroupeEtudiantDetailDto} from '../model/GroupeEtudiantDetail.model';
import {GroupeEtudeDto} from '../model/GroupeEtude.model';
import {ProfDto} from '../model/Prof.model';

@Injectable({
  providedIn: 'root'
})
export class GroupeEtudiantService extends AbstractService<GroupeEtudiantDto, GroupeEtudiantCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/groupeEtudiant/');
    }

    public constrcutDto(): GroupeEtudiantDto {
        return new GroupeEtudiantDto();
    }

    public constrcutCriteria(): GroupeEtudiantCriteria {
        return new GroupeEtudiantCriteria();
    }
}
