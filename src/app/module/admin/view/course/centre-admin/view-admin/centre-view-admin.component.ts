import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {CentreService} from 'src/app/controller/service/Centre.service';
import {CentreDto} from 'src/app/controller/model/Centre.model';
import {CentreCriteria} from 'src/app/controller/criteria/CentreCriteria.model';

import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {ParcoursService} from 'src/app/controller/service/Parcours.service';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import {CoursService} from 'src/app/controller/service/Cours.service';
@Component({
  selector: 'app-centre-view-admin',
  templateUrl: './centre-view-admin.component.html'
})
export class CentreViewAdminComponent extends AbstractViewController<CentreDto, CentreCriteria, CentreService> implements OnInit {

    parcourss = new ParcoursDto();
    parcoursss: Array<ParcoursDto> = [];

    constructor(private datePipe: DatePipe, private centreService: CentreService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private parcoursService: ParcoursService
    ){
        super(datePipe, centreService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
