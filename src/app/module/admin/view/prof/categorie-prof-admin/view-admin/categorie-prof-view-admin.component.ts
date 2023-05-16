import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {CategorieProfService} from 'src/app/controller/service/CategorieProf.service';
import {CategorieProfDto} from 'src/app/controller/model/CategorieProf.model';
import {CategorieProfCriteria} from 'src/app/controller/criteria/CategorieProfCriteria.model';

import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
import {ClassRoomDto} from 'src/app/controller/model/ClassRoom.model';
import {ClassRoomService} from 'src/app/controller/service/ClassRoom.service';
import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {ParcoursService} from 'src/app/controller/service/Parcours.service';
import {TypeTeacherDto} from 'src/app/controller/model/TypeTeacher.model';
import {TypeTeacherService} from 'src/app/controller/service/TypeTeacher.service';
import {RecommendTeacherDto} from 'src/app/controller/model/RecommendTeacher.model';
import {RecommendTeacherService} from 'src/app/controller/service/RecommendTeacher.service';
import {TrancheHoraireProfDto} from 'src/app/controller/model/TrancheHoraireProf.model';
import {TrancheHoraireProfService} from 'src/app/controller/service/TrancheHoraireProf.service';
@Component({
  selector: 'app-categorie-prof-view-admin',
  templateUrl: './categorie-prof-view-admin.component.html'
})
export class CategorieProfViewAdminComponent extends AbstractViewController<CategorieProfDto, CategorieProfCriteria, CategorieProfService> implements OnInit {

    profs = new ProfDto();
    profss: Array<ProfDto> = [];

    constructor(private datePipe: DatePipe, private categorieProfService: CategorieProfService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private profService: ProfService, private parcoursService: ParcoursService, private typeTeacherService: TypeTeacherService
    ){
        super(datePipe, categorieProfService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.profs.parcours = new ParcoursDto();
        this.parcoursService.findAll().subscribe((data) => this.parcourss = data);
        this.profs.typeTeacher = new TypeTeacherDto();
        this.typeTeacherService.findAll().subscribe((data) => this.typeTeachers = data);
    }


    get parcours(): ParcoursDto {
       return this.parcoursService.item;
    }
    set parcours(value: ParcoursDto) {
        this.parcoursService.item = value;
    }
    get parcourss():Array<ParcoursDto> {
       return this.parcoursService.items;
    }
    set parcourss(value: Array<ParcoursDto>) {
        this.parcoursService.items = value;
    }
    get typeTeacher(): TypeTeacherDto {
       return this.typeTeacherService.item;
    }
    set typeTeacher(value: TypeTeacherDto) {
        this.typeTeacherService.item = value;
    }
    get typeTeachers():Array<TypeTeacherDto> {
       return this.typeTeacherService.items;
    }
    set typeTeachers(value: Array<TypeTeacherDto>) {
        this.typeTeacherService.items = value;
    }


}
