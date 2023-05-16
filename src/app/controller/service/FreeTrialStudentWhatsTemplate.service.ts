import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {FreeTrialStudentWhatsTemplateDto} from '../model/FreeTrialStudentWhatsTemplate.model';
import {FreeTrialStudentWhatsTemplateCriteria} from '../criteria/FreeTrialStudentWhatsTemplateCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class FreeTrialStudentWhatsTemplateService extends AbstractService<FreeTrialStudentWhatsTemplateDto, FreeTrialStudentWhatsTemplateCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/freeTrialStudentWhatsTemplate/');
    }

    public constrcutDto(): FreeTrialStudentWhatsTemplateDto {
        return new FreeTrialStudentWhatsTemplateDto();
    }

    public constrcutCriteria(): FreeTrialStudentWhatsTemplateCriteria {
        return new FreeTrialStudentWhatsTemplateCriteria();
    }
}
