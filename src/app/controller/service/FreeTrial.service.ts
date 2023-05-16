import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {FreeTrialDto} from '../model/FreeTrial.model';
import {FreeTrialCriteria} from '../criteria/FreeTrialCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {FreeTrialTeacherEmailTemplateDto} from '../model/FreeTrialTeacherEmailTemplate.model';
import {FreeTrialTeacherWhatsTemplateDto} from '../model/FreeTrialTeacherWhatsTemplate.model';
import {StatutFreeTrialDto} from '../model/StatutFreeTrial.model';
import {FreeTrialConfigurationDto} from '../model/FreeTrialConfiguration.model';
import {FreeTrialStudentEmailTemplateDto} from '../model/FreeTrialStudentEmailTemplate.model';
import {FreeTrialDetailDto} from '../model/FreeTrialDetail.model';
import {ProfDto} from '../model/Prof.model';
import {NiveauEtudeDto} from '../model/NiveauEtude.model';
import {FreeTrialStudentWhatsTemplateDto} from '../model/FreeTrialStudentWhatsTemplate.model';

@Injectable({
  providedIn: 'root'
})
export class FreeTrialService extends AbstractService<FreeTrialDto, FreeTrialCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/freeTrial/');
    }

    public constrcutDto(): FreeTrialDto {
        return new FreeTrialDto();
    }

    public constrcutCriteria(): FreeTrialCriteria {
        return new FreeTrialCriteria();
    }
}
