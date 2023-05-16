import {Component, OnInit} from '@angular/core';
import {ProfService} from 'src/app/controller/service/Prof.service';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfCriteria} from 'src/app/controller/criteria/ProfCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { ParcoursService } from 'src/app/controller/service/Parcours.service';
import { CategorieProfService } from 'src/app/controller/service/CategorieProf.service';
import { TypeTeacherService } from 'src/app/controller/service/TypeTeacher.service';

import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {TypeTeacherDto} from 'src/app/controller/model/TypeTeacher.model';
import {RecommendTeacherDto} from 'src/app/controller/model/RecommendTeacher.model';
import {CategorieProfDto} from 'src/app/controller/model/CategorieProf.model';
import {TrancheHoraireProfDto} from 'src/app/controller/model/TrancheHoraireProf.model';
import {ClassRoomDto} from 'src/app/controller/model/ClassRoom.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-prof-list-admin',
  templateUrl: './prof-list-admin.component.html'
})
export class ProfListAdminComponent extends AbstractListController<ProfDto, ProfCriteria, ProfService>  implements OnInit {

    fileName = 'Prof';

    parcourss :Array<ParcoursDto>;
    categorieProfs :Array<CategorieProfDto>;
    typeTeachers :Array<TypeTeacherDto>;
  
    constructor(datePipe: DatePipe, profService: ProfService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private parcoursService: ParcoursService, private categorieProfService: CategorieProfService, private typeTeacherService: TypeTeacherService) {
        super(datePipe, profService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadParcours();
      this.loadCategorieProf();
      this.loadTypeTeacher();
    }

    public async loadProfs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Prof', 'list');
        isPermistted ? this.service.findAll().subscribe(profs => this.items = profs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'about', header: 'About'},
            {field: 'email', header: 'Email'},
            {field: 'parcours?.libelle', header: 'Parcours'},
            {field: 'categorieProf?.code', header: 'Categorie prof'},
            {field: 'typeTeacher?.libelle', header: 'Type teacher'},
        ];
    }


    public async loadParcours(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Prof', 'list');
        isPermistted ? this.parcoursService.findAllOptimized().subscribe(parcourss => this.parcourss = parcourss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadCategorieProf(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Prof', 'list');
        isPermistted ? this.categorieProfService.findAllOptimized().subscribe(categorieProfs => this.categorieProfs = categorieProfs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadTypeTeacher(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Prof', 'list');
        isPermistted ? this.typeTeacherService.findAllOptimized().subscribe(typeTeachers => this.typeTeachers = typeTeachers,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: ProfDto) {
        if (res.trancheHoraireProfs != null) {
             res.trancheHoraireProfs.forEach(d => { d.prof = null; d.id = null; });
        }
        if (res.classRooms != null) {
             res.classRooms.forEach(d => { d.prof = null; d.id = null; });
        }
        if (res.recommendTeachers != null) {
             res.recommendTeachers.forEach(d => { d.prof = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'About': e.about ,
                 'Email': e.email ,
                'Parcours': e.parcours?.libelle ,
                'Categorie prof': e.categorieProf?.code ,
                'Type teacher': e.typeTeacher?.libelle ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'About': this.criteria.about ? this.criteria.about : environment.emptyForExport ,
            'Email': this.criteria.email ? this.criteria.email : environment.emptyForExport ,
        //'Parcours': this.criteria.parcours?.libelle ? this.criteria.parcours?.libelle : environment.emptyForExport ,
        //'Categorie prof': this.criteria.categorieProf?.code ? this.criteria.categorieProf?.code : environment.emptyForExport ,
        //'Type teacher': this.criteria.typeTeacher?.libelle ? this.criteria.typeTeacher?.libelle : environment.emptyForExport ,
        }];
      }
}
