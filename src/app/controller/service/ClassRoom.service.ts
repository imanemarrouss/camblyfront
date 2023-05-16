import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ClassRoomDto} from '../model/ClassRoom.model';
import {ClassRoomCriteria} from '../criteria/ClassRoomCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {EtudiantClassRoomDto} from '../model/EtudiantClassRoom.model';
import {QuizClassRoomDto} from '../model/QuizClassRoom.model';
import {ProfDto} from '../model/Prof.model';

@Injectable({
  providedIn: 'root'
})
export class ClassRoomService extends AbstractService<ClassRoomDto, ClassRoomCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/classRoom/');
    }

    public constrcutDto(): ClassRoomDto {
        return new ClassRoomDto();
    }

    public constrcutCriteria(): ClassRoomCriteria {
        return new ClassRoomCriteria();
    }
}
