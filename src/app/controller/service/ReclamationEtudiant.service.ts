import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ReclamationEtudiantDto} from '../model/ReclamationEtudiant.model';
import {ReclamationEtudiantCriteria} from '../criteria/ReclamationEtudiantCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {TypeReclamationEtudiantDto} from '../model/TypeReclamationEtudiant.model';

@Injectable({
  providedIn: 'root'
})
export class ReclamationEtudiantService extends AbstractService<ReclamationEtudiantDto, ReclamationEtudiantCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/reclamationEtudiant/');
    }

    public constrcutDto(): ReclamationEtudiantDto {
        return new ReclamationEtudiantDto();
    }

    public constrcutCriteria(): ReclamationEtudiantCriteria {
        return new ReclamationEtudiantCriteria();
    }
}
