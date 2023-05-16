import {Component, OnInit} from '@angular/core';
import {InscriptionService} from 'src/app/controller/service/Inscription.service';
import {InscriptionDto} from 'src/app/controller/model/Inscription.model';
import {InscriptionCriteria} from 'src/app/controller/criteria/InscriptionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { EtudiantService } from 'src/app/controller/service/Etudiant.service';
import { EtatInscriptionService } from 'src/app/controller/service/EtatInscription.service';
import { ParcoursService } from 'src/app/controller/service/Parcours.service';
import { GroupeEtudeService } from 'src/app/controller/service/GroupeEtude.service';
import { StatutSocialService } from 'src/app/controller/service/StatutSocial.service';
import { InteretEtudiantService } from 'src/app/controller/service/InteretEtudiant.service';
import { NiveauEtudeService } from 'src/app/controller/service/NiveauEtude.service';
import { FonctionService } from 'src/app/controller/service/Fonction.service';
import { QuizService } from 'src/app/controller/service/Quiz.service';
import { PackStudentService } from 'src/app/controller/service/PackStudent.service';
import { SkillService } from 'src/app/controller/service/Skill.service';

import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {QuizDto} from 'src/app/controller/model/Quiz.model';
import {SkillDto} from 'src/app/controller/model/Skill.model';
import {InteretEtudiantDto} from 'src/app/controller/model/InteretEtudiant.model';
import {FonctionDto} from 'src/app/controller/model/Fonction.model';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtatInscriptionDto} from 'src/app/controller/model/EtatInscription.model';
import {StatutSocialDto} from 'src/app/controller/model/StatutSocial.model';
import {PackStudentDto} from 'src/app/controller/model/PackStudent.model';
import {GroupeEtudeDto} from 'src/app/controller/model/GroupeEtude.model';
import {NiveauEtudeDto} from 'src/app/controller/model/NiveauEtude.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-inscription-list-admin',
  templateUrl: './inscription-list-admin.component.html'
})
export class InscriptionListAdminComponent extends AbstractListController<InscriptionDto, InscriptionCriteria, InscriptionService>  implements OnInit {

    fileName = 'Inscription';

     yesOrNoQuizFinished :any[] =[];
    etudiants :Array<EtudiantDto>;
    etatInscriptions :Array<EtatInscriptionDto>;
    parcourss :Array<ParcoursDto>;
    groupeEtudes :Array<GroupeEtudeDto>;
    statutSocials :Array<StatutSocialDto>;
    interetEtudiants :Array<InteretEtudiantDto>;
    niveauEtudes :Array<NiveauEtudeDto>;
    fonctions :Array<FonctionDto>;
    quizs :Array<QuizDto>;
    packStudents :Array<PackStudentDto>;
    skills :Array<SkillDto>;
  
    constructor(datePipe: DatePipe, inscriptionService: InscriptionService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private etudiantService: EtudiantService, private etatInscriptionService: EtatInscriptionService, private parcoursService: ParcoursService, private groupeEtudeService: GroupeEtudeService, private statutSocialService: StatutSocialService, private interetEtudiantService: InteretEtudiantService, private niveauEtudeService: NiveauEtudeService, private fonctionService: FonctionService, private quizService: QuizService, private packStudentService: PackStudentService, private skillService: SkillService) {
        super(datePipe, inscriptionService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadEtudiant();
      this.loadEtatInscription();
      this.loadParcours();
      this.loadGroupeEtude();
      this.loadStatutSocial();
      this.loadInteretEtudiant();
      this.loadNiveauEtude();
      this.loadFonction();
      this.loadQuiz();
      this.loadPackStudent();
      this.loadSkill();
    this.yesOrNoQuizFinished =  [{label: 'QuizFinished', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }

    public async loadInscriptions(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.service.findAll().subscribe(inscriptions => this.items = inscriptions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'numeroInscription', header: 'Numero inscription'},
            {field: 'etudiant?.ref', header: 'Etudiant'},
            {field: 'etatInscription?.libelle', header: 'Etat inscription'},
            {field: 'parcours?.libelle', header: 'Parcours'},
            {field: 'groupeEtude?.libelle', header: 'Groupe etude'},
            {field: 'statutSocial?.libelle', header: 'Statut social'},
            {field: 'interetEtudiant?.libelle', header: 'Interet etudiant'},
            {field: 'niveauEtude?.libelle', header: 'Niveau etude'},
            {field: 'fonction?.libelle', header: 'Fonction'},
            {field: 'quiz?.lib', header: 'Quiz'},
            {field: 'noteQuizNiveau', header: 'Note quiz niveau'},
            {field: 'quizFinished', header: 'Quiz finished'},
            {field: 'dateRegistration', header: 'Date registration'},
            {field: 'datedebutinscription', header: 'Datedebutinscription'},
            {field: 'datefininscription', header: 'Datefininscription'},
            {field: 'packStudent?.libelle', header: 'Pack student'},
            {field: 'skill?.libelle', header: 'Skill'},
            {field: 'skype', header: 'Skype'},
        ];
    }


    public async loadEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadEtatInscription(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.etatInscriptionService.findAllOptimized().subscribe(etatInscriptions => this.etatInscriptions = etatInscriptions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadParcours(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.parcoursService.findAllOptimized().subscribe(parcourss => this.parcourss = parcourss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadGroupeEtude(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.groupeEtudeService.findAllOptimized().subscribe(groupeEtudes => this.groupeEtudes = groupeEtudes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadStatutSocial(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.statutSocialService.findAllOptimized().subscribe(statutSocials => this.statutSocials = statutSocials,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadInteretEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.interetEtudiantService.findAllOptimized().subscribe(interetEtudiants => this.interetEtudiants = interetEtudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadNiveauEtude(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.niveauEtudeService.findAllOptimized().subscribe(niveauEtudes => this.niveauEtudes = niveauEtudes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadFonction(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.fonctionService.findAllOptimized().subscribe(fonctions => this.fonctions = fonctions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadQuiz(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.quizService.findAllOptimized().subscribe(quizs => this.quizs = quizs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadPackStudent(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.packStudentService.findAllOptimized().subscribe(packStudents => this.packStudents = packStudents,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadSkill(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.skillService.findAllOptimized().subscribe(skills => this.skills = skills,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: InscriptionDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Numero inscription': e.numeroInscription ,
                'Etudiant': e.etudiant?.ref ,
                'Etat inscription': e.etatInscription?.libelle ,
                'Parcours': e.parcours?.libelle ,
                'Groupe etude': e.groupeEtude?.libelle ,
                'Statut social': e.statutSocial?.libelle ,
                'Interet etudiant': e.interetEtudiant?.libelle ,
                'Niveau etude': e.niveauEtude?.libelle ,
                'Fonction': e.fonction?.libelle ,
                'Quiz': e.quiz?.lib ,
                 'Note quiz niveau': e.noteQuizNiveau ,
                'Quiz finished': e.quizFinished? 'Vrai' : 'Faux' ,
                 'Date registration': e.dateRegistration ,
                'Datedebutinscription': this.datePipe.transform(e.datedebutinscription , 'dd/MM/yyyy hh:mm'),
                'Datefininscription': this.datePipe.transform(e.datefininscription , 'dd/MM/yyyy hh:mm'),
                'Pack student': e.packStudent?.libelle ,
                'Skill': e.skill?.libelle ,
                 'Skype': e.skype ,
            }
        });

        this.criteriaData = [{
            'Numero inscription Min': this.criteria.numeroInscriptionMin ? this.criteria.numeroInscriptionMin : environment.emptyForExport ,
            'Numero inscription Max': this.criteria.numeroInscriptionMax ? this.criteria.numeroInscriptionMax : environment.emptyForExport ,
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
        //'Etat inscription': this.criteria.etatInscription?.libelle ? this.criteria.etatInscription?.libelle : environment.emptyForExport ,
        //'Parcours': this.criteria.parcours?.libelle ? this.criteria.parcours?.libelle : environment.emptyForExport ,
        //'Groupe etude': this.criteria.groupeEtude?.libelle ? this.criteria.groupeEtude?.libelle : environment.emptyForExport ,
        //'Statut social': this.criteria.statutSocial?.libelle ? this.criteria.statutSocial?.libelle : environment.emptyForExport ,
        //'Interet etudiant': this.criteria.interetEtudiant?.libelle ? this.criteria.interetEtudiant?.libelle : environment.emptyForExport ,
        //'Niveau etude': this.criteria.niveauEtude?.libelle ? this.criteria.niveauEtude?.libelle : environment.emptyForExport ,
        //'Fonction': this.criteria.fonction?.libelle ? this.criteria.fonction?.libelle : environment.emptyForExport ,
        //'Quiz': this.criteria.quiz?.lib ? this.criteria.quiz?.lib : environment.emptyForExport ,
            'Note quiz niveau Min': this.criteria.noteQuizNiveauMin ? this.criteria.noteQuizNiveauMin : environment.emptyForExport ,
            'Note quiz niveau Max': this.criteria.noteQuizNiveauMax ? this.criteria.noteQuizNiveauMax : environment.emptyForExport ,
            'Quiz finished': this.criteria.quizFinished ? (this.criteria.quizFinished ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Date registration': this.criteria.dateRegistration ? this.criteria.dateRegistration : environment.emptyForExport ,
            'Datedebutinscription Min': this.criteria.datedebutinscriptionFrom ? this.datePipe.transform(this.criteria.datedebutinscriptionFrom , this.dateFormat) : environment.emptyForExport ,
            'Datedebutinscription Max': this.criteria.datedebutinscriptionTo ? this.datePipe.transform(this.criteria.datedebutinscriptionTo , this.dateFormat) : environment.emptyForExport ,
            'Datefininscription Min': this.criteria.datefininscriptionFrom ? this.datePipe.transform(this.criteria.datefininscriptionFrom , this.dateFormat) : environment.emptyForExport ,
            'Datefininscription Max': this.criteria.datefininscriptionTo ? this.datePipe.transform(this.criteria.datefininscriptionTo , this.dateFormat) : environment.emptyForExport ,
        //'Pack student': this.criteria.packStudent?.libelle ? this.criteria.packStudent?.libelle : environment.emptyForExport ,
        //'Skill': this.criteria.skill?.libelle ? this.criteria.skill?.libelle : environment.emptyForExport ,
            'Skype': this.criteria.skype ? this.criteria.skype : environment.emptyForExport ,
        }];
      }
}
