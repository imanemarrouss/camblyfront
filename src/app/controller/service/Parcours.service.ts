import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ParcoursDto} from '../model/Parcours.model';
import {ParcoursCriteria} from '../criteria/ParcoursCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {EtudiantDto} from '../model/Etudiant.model';
import {CentreDto} from '../model/Centre.model';
import {CoursDto} from '../model/Cours.model';

@Injectable({
  providedIn: 'root'
})
export class ParcoursService extends AbstractService<ParcoursDto, ParcoursCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/parcours/');
    }

    public constrcutDto(): ParcoursDto {
        return new ParcoursDto();
    }

    public constrcutCriteria(): ParcoursCriteria {
        return new ParcoursCriteria();
    }
}
