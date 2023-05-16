import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ReponseEtudiantHomeWorkDto} from '../model/ReponseEtudiantHomeWork.model';
import {ReponseEtudiantHomeWorkCriteria} from '../criteria/ReponseEtudiantHomeWorkCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {HoweWorkQSTReponseDto} from '../model/HoweWorkQSTReponse.model';
import {HomeWorkEtudiantDto} from '../model/HomeWorkEtudiant.model';
import {HomeWorkQuestionDto} from '../model/HomeWorkQuestion.model';

@Injectable({
  providedIn: 'root'
})
export class ReponseEtudiantHomeWorkService extends AbstractService<ReponseEtudiantHomeWorkDto, ReponseEtudiantHomeWorkCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/reponseEtudiantHomeWork/');
    }

    public constrcutDto(): ReponseEtudiantHomeWorkDto {
        return new ReponseEtudiantHomeWorkDto();
    }

    public constrcutCriteria(): ReponseEtudiantHomeWorkCriteria {
        return new ReponseEtudiantHomeWorkCriteria();
    }
}
