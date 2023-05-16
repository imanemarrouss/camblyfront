import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {CategorieSectionDto} from '../model/CategorieSection.model';
import {CategorieSectionCriteria} from '../criteria/CategorieSectionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {SectionDto} from '../model/Section.model';
import {SuperCategorieSectionDto} from '../model/SuperCategorieSection.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieSectionService extends AbstractService<CategorieSectionDto, CategorieSectionCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/categorieSection/');
    }

    public constrcutDto(): CategorieSectionDto {
        return new CategorieSectionDto();
    }

    public constrcutCriteria(): CategorieSectionCriteria {
        return new CategorieSectionCriteria();
    }
}
