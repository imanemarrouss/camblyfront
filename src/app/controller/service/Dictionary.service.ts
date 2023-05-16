import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {DictionaryDto} from '../model/Dictionary.model';
import {DictionaryCriteria} from '../criteria/DictionaryCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {EtudiantDto} from '../model/Etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService extends AbstractService<DictionaryDto, DictionaryCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/dictionary/');
    }

    public constrcutDto(): DictionaryDto {
        return new DictionaryDto();
    }

    public constrcutCriteria(): DictionaryCriteria {
        return new DictionaryCriteria();
    }
}
