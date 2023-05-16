import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {CoursDto} from '../model/Cours.model';
import {CoursCriteria} from '../criteria/CoursCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {ParcoursDto} from '../model/Parcours.model';
import {EtatCoursDto} from '../model/EtatCours.model';
import {SectionDto} from '../model/Section.model';
import {HomeWorkDto} from '../model/HomeWork.model';

@Injectable({
  providedIn: 'root'
})
export class CoursService extends AbstractService<CoursDto, CoursCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/cours/');
    }

    public constrcutDto(): CoursDto {
        return new CoursDto();
    }

    public constrcutCriteria(): CoursCriteria {
        return new CoursCriteria();
    }
}
