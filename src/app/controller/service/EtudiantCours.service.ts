import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EtudiantCoursDto} from '../model/EtudiantCours.model';
import {EtudiantCoursCriteria} from '../criteria/EtudiantCoursCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {EtudiantDto} from '../model/Etudiant.model';
import {CoursDto} from '../model/Cours.model';
import {ProfDto} from '../model/Prof.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantCoursService extends AbstractService<EtudiantCoursDto, EtudiantCoursCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/etudiantCours/');
    }

    public constrcutDto(): EtudiantCoursDto {
        return new EtudiantCoursDto();
    }

    public constrcutCriteria(): EtudiantCoursCriteria {
        return new EtudiantCoursCriteria();
    }
}
