import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {SessionCoursDto} from '../model/SessionCours.model';
import {SessionCoursCriteria} from '../criteria/SessionCoursCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {SalaryDto} from '../model/Salary.model';
import {GroupeEtudiantDto} from '../model/GroupeEtudiant.model';
import {SectionDto} from '../model/Section.model';
import {CoursDto} from '../model/Cours.model';
import {ProfDto} from '../model/Prof.model';

@Injectable({
  providedIn: 'root'
})
export class SessionCoursService extends AbstractService<SessionCoursDto, SessionCoursCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/sessionCours/');
    }

    public constrcutDto(): SessionCoursDto {
        return new SessionCoursDto();
    }

    public constrcutCriteria(): SessionCoursCriteria {
        return new SessionCoursCriteria();
    }
}
