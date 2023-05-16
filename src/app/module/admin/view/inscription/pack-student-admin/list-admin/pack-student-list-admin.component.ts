import {Component, OnInit} from '@angular/core';
import {PackStudentService} from 'src/app/controller/service/PackStudent.service';
import {PackStudentDto} from 'src/app/controller/model/PackStudent.model';
import {PackStudentCriteria} from 'src/app/controller/criteria/PackStudentCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { ParcoursService } from 'src/app/controller/service/Parcours.service';
import { PriceService } from 'src/app/controller/service/Price.service';

import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {PriceDto} from 'src/app/controller/model/Price.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-pack-student-list-admin',
  templateUrl: './pack-student-list-admin.component.html'
})
export class PackStudentListAdminComponent extends AbstractListController<PackStudentDto, PackStudentCriteria, PackStudentService>  implements OnInit {

    fileName = 'PackStudent';

     yesOrNoForGroupe :any[] =[];
    parcourss :Array<ParcoursDto>;
    prices :Array<PriceDto>;
  
    constructor(datePipe: DatePipe, packStudentService: PackStudentService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private parcoursService: ParcoursService, private priceService: PriceService) {
        super(datePipe, packStudentService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadParcours();
      this.loadPrice();
    this.yesOrNoForGroupe =  [{label: 'ForGroupe', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }

    public async loadPackStudents(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('PackStudent', 'list');
        isPermistted ? this.service.findAll().subscribe(packStudents => this.items = packStudents,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'nombreCours', header: 'Nombre cours'},
            {field: 'forGroupe', header: 'For groupe'},
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'preRequisites', header: 'Pre requisites'},
            {field: 'whyTakeThisCourse', header: 'Why take this course'},
            {field: 'expectations', header: 'Expectations'},
            {field: 'parcours?.libelle', header: 'Parcours'},
            {field: 'imgUrl', header: 'Img url'},
            {field: 'price?.lib', header: 'Price'},
            {field: 'totalStudents', header: 'Total students'},
            {field: 'rating', header: 'Rating'},
            {field: 'oldPrice', header: 'Old price'},
        ];
    }


    public async loadParcours(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('PackStudent', 'list');
        isPermistted ? this.parcoursService.findAllOptimized().subscribe(parcourss => this.parcourss = parcourss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadPrice(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('PackStudent', 'list');
        isPermistted ? this.priceService.findAllOptimized().subscribe(prices => this.prices = prices,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: PackStudentDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Nombre cours': e.nombreCours ,
                'For groupe': e.forGroupe? 'Vrai' : 'Faux' ,
                 'Code': e.code ,
                 'Libelle': e.libelle ,
                 'Description': e.description ,
                 'Pre requisites': e.preRequisites ,
                 'Why take this course': e.whyTakeThisCourse ,
                 'Expectations': e.expectations ,
                'Parcours': e.parcours?.libelle ,
                 'Img url': e.imgUrl ,
                'Price': e.price?.lib ,
                 'Total students': e.totalStudents ,
                 'Rating': e.rating ,
                 'Old price': e.oldPrice ,
            }
        });

        this.criteriaData = [{
            'Nombre cours Min': this.criteria.nombreCoursMin ? this.criteria.nombreCoursMin : environment.emptyForExport ,
            'Nombre cours Max': this.criteria.nombreCoursMax ? this.criteria.nombreCoursMax : environment.emptyForExport ,
            'For groupe': this.criteria.forGroupe ? (this.criteria.forGroupe ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Pre requisites': this.criteria.preRequisites ? this.criteria.preRequisites : environment.emptyForExport ,
            'Why take this course': this.criteria.whyTakeThisCourse ? this.criteria.whyTakeThisCourse : environment.emptyForExport ,
            'Expectations': this.criteria.expectations ? this.criteria.expectations : environment.emptyForExport ,
        //'Parcours': this.criteria.parcours?.libelle ? this.criteria.parcours?.libelle : environment.emptyForExport ,
            'Img url': this.criteria.imgUrl ? this.criteria.imgUrl : environment.emptyForExport ,
        //'Price': this.criteria.price?.lib ? this.criteria.price?.lib : environment.emptyForExport ,
            'Total students Min': this.criteria.totalStudentsMin ? this.criteria.totalStudentsMin : environment.emptyForExport ,
            'Total students Max': this.criteria.totalStudentsMax ? this.criteria.totalStudentsMax : environment.emptyForExport ,
            'Rating': this.criteria.rating ? this.criteria.rating : environment.emptyForExport ,
            'Old price': this.criteria.oldPrice ? this.criteria.oldPrice : environment.emptyForExport ,
        }];
      }
}
