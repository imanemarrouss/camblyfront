import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ConfirmationTokenDto} from '../model/ConfirmationToken.model';
import {ConfirmationTokenCriteria} from '../criteria/ConfirmationTokenCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {EtudiantDto} from '../model/Etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationTokenService extends AbstractService<ConfirmationTokenDto, ConfirmationTokenCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/confirmationToken/');
    }

    public constrcutDto(): ConfirmationTokenDto {
        return new ConfirmationTokenDto();
    }

    public constrcutCriteria(): ConfirmationTokenCriteria {
        return new ConfirmationTokenCriteria();
    }
}
