import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {SectionItemDto} from '../model/SectionItem.model';
import {SectionItemCriteria} from '../criteria/SectionItemCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {SectionDto} from '../model/Section.model';

@Injectable({
  providedIn: 'root'
})
export class SectionItemService extends AbstractService<SectionItemDto, SectionItemCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/sectionItem/');
    }

    public constrcutDto(): SectionItemDto {
        return new SectionItemDto();
    }

    public constrcutCriteria(): SectionItemCriteria {
        return new SectionItemCriteria();
    }
}
