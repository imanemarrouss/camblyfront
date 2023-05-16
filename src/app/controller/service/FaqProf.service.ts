import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {FaqProfDto} from '../model/FaqProf.model';
import {FaqProfCriteria} from '../criteria/FaqProfCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {FaqTypeDto} from '../model/FaqType.model';
import {AdminDto} from '../model/Admin.model';
import {ProfDto} from '../model/Prof.model';

@Injectable({
  providedIn: 'root'
})
export class FaqProfService extends AbstractService<FaqProfDto, FaqProfCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/faqProf/');
    }

    public constrcutDto(): FaqProfDto {
        return new FaqProfDto();
    }

    public constrcutCriteria(): FaqProfCriteria {
        return new FaqProfCriteria();
    }
}
