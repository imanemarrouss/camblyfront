import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {PackStudentDto} from '../model/PackStudent.model';
import {PackStudentCriteria} from '../criteria/PackStudentCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {ParcoursDto} from '../model/Parcours.model';
import {PriceDto} from '../model/Price.model';

@Injectable({
  providedIn: 'root'
})
export class PackStudentService extends AbstractService<PackStudentDto, PackStudentCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/packStudent/');
    }

    public constrcutDto(): PackStudentDto {
        return new PackStudentDto();
    }

    public constrcutCriteria(): PackStudentCriteria {
        return new PackStudentCriteria();
    }
}
