import {Component, OnInit} from '@angular/core';
import {EtudiantClassRoomService} from 'src/app/controller/service/EtudiantClassRoom.service';
import {EtudiantClassRoomDto} from 'src/app/controller/model/EtudiantClassRoom.model';
import {EtudiantClassRoomCriteria} from 'src/app/controller/criteria/EtudiantClassRoomCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { ClassRoomService } from 'src/app/controller/service/ClassRoom.service';
import { EtudiantService } from 'src/app/controller/service/Etudiant.service';

import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {ClassRoomDto} from 'src/app/controller/model/ClassRoom.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-etudiant-class-room-list-admin',
  templateUrl: './etudiant-class-room-list-admin.component.html'
})
export class EtudiantClassRoomListAdminComponent extends AbstractListController<EtudiantClassRoomDto, EtudiantClassRoomCriteria, EtudiantClassRoomService>  implements OnInit {

    fileName = 'EtudiantClassRoom';

    classRooms :Array<ClassRoomDto>;
    etudiants :Array<EtudiantDto>;
  
    constructor(datePipe: DatePipe, etudiantClassRoomService: EtudiantClassRoomService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private classRoomService: ClassRoomService, private etudiantService: EtudiantService) {
        super(datePipe, etudiantClassRoomService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadClassRoom();
      this.loadEtudiant();
    }

    public async loadEtudiantClassRooms(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EtudiantClassRoom', 'list');
        isPermistted ? this.service.findAll().subscribe(etudiantClassRooms => this.items = etudiantClassRooms,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'classRoom?.libelle', header: 'Class room'},
            {field: 'etudiant?.ref', header: 'Etudiant'},
        ];
    }


    public async loadClassRoom(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EtudiantClassRoom', 'list');
        isPermistted ? this.classRoomService.findAllOptimized().subscribe(classRooms => this.classRooms = classRooms,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EtudiantClassRoom', 'list');
        isPermistted ? this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: EtudiantClassRoomDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Class room': e.classRoom?.libelle ,
                'Etudiant': e.etudiant?.ref ,
            }
        });

        this.criteriaData = [{
        //'Class room': this.criteria.classRoom?.libelle ? this.criteria.classRoom?.libelle : environment.emptyForExport ,
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
        }];
      }
}
