import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {SectionDto} from '../model/Section.model';
import {SectionCriteria} from '../criteria/SectionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {SessionCoursDto} from '../model/SessionCours.model';
import {CategorieSectionDto} from '../model/CategorieSection.model';
import {CoursDto} from '../model/Cours.model';
import {SectionItemDto} from '../model/SectionItem.model';

@Injectable({
  providedIn: 'root'
})
export class SectionService extends AbstractService<SectionDto, SectionCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/section/');
    }

    public constrcutDto(): SectionDto {
        return new SectionDto();
    }

    public constrcutCriteria(): SectionCriteria {
        return new SectionCriteria();
    }
}
