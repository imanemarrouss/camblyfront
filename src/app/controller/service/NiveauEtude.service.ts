import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {NiveauEtudeDto} from '../model/NiveauEtude.model';
import {NiveauEtudeCriteria} from '../criteria/NiveauEtudeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class NiveauEtudeService extends AbstractService<NiveauEtudeDto, NiveauEtudeCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/niveauEtude/');
    }

    public constrcutDto(): NiveauEtudeDto {
        return new NiveauEtudeDto();
    }

    public constrcutCriteria(): NiveauEtudeCriteria {
        return new NiveauEtudeCriteria();
    }
}
