import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {EtudiantClassRoomService} from 'src/app/controller/service/EtudiantClassRoom.service';
import {EtudiantClassRoomDto} from 'src/app/controller/model/EtudiantClassRoom.model';
import {EtudiantClassRoomCriteria} from 'src/app/controller/criteria/EtudiantClassRoomCriteria.model';

import {ClassRoomDto} from 'src/app/controller/model/ClassRoom.model';
import {ClassRoomService} from 'src/app/controller/service/ClassRoom.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
@Component({
  selector: 'app-etudiant-class-room-view-admin',
  templateUrl: './etudiant-class-room-view-admin.component.html'
})
export class EtudiantClassRoomViewAdminComponent extends AbstractViewController<EtudiantClassRoomDto, EtudiantClassRoomCriteria, EtudiantClassRoomService> implements OnInit {


    constructor(private datePipe: DatePipe, private etudiantClassRoomService: EtudiantClassRoomService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private classRoomService: ClassRoomService, private etudiantService: EtudiantService
    ){
        super(datePipe, etudiantClassRoomService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.classRoom = new ClassRoomDto();
        this.classRoomService.findAll().subscribe((data) => this.classRooms = data);
        this.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
    }


    get classRoom(): ClassRoomDto {
       return this.classRoomService.item;
    }
    set classRoom(value: ClassRoomDto) {
        this.classRoomService.item = value;
    }
    get classRooms():Array<ClassRoomDto> {
       return this.classRoomService.items;
    }
    set classRooms(value: Array<ClassRoomDto>) {
        this.classRoomService.items = value;
    }
    get etudiant(): EtudiantDto {
       return this.etudiantService.item;
    }
    set etudiant(value: EtudiantDto) {
        this.etudiantService.item = value;
    }
    get etudiants():Array<EtudiantDto> {
       return this.etudiantService.items;
    }
    set etudiants(value: Array<EtudiantDto>) {
        this.etudiantService.items = value;
    }


}
