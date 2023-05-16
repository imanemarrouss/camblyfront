import {Component, OnInit} from '@angular/core';
import {GroupeEtudiantService} from 'src/app/controller/service/GroupeEtudiant.service';
import {GroupeEtudiantDto} from 'src/app/controller/model/GroupeEtudiant.model';
import {GroupeEtudiantCriteria} from 'src/app/controller/criteria/GroupeEtudiantCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { GroupeEtudeService } from 'src/app/controller/service/GroupeEtude.service';
import { ParcoursService } from 'src/app/controller/service/Parcours.service';
import { ProfService } from 'src/app/controller/service/Prof.service';

import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {GroupeEtudiantDetailDto} from 'src/app/controller/model/GroupeEtudiantDetail.model';
import {GroupeEtudeDto} from 'src/app/controller/model/GroupeEtude.model';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-groupe-etudiant-list-admin',
  templateUrl: './groupe-etudiant-list-admin.component.html'
})
export class GroupeEtudiantListAdminComponent extends AbstractListController<GroupeEtudiantDto, GroupeEtudiantCriteria, GroupeEtudiantService>  implements OnInit {

    fileName = 'GroupeEtudiant';

    groupeEtudes :Array<GroupeEtudeDto>;
    parcourss :Array<ParcoursDto>;
    profs :Array<ProfDto>;
  
    constructor(datePipe: DatePipe, groupeEtudiantService: GroupeEtudiantService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private groupeEtudeService: GroupeEtudeService, private parcoursService: ParcoursService, private profService: ProfService) {
        super(datePipe, groupeEtudiantService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadGroupeEtude();
      this.loadParcours();
      this.loadProf();
    }

    public async loadGroupeEtudiants(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('GroupeEtudiant', 'list');
        isPermistted ? this.service.findAll().subscribe(groupeEtudiants => this.items = groupeEtudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'niveau', header: 'Niveau'},
            {field: 'dateDebut', header: 'Date debut'},
            {field: 'dateFin', header: 'Date fin'},
            {field: 'nombrePlace', header: 'Nombre place'},
            {field: 'nombrePlacevide', header: 'Nombre placevide'},
            {field: 'nombrePlaceNonVide', header: 'Nombre place non vide'},
            {field: 'groupeEtude?.libelle', header: 'Groupe etude'},
            {field: 'parcours?.libelle', header: 'Parcours'},
            {field: 'prof?.ref', header: 'Prof'},
        ];
    }


    public async loadGroupeEtude(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('GroupeEtudiant', 'list');
        isPermistted ? this.groupeEtudeService.findAllOptimized().subscribe(groupeEtudes => this.groupeEtudes = groupeEtudes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadParcours(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('GroupeEtudiant', 'list');
        isPermistted ? this.parcoursService.findAllOptimized().subscribe(parcourss => this.parcourss = parcourss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadProf(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('GroupeEtudiant', 'list');
        isPermistted ? this.profService.findAllOptimized().subscribe(profs => this.profs = profs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: GroupeEtudiantDto) {
        if (res.groupeEtudiantDetails != null) {
             res.groupeEtudiantDetails.forEach(d => { d.groupeEtudiant = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Niveau': e.niveau ,
                'Date debut': this.datePipe.transform(e.dateDebut , 'dd/MM/yyyy hh:mm'),
                'Date fin': this.datePipe.transform(e.dateFin , 'dd/MM/yyyy hh:mm'),
                 'Nombre place': e.nombrePlace ,
                 'Nombre placevide': e.nombrePlacevide ,
                 'Nombre place non vide': e.nombrePlaceNonVide ,
                'Groupe etude': e.groupeEtude?.libelle ,
                'Parcours': e.parcours?.libelle ,
                'Prof': e.prof?.ref ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Niveau': this.criteria.niveau ? this.criteria.niveau : environment.emptyForExport ,
            'Date debut Min': this.criteria.dateDebutFrom ? this.datePipe.transform(this.criteria.dateDebutFrom , this.dateFormat) : environment.emptyForExport ,
            'Date debut Max': this.criteria.dateDebutTo ? this.datePipe.transform(this.criteria.dateDebutTo , this.dateFormat) : environment.emptyForExport ,
            'Date fin Min': this.criteria.dateFinFrom ? this.datePipe.transform(this.criteria.dateFinFrom , this.dateFormat) : environment.emptyForExport ,
            'Date fin Max': this.criteria.dateFinTo ? this.datePipe.transform(this.criteria.dateFinTo , this.dateFormat) : environment.emptyForExport ,
            'Nombre place Min': this.criteria.nombrePlaceMin ? this.criteria.nombrePlaceMin : environment.emptyForExport ,
            'Nombre place Max': this.criteria.nombrePlaceMax ? this.criteria.nombrePlaceMax : environment.emptyForExport ,
            'Nombre placevide Min': this.criteria.nombrePlacevideMin ? this.criteria.nombrePlacevideMin : environment.emptyForExport ,
            'Nombre placevide Max': this.criteria.nombrePlacevideMax ? this.criteria.nombrePlacevideMax : environment.emptyForExport ,
            'Nombre place non vide Min': this.criteria.nombrePlaceNonVideMin ? this.criteria.nombrePlaceNonVideMin : environment.emptyForExport ,
            'Nombre place non vide Max': this.criteria.nombrePlaceNonVideMax ? this.criteria.nombrePlaceNonVideMax : environment.emptyForExport ,
        //'Groupe etude': this.criteria.groupeEtude?.libelle ? this.criteria.groupeEtude?.libelle : environment.emptyForExport ,
        //'Parcours': this.criteria.parcours?.libelle ? this.criteria.parcours?.libelle : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
        }];
      }
}
