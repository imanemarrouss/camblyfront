import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {FaqDto} from '../model/Faq.model';
import {FaqCriteria} from '../criteria/FaqCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {FaqTypeDto} from '../model/FaqType.model';

@Injectable({
  providedIn: 'root'
})
export class FaqService extends AbstractService<FaqDto, FaqCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/faq/');
    }

    public constrcutDto(): FaqDto {
        return new FaqDto();
    }

    public constrcutCriteria(): FaqCriteria {
        return new FaqCriteria();
    }
}
