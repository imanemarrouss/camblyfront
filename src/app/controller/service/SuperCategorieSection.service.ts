import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {SuperCategorieSectionDto} from '../model/SuperCategorieSection.model';
import {SuperCategorieSectionCriteria} from '../criteria/SuperCategorieSectionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {CategorieSectionDto} from '../model/CategorieSection.model';

@Injectable({
  providedIn: 'root'
})
export class SuperCategorieSectionService extends AbstractService<SuperCategorieSectionDto, SuperCategorieSectionCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/superCategorieSection/');
    }

    public constrcutDto(): SuperCategorieSectionDto {
        return new SuperCategorieSectionDto();
    }

    public constrcutCriteria(): SuperCategorieSectionCriteria {
        return new SuperCategorieSectionCriteria();
    }
}
