import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ReponseEtudiantDto} from '../model/ReponseEtudiant.model';
import {ReponseEtudiantCriteria} from '../criteria/ReponseEtudiantCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {QuizEtudiantDto} from '../model/QuizEtudiant.model';
import {QuestionDto} from '../model/Question.model';
import {ReponseDto} from '../model/Reponse.model';

@Injectable({
  providedIn: 'root'
})
export class ReponseEtudiantService extends AbstractService<ReponseEtudiantDto, ReponseEtudiantCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/reponseEtudiant/');
    }

    public constrcutDto(): ReponseEtudiantDto {
        return new ReponseEtudiantDto();
    }

    public constrcutCriteria(): ReponseEtudiantCriteria {
        return new ReponseEtudiantCriteria();
    }
}
