import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EtudiantDto} from '../model/Etudiant.model';
import {EtudiantCriteria} from '../criteria/EtudiantCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {ParcoursDto} from '../model/Parcours.model';
import {QuizEtudiantDto} from '../model/QuizEtudiant.model';
import {EtatEtudiantScheduleDto} from '../model/EtatEtudiantSchedule.model';
import {InteretEtudiantDto} from '../model/InteretEtudiant.model';
import {StatutSocialDto} from '../model/StatutSocial.model';
import {LangueDto} from '../model/Langue.model';
import {GroupeEtudeDto} from '../model/GroupeEtude.model';
import {SkillDto} from '../model/Skill.model';
import {FonctionDto} from '../model/Fonction.model';
import {PackStudentDto} from '../model/PackStudent.model';
import {GroupeEtudiantDetailDto} from '../model/GroupeEtudiantDetail.model';
import {TeacherLocalityDto} from '../model/TeacherLocality.model';
import {NiveauEtudeDto} from '../model/NiveauEtude.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService extends AbstractService<EtudiantDto, EtudiantCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/etudiant/');
    }

    public constrcutDto(): EtudiantDto {
        return new EtudiantDto();
    }

    public constrcutCriteria(): EtudiantCriteria {
        return new EtudiantCriteria();
    }
}
