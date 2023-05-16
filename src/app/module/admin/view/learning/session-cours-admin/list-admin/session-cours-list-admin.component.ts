import {Component, OnInit} from '@angular/core';
import {SessionCoursService} from 'src/app/controller/service/SessionCours.service';
import {SessionCoursDto} from 'src/app/controller/model/SessionCours.model';
import {SessionCoursCriteria} from 'src/app/controller/criteria/SessionCoursCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { ProfService } from 'src/app/controller/service/Prof.service';
import { CoursService } from 'src/app/controller/service/Cours.service';
import { GroupeEtudiantService } from 'src/app/controller/service/GroupeEtudiant.service';
import { SalaryService } from 'src/app/controller/service/Salary.service';

import {SalaryDto} from 'src/app/controller/model/Salary.model';
import {GroupeEtudiantDto} from 'src/app/controller/model/GroupeEtudiant.model';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-session-cours-list-admin',
  templateUrl: './session-cours-list-admin.component.html'
})
export class SessionCoursListAdminComponent extends AbstractListController<SessionCoursDto, SessionCoursCriteria, SessionCoursService>  implements OnInit {

    fileName = 'SessionCours';

     yesOrNoPayer :any[] =[];
    profs :Array<ProfDto>;
    courss :Array<CoursDto>;
    groupeEtudiants :Array<GroupeEtudiantDto>;
    salarys :Array<SalaryDto>;
  
    constructor(datePipe: DatePipe, sessionCoursService: SessionCoursService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private profService: ProfService, private coursService: CoursService, private groupeEtudiantService: GroupeEtudiantService, private salaryService: SalaryService) {
        super(datePipe, sessionCoursService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadProf();
      this.loadCours();
      this.loadGroupeEtudiant();
      this.loadSalary();
    this.yesOrNoPayer =  [{label: 'Payer', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }

    public async loadSessionCourss(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('SessionCours', 'list');
        isPermistted ? this.service.findAll().subscribe(sessionCourss => this.items = sessionCourss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'cours?.libelle', header: 'Cours'},
            {field: 'groupeEtudiant?.id', header: 'Groupe etudiant'},
            {field: 'duree', header: 'Duree'},
            {field: 'totalheure', header: 'Totalheure'},
            {field: 'mois', header: 'Mois'},
            {field: 'annee', header: 'Annee'},
            {field: 'dateFin', header: 'Date fin'},
            {field: 'dateDebut', header: 'Date debut'},
            {field: 'payer', header: 'Payer'},
            {field: 'salary?.code', header: 'Salary'},
        ];
    }


    public async loadProf(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('SessionCours', 'list');
        isPermistted ? this.profService.findAllOptimized().subscribe(profs => this.profs = profs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadCours(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('SessionCours', 'list');
        isPermistted ? this.coursService.findAllOptimized().subscribe(courss => this.courss = courss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadGroupeEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('SessionCours', 'list');
        isPermistted ? this.groupeEtudiantService.findAll().subscribe(groupeEtudiants => this.groupeEtudiants = groupeEtudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadSalary(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('SessionCours', 'list');
        isPermistted ? this.salaryService.findAllOptimized().subscribe(salarys => this.salarys = salarys,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: SessionCoursDto) {
        if (res.sections != null) {
             res.sections.forEach(d => { d.sessionCours = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                'Prof': e.prof?.ref ,
                'Cours': e.cours?.libelle ,
                'Groupe etudiant': e.groupeEtudiant?.id ,
                 'Duree': e.duree ,
                 'Totalheure': e.totalheure ,
                 'Mois': e.mois ,
                 'Annee': e.annee ,
                'Date fin': this.datePipe.transform(e.dateFin , 'dd/MM/yyyy hh:mm'),
                'Date debut': this.datePipe.transform(e.dateDebut , 'dd/MM/yyyy hh:mm'),
                'Payer': e.payer? 'Vrai' : 'Faux' ,
                'Salary': e.salary?.code ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
        //'Cours': this.criteria.cours?.libelle ? this.criteria.cours?.libelle : environment.emptyForExport ,
        //'Groupe etudiant': this.criteria.groupeEtudiant?.id ? this.criteria.groupeEtudiant?.id : environment.emptyForExport ,
            'Duree Min': this.criteria.dureeMin ? this.criteria.dureeMin : environment.emptyForExport ,
            'Duree Max': this.criteria.dureeMax ? this.criteria.dureeMax : environment.emptyForExport ,
            'Totalheure Min': this.criteria.totalheureMin ? this.criteria.totalheureMin : environment.emptyForExport ,
            'Totalheure Max': this.criteria.totalheureMax ? this.criteria.totalheureMax : environment.emptyForExport ,
            'Mois Min': this.criteria.moisMin ? this.criteria.moisMin : environment.emptyForExport ,
            'Mois Max': this.criteria.moisMax ? this.criteria.moisMax : environment.emptyForExport ,
            'Annee Min': this.criteria.anneeMin ? this.criteria.anneeMin : environment.emptyForExport ,
            'Annee Max': this.criteria.anneeMax ? this.criteria.anneeMax : environment.emptyForExport ,
            'Date fin Min': this.criteria.dateFinFrom ? this.datePipe.transform(this.criteria.dateFinFrom , this.dateFormat) : environment.emptyForExport ,
            'Date fin Max': this.criteria.dateFinTo ? this.datePipe.transform(this.criteria.dateFinTo , this.dateFormat) : environment.emptyForExport ,
            'Date debut Min': this.criteria.dateDebutFrom ? this.datePipe.transform(this.criteria.dateDebutFrom , this.dateFormat) : environment.emptyForExport ,
            'Date debut Max': this.criteria.dateDebutTo ? this.datePipe.transform(this.criteria.dateDebutTo , this.dateFormat) : environment.emptyForExport ,
            'Payer': this.criteria.payer ? (this.criteria.payer ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
        //'Salary': this.criteria.salary?.code ? this.criteria.salary?.code : environment.emptyForExport ,
        }];
      }
}
