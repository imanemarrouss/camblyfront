import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {QuizClassRoomService} from 'src/app/controller/service/QuizClassRoom.service';
import {QuizClassRoomDto} from 'src/app/controller/model/QuizClassRoom.model';
import {QuizClassRoomCriteria} from 'src/app/controller/criteria/QuizClassRoomCriteria.model';
import {QuizDto} from 'src/app/controller/model/Quiz.model';
import {QuizService} from 'src/app/controller/service/Quiz.service';
import {ClassRoomDto} from 'src/app/controller/model/ClassRoom.model';
import {ClassRoomService} from 'src/app/controller/service/ClassRoom.service';
@Component({
  selector: 'app-quiz-class-room-create-admin',
  templateUrl: './quiz-class-room-create-admin.component.html'
})
export class QuizClassRoomCreateAdminComponent extends AbstractCreateController<QuizClassRoomDto, QuizClassRoomCriteria, QuizClassRoomService>  implements OnInit {



    private _validClassRoomLibelle = true;
    private _validQuizRef = true;
    private _validQuizLib = true;

    constructor(private datePipe: DatePipe, private quizClassRoomService: QuizClassRoomService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  
, private quizService: QuizService, private classRoomService: ClassRoomService
    ) {
        super(datePipe, quizClassRoomService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.classRoom = new ClassRoomDto();
    this.classRoomService.findAll().subscribe((data) => this.classRooms = data);
    this.quiz = new QuizDto();
    this.quizService.findAll().subscribe((data) => this.quizs = data);
}





    public setValidation(value: boolean){
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



    public async openCreateQuiz(quiz: string) {
    const isPermistted = await this.roleService.isPermitted('Quiz', 'add');
    if(isPermistted) {
         this.quiz = new QuizDto();
         this.createQuizDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateClassRoom(classRoom: string) {
    const isPermistted = await this.roleService.isPermitted('ClassRoom', 'add');
    if(isPermistted) {
         this.classRoom = new ClassRoomDto();
         this.createClassRoomDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get quiz(): QuizDto {
        return this.quizService.item;
    }
    set quiz(value: QuizDto) {
        this.quizService.item = value;
    }
    get quizs(): Array<QuizDto> {
        return this.quizService.items;
    }
    set quizs(value: Array<QuizDto>) {
        this.quizService.items = value;
    }
    get createQuizDialog(): boolean {
       return this.quizService.createDialog;
    }
    set createQuizDialog(value: boolean) {
        this.quizService.createDialog= value;
    }
    get classRoom(): ClassRoomDto {
        return this.classRoomService.item;
    }
    set classRoom(value: ClassRoomDto) {
        this.classRoomService.item = value;
    }
    get classRooms(): Array<ClassRoomDto> {
        return this.classRoomService.items;
    }
    set classRooms(value: Array<ClassRoomDto>) {
        this.classRoomService.items = value;
    }
    get createClassRoomDialog(): boolean {
       return this.classRoomService.createDialog;
    }
    set createClassRoomDialog(value: boolean) {
        this.classRoomService.createDialog= value;
    }




    get validClassRoomLibelle(): boolean {
        return this._validClassRoomLibelle;
    }
    set validClassRoomLibelle(value: boolean) {
        this._validClassRoomLibelle = value;
    }
    get validQuizRef(): boolean {
        return this._validQuizRef;
    }
    set validQuizRef(value: boolean) {
        this._validQuizRef = value;
    }
    get validQuizLib(): boolean {
        return this._validQuizLib;
    }
    set validQuizLib(value: boolean) {
        this._validQuizLib = value;
    }


}
