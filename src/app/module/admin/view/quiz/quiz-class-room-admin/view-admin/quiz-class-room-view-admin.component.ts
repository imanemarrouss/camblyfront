import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {QuizClassRoomService} from 'src/app/controller/service/QuizClassRoom.service';
import {QuizClassRoomDto} from 'src/app/controller/model/QuizClassRoom.model';
import {QuizClassRoomCriteria} from 'src/app/controller/criteria/QuizClassRoomCriteria.model';

import {QuizDto} from 'src/app/controller/model/Quiz.model';
import {QuizService} from 'src/app/controller/service/Quiz.service';
import {ClassRoomDto} from 'src/app/controller/model/ClassRoom.model';
import {ClassRoomService} from 'src/app/controller/service/ClassRoom.service';
@Component({
  selector: 'app-quiz-class-room-view-admin',
  templateUrl: './quiz-class-room-view-admin.component.html'
})
export class QuizClassRoomViewAdminComponent extends AbstractViewController<QuizClassRoomDto, QuizClassRoomCriteria, QuizClassRoomService> implements OnInit {


    constructor(private datePipe: DatePipe, private quizClassRoomService: QuizClassRoomService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private quizService: QuizService, private classRoomService: ClassRoomService
    ){
        super(datePipe, quizClassRoomService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.classRoom = new ClassRoomDto();
        this.classRoomService.findAll().subscribe((data) => this.classRooms = data);
        this.quiz = new QuizDto();
        this.quizService.findAll().subscribe((data) => this.quizs = data);
    }


    get quiz(): QuizDto {
       return this.quizService.item;
    }
    set quiz(value: QuizDto) {
        this.quizService.item = value;
    }
    get quizs():Array<QuizDto> {
       return this.quizService.items;
    }
    set quizs(value: Array<QuizDto>) {
        this.quizService.items = value;
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


}
