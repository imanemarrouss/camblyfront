import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {InscriptionDto} from '../model/Inscription.model';
import {InscriptionCriteria} from '../criteria/InscriptionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {ParcoursDto} from '../model/Parcours.model';
import {QuizDto} from '../model/Quiz.model';
import {SkillDto} from '../model/Skill.model';
import {InteretEtudiantDto} from '../model/InteretEtudiant.model';
import {FonctionDto} from '../model/Fonction.model';
import {EtudiantDto} from '../model/Etudiant.model';
import {EtatInscriptionDto} from '../model/EtatInscription.model';
import {StatutSocialDto} from '../model/StatutSocial.model';
import {PackStudentDto} from '../model/PackStudent.model';
import {GroupeEtudeDto} from '../model/GroupeEtude.model';
import {NiveauEtudeDto} from '../model/NiveauEtude.model';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService extends AbstractService<InscriptionDto, InscriptionCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/inscription/');
    }

    public constrcutDto(): InscriptionDto {
        return new InscriptionDto();
    }

    public constrcutCriteria(): InscriptionCriteria {
        return new InscriptionCriteria();
    }
}
