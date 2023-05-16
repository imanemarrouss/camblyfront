import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {TypeReclamationEtudiantDto} from '../model/TypeReclamationEtudiant.model';
import {TypeReclamationEtudiantCriteria} from '../criteria/TypeReclamationEtudiantCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class TypeReclamationEtudiantService extends AbstractService<TypeReclamationEtudiantDto, TypeReclamationEtudiantCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/typeReclamationEtudiant/');
    }

    public constrcutDto(): TypeReclamationEtudiantDto {
        return new TypeReclamationEtudiantDto();
    }

    public constrcutCriteria(): TypeReclamationEtudiantCriteria {
        return new TypeReclamationEtudiantCriteria();
    }
}
