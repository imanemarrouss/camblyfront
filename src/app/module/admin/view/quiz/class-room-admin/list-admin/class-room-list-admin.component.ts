import {Component, OnInit} from '@angular/core';
import {ClassRoomService} from 'src/app/controller/service/ClassRoom.service';
import {ClassRoomDto} from 'src/app/controller/model/ClassRoom.model';
import {ClassRoomCriteria} from 'src/app/controller/criteria/ClassRoomCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { ProfService } from 'src/app/controller/service/Prof.service';

import {EtudiantClassRoomDto} from 'src/app/controller/model/EtudiantClassRoom.model';
import {QuizClassRoomDto} from 'src/app/controller/model/QuizClassRoom.model';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-class-room-list-admin',
  templateUrl: './class-room-list-admin.component.html'
})
export class ClassRoomListAdminComponent extends AbstractListController<ClassRoomDto, ClassRoomCriteria, ClassRoomService>  implements OnInit {

    fileName = 'ClassRoom';

    profs :Array<ProfDto>;
  
    constructor(datePipe: DatePipe, classRoomService: ClassRoomService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private profService: ProfService) {
        super(datePipe, classRoomService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadProf();
    }

    public async loadClassRooms(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ClassRoom', 'list');
        isPermistted ? this.service.findAll().subscribe(classRooms => this.items = classRooms,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'prof?.ref', header: 'Prof'},
        ];
    }


    public async loadProf(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ClassRoom', 'list');
        isPermistted ? this.profService.findAllOptimized().subscribe(profs => this.profs = profs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: ClassRoomDto) {
        if (res.etudiantClassRooms != null) {
             res.etudiantClassRooms.forEach(d => { d.classRoom = null; d.id = null; });
        }
        if (res.quizClassRooms != null) {
             res.quizClassRooms.forEach(d => { d.classRoom = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Description': e.description ,
                'Prof': e.prof?.ref ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
        }];
      }
}
