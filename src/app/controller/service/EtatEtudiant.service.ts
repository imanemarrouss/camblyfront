import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EtatEtudiantDto} from '../model/EtatEtudiant.model';
import {EtatEtudiantCriteria} from '../criteria/EtatEtudiantCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class EtatEtudiantService extends AbstractService<EtatEtudiantDto, EtatEtudiantCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/etatEtudiant/');
    }

    public constrcutDto(): EtatEtudiantDto {
        return new EtatEtudiantDto();
    }

    public constrcutCriteria(): EtatEtudiantCriteria {
        return new EtatEtudiantCriteria();
    }
}
