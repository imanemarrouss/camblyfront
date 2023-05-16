import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ProfDto} from '../model/Prof.model';
import {ProfCriteria} from '../criteria/ProfCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {ParcoursDto} from '../model/Parcours.model';
import {TypeTeacherDto} from '../model/TypeTeacher.model';
import {RecommendTeacherDto} from '../model/RecommendTeacher.model';
import {CategorieProfDto} from '../model/CategorieProf.model';
import {TrancheHoraireProfDto} from '../model/TrancheHoraireProf.model';
import {ClassRoomDto} from '../model/ClassRoom.model';

@Injectable({
  providedIn: 'root'
})
export class ProfService extends AbstractService<ProfDto, ProfCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/prof/');
    }

    public constrcutDto(): ProfDto {
        return new ProfDto();
    }

    public constrcutCriteria(): ProfCriteria {
        return new ProfCriteria();
    }
}
