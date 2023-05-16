import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {QuizEtudiantDto} from '../model/QuizEtudiant.model';
import {QuizEtudiantCriteria} from '../criteria/QuizEtudiantCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {QuizDto} from '../model/Quiz.model';
import {EtudiantDto} from '../model/Etudiant.model';
import {ReponseEtudiantDto} from '../model/ReponseEtudiant.model';

@Injectable({
  providedIn: 'root'
})
export class QuizEtudiantService extends AbstractService<QuizEtudiantDto, QuizEtudiantCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/quizEtudiant/');
    }

    public constrcutDto(): QuizEtudiantDto {
        return new QuizEtudiantDto();
    }

    public constrcutCriteria(): QuizEtudiantCriteria {
        return new QuizEtudiantCriteria();
    }
}
