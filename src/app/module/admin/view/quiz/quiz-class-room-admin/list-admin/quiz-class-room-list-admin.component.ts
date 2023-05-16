import {Component, OnInit} from '@angular/core';
import {QuizClassRoomService} from 'src/app/controller/service/QuizClassRoom.service';
import {QuizClassRoomDto} from 'src/app/controller/model/QuizClassRoom.model';
import {QuizClassRoomCriteria} from 'src/app/controller/criteria/QuizClassRoomCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { ClassRoomService } from 'src/app/controller/service/ClassRoom.service';
import { QuizService } from 'src/app/controller/service/Quiz.service';

import {QuizDto} from 'src/app/controller/model/Quiz.model';
import {ClassRoomDto} from 'src/app/controller/model/ClassRoom.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-quiz-class-room-list-admin',
  templateUrl: './quiz-class-room-list-admin.component.html'
})
export class QuizClassRoomListAdminComponent extends AbstractListController<QuizClassRoomDto, QuizClassRoomCriteria, QuizClassRoomService>  implements OnInit {

    fileName = 'QuizClassRoom';

    classRooms :Array<ClassRoomDto>;
    quizs :Array<QuizDto>;
  
    constructor(datePipe: DatePipe, quizClassRoomService: QuizClassRoomService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private classRoomService: ClassRoomService, private quizService: QuizService) {
        super(datePipe, quizClassRoomService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadClassRoom();
      this.loadQuiz();
    }

    public async loadQuizClassRooms(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('QuizClassRoom', 'list');
        isPermistted ? this.service.findAll().subscribe(quizClassRooms => this.items = quizClassRooms,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'classRoom?.libelle', header: 'Class room'},
            {field: 'quiz?.lib', header: 'Quiz'},
        ];
    }


    public async loadClassRoom(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('QuizClassRoom', 'list');
        isPermistted ? this.classRoomService.findAllOptimized().subscribe(classRooms => this.classRooms = classRooms,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadQuiz(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('QuizClassRoom', 'list');
        isPermistted ? this.quizService.findAllOptimized().subscribe(quizs => this.quizs = quizs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: QuizClassRoomDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Class room': e.classRoom?.libelle ,
                'Quiz': e.quiz?.lib ,
            }
        });

        this.criteriaData = [{
        //'Class room': this.criteria.classRoom?.libelle ? this.criteria.classRoom?.libelle : environment.emptyForExport ,
        //'Quiz': this.criteria.quiz?.lib ? this.criteria.quiz?.lib : environment.emptyForExport ,
        }];
      }
}
