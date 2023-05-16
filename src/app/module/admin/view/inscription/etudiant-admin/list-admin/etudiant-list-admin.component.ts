import {Component, OnInit} from '@angular/core';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantCriteria} from 'src/app/controller/criteria/EtudiantCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { TeacherLocalityService } from 'src/app/controller/service/TeacherLocality.service';
import { EtatEtudiantScheduleService } from 'src/app/controller/service/EtatEtudiantSchedule.service';
import { ParcoursService } from 'src/app/controller/service/Parcours.service';
import { GroupeEtudeService } from 'src/app/controller/service/GroupeEtude.service';
import { PackStudentService } from 'src/app/controller/service/PackStudent.service';
import { StatutSocialService } from 'src/app/controller/service/StatutSocial.service';
import { InteretEtudiantService } from 'src/app/controller/service/InteretEtudiant.service';
import { NiveauEtudeService } from 'src/app/controller/service/NiveauEtude.service';
import { SkillService } from 'src/app/controller/service/Skill.service';
import { FonctionService } from 'src/app/controller/service/Fonction.service';
import { LangueService } from 'src/app/controller/service/Langue.service';

import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {QuizEtudiantDto} from 'src/app/controller/model/QuizEtudiant.model';
import {EtatEtudiantScheduleDto} from 'src/app/controller/model/EtatEtudiantSchedule.model';
import {InteretEtudiantDto} from 'src/app/controller/model/InteretEtudiant.model';
import {StatutSocialDto} from 'src/app/controller/model/StatutSocial.model';
import {LangueDto} from 'src/app/controller/model/Langue.model';
import {GroupeEtudeDto} from 'src/app/controller/model/GroupeEtude.model';
import {SkillDto} from 'src/app/controller/model/Skill.model';
import {FonctionDto} from 'src/app/controller/model/Fonction.model';
import {PackStudentDto} from 'src/app/controller/model/PackStudent.model';
import {GroupeEtudiantDetailDto} from 'src/app/controller/model/GroupeEtudiantDetail.model';
import {TeacherLocalityDto} from 'src/app/controller/model/TeacherLocality.model';
import {NiveauEtudeDto} from 'src/app/controller/model/NiveauEtude.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-etudiant-list-admin',
  templateUrl: './etudiant-list-admin.component.html'
})
export class EtudiantListAdminComponent extends AbstractListController<EtudiantDto, EtudiantCriteria, EtudiantService>  implements OnInit {

    fileName = 'Etudiant';

    teacherLocalitys :Array<TeacherLocalityDto>;
    etatEtudiantSchedules :Array<EtatEtudiantScheduleDto>;
    parcourss :Array<ParcoursDto>;
    groupeEtudes :Array<GroupeEtudeDto>;
    packStudents :Array<PackStudentDto>;
    statutSocials :Array<StatutSocialDto>;
    interetEtudiants :Array<InteretEtudiantDto>;
    niveauEtudes :Array<NiveauEtudeDto>;
    skills :Array<SkillDto>;
    fonctions :Array<FonctionDto>;
    langues :Array<LangueDto>;
  
    constructor(datePipe: DatePipe, etudiantService: EtudiantService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private teacherLocalityService: TeacherLocalityService, private etatEtudiantScheduleService: EtatEtudiantScheduleService, private parcoursService: ParcoursService, private groupeEtudeService: GroupeEtudeService, private packStudentService: PackStudentService, private statutSocialService: StatutSocialService, private interetEtudiantService: InteretEtudiantService, private niveauEtudeService: NiveauEtudeService, private skillService: SkillService, private fonctionService: FonctionService, private langueService: LangueService) {
        super(datePipe, etudiantService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadTeacherLocality();
      this.loadEtatEtudiantSchedule();
      this.loadParcours();
      this.loadGroupeEtude();
      this.loadPackStudent();
      this.loadStatutSocial();
      this.loadInteretEtudiant();
      this.loadNiveauEtude();
      this.loadSkill();
      this.loadFonction();
      this.loadLangue();
    }

    public async loadEtudiants(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Etudiant', 'list');
        isPermistted ? this.service.findAll().subscribe(etudiants => this.items = etudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'teacherLocality?.libelle', header: 'Teacher locality'},
            {field: 'groupOption', header: 'Group option'},
            {field: 'email', header: 'Email'},
            {field: 'etatEtudiantSchedule?.libelle', header: 'Etat etudiant schedule'},
            {field: 'parcours?.libelle', header: 'Parcours'},
            {field: 'groupeEtude?.libelle', header: 'Groupe etude'},
            {field: 'packStudent?.libelle', header: 'Pack student'},
            {field: 'statutSocial?.libelle', header: 'Statut social'},
            {field: 'interetEtudiant?.libelle', header: 'Interet etudiant'},
            {field: 'niveauEtude?.libelle', header: 'Niveau etude'},
            {field: 'skill?.libelle', header: 'Skill'},
            {field: 'fonction?.libelle', header: 'Fonction'},
            {field: 'langue?.libelle', header: 'Langue'},
        ];
    }


    public async loadTeacherLocality(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Etudiant', 'list');
        isPermistted ? this.teacherLocalityService.findAllOptimized().subscribe(teacherLocalitys => this.teacherLocalitys = teacherLocalitys,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadEtatEtudiantSchedule(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Etudiant', 'list');
        isPermistted ? this.etatEtudiantScheduleService.findAllOptimized().subscribe(etatEtudiantSchedules => this.etatEtudiantSchedules = etatEtudiantSchedules,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadParcours(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Etudiant', 'list');
        isPermistted ? this.parcoursService.findAllOptimized().subscribe(parcourss => this.parcourss = parcourss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadGroupeEtude(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Etudiant', 'list');
        isPermistted ? this.groupeEtudeService.findAllOptimized().subscribe(groupeEtudes => this.groupeEtudes = groupeEtudes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadPackStudent(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Etudiant', 'list');
        isPermistted ? this.packStudentService.findAllOptimized().subscribe(packStudents => this.packStudents = packStudents,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadStatutSocial(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Etudiant', 'list');
        isPermistted ? this.statutSocialService.findAllOptimized().subscribe(statutSocials => this.statutSocials = statutSocials,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadInteretEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Etudiant', 'list');
        isPermistted ? this.interetEtudiantService.findAllOptimized().subscribe(interetEtudiants => this.interetEtudiants = interetEtudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadNiveauEtude(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Etudiant', 'list');
        isPermistted ? this.niveauEtudeService.findAllOptimized().subscribe(niveauEtudes => this.niveauEtudes = niveauEtudes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadSkill(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Etudiant', 'list');
        isPermistted ? this.skillService.findAllOptimized().subscribe(skills => this.skills = skills,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadFonction(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Etudiant', 'list');
        isPermistted ? this.fonctionService.findAllOptimized().subscribe(fonctions => this.fonctions = fonctions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadLangue(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Etudiant', 'list');
        isPermistted ? this.langueService.findAllOptimized().subscribe(langues => this.langues = langues,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: EtudiantDto) {
        if (res.quizEtudiants != null) {
             res.quizEtudiants.forEach(d => { d.etudiant = null; d.id = null; });
        }
        if (res.groupeEtudiantDetails != null) {
             res.groupeEtudiantDetails.forEach(d => { d.etudiant = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                'Teacher locality': e.teacherLocality?.libelle ,
                 'Group option': e.groupOption ,
                 'Email': e.email ,
                'Etat etudiant schedule': e.etatEtudiantSchedule?.libelle ,
                'Parcours': e.parcours?.libelle ,
                'Groupe etude': e.groupeEtude?.libelle ,
                'Pack student': e.packStudent?.libelle ,
                'Statut social': e.statutSocial?.libelle ,
                'Interet etudiant': e.interetEtudiant?.libelle ,
                'Niveau etude': e.niveauEtude?.libelle ,
                'Skill': e.skill?.libelle ,
                'Fonction': e.fonction?.libelle ,
                'Langue': e.langue?.libelle ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
        //'Teacher locality': this.criteria.teacherLocality?.libelle ? this.criteria.teacherLocality?.libelle : environment.emptyForExport ,
            'Group option': this.criteria.groupOption ? this.criteria.groupOption : environment.emptyForExport ,
            'Email': this.criteria.email ? this.criteria.email : environment.emptyForExport ,
        //'Etat etudiant schedule': this.criteria.etatEtudiantSchedule?.libelle ? this.criteria.etatEtudiantSchedule?.libelle : environment.emptyForExport ,
        //'Parcours': this.criteria.parcours?.libelle ? this.criteria.parcours?.libelle : environment.emptyForExport ,
        //'Groupe etude': this.criteria.groupeEtude?.libelle ? this.criteria.groupeEtude?.libelle : environment.emptyForExport ,
        //'Pack student': this.criteria.packStudent?.libelle ? this.criteria.packStudent?.libelle : environment.emptyForExport ,
        //'Statut social': this.criteria.statutSocial?.libelle ? this.criteria.statutSocial?.libelle : environment.emptyForExport ,
        //'Interet etudiant': this.criteria.interetEtudiant?.libelle ? this.criteria.interetEtudiant?.libelle : environment.emptyForExport ,
        //'Niveau etude': this.criteria.niveauEtude?.libelle ? this.criteria.niveauEtude?.libelle : environment.emptyForExport ,
        //'Skill': this.criteria.skill?.libelle ? this.criteria.skill?.libelle : environment.emptyForExport ,
        //'Fonction': this.criteria.fonction?.libelle ? this.criteria.fonction?.libelle : environment.emptyForExport ,
        //'Langue': this.criteria.langue?.libelle ? this.criteria.langue?.libelle : environment.emptyForExport ,
        }];
      }
}
