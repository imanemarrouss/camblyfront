import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {FreeTrialTeacherEmailTemplateDto} from '../model/FreeTrialTeacherEmailTemplate.model';
import {FreeTrialTeacherEmailTemplateCriteria} from '../criteria/FreeTrialTeacherEmailTemplateCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class FreeTrialTeacherEmailTemplateService extends AbstractService<FreeTrialTeacherEmailTemplateDto, FreeTrialTeacherEmailTemplateCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/freeTrialTeacherEmailTemplate/');
    }

    public constrcutDto(): FreeTrialTeacherEmailTemplateDto {
        return new FreeTrialTeacherEmailTemplateDto();
    }

    public constrcutCriteria(): FreeTrialTeacherEmailTemplateCriteria {
        return new FreeTrialTeacherEmailTemplateCriteria();
    }
}
