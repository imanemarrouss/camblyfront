import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {QuizClassRoomDto} from '../model/QuizClassRoom.model';
import {QuizClassRoomCriteria} from '../criteria/QuizClassRoomCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {QuizDto} from '../model/Quiz.model';
import {ClassRoomDto} from '../model/ClassRoom.model';

@Injectable({
  providedIn: 'root'
})
export class QuizClassRoomService extends AbstractService<QuizClassRoomDto, QuizClassRoomCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/quizClassRoom/');
    }

    public constrcutDto(): QuizClassRoomDto {
        return new QuizClassRoomDto();
    }

    public constrcutCriteria(): QuizClassRoomCriteria {
        return new QuizClassRoomCriteria();
    }
}
