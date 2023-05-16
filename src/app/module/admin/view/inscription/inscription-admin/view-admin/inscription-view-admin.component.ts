import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {InscriptionService} from 'src/app/controller/service/Inscription.service';
import {InscriptionDto} from 'src/app/controller/model/Inscription.model';
import {InscriptionCriteria} from 'src/app/controller/criteria/InscriptionCriteria.model';

import {StatutSocialDto} from 'src/app/controller/model/StatutSocial.model';
import {StatutSocialService} from 'src/app/controller/service/StatutSocial.service';
import {FonctionDto} from 'src/app/controller/model/Fonction.model';
import {FonctionService} from 'src/app/controller/service/Fonction.service';
import {QuizDto} from 'src/app/controller/model/Quiz.model';
import {QuizService} from 'src/app/controller/service/Quiz.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {EtatInscriptionDto} from 'src/app/controller/model/EtatInscription.model';
import {EtatInscriptionService} from 'src/app/controller/service/EtatInscription.service';
import {GroupeEtudeDto} from 'src/app/controller/model/GroupeEtude.model';
import {GroupeEtudeService} from 'src/app/controller/service/GroupeEtude.service';
import {NiveauEtudeDto} from 'src/app/controller/model/NiveauEtude.model';
import {NiveauEtudeService} from 'src/app/controller/service/NiveauEtude.service';
import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {ParcoursService} from 'src/app/controller/service/Parcours.service';
import {InteretEtudiantDto} from 'src/app/controller/model/InteretEtudiant.model';
import {InteretEtudiantService} from 'src/app/controller/service/InteretEtudiant.service';
import {PackStudentDto} from 'src/app/controller/model/PackStudent.model';
import {PackStudentService} from 'src/app/controller/service/PackStudent.service';
import {SkillDto} from 'src/app/controller/model/Skill.model';
import {SkillService} from 'src/app/controller/service/Skill.service';
@Component({
  selector: 'app-inscription-view-admin',
  templateUrl: './inscription-view-admin.component.html'
})
export class InscriptionViewAdminComponent extends AbstractViewController<InscriptionDto, InscriptionCriteria, InscriptionService> implements OnInit {


    constructor(private datePipe: DatePipe, private inscriptionService: InscriptionService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private statutSocialService: StatutSocialService, private fonctionService: FonctionService, private quizService: QuizService, private etudiantService: EtudiantService, private etatInscriptionService: EtatInscriptionService, private groupeEtudeService: GroupeEtudeService, private niveauEtudeService: NiveauEtudeService, private parcoursService: ParcoursService, private interetEtudiantService: InteretEtudiantService, private packStudentService: PackStudentService, private skillService: SkillService
    ){
        super(datePipe, inscriptionService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
        this.etatInscription = new EtatInscriptionDto();
        this.etatInscriptionService.findAll().subscribe((data) => this.etatInscriptions = data);
        this.parcours = new ParcoursDto();
        this.parcoursService.findAll().subscribe((data) => this.parcourss = data);
        this.groupeEtude = new GroupeEtudeDto();
        this.groupeEtudeService.findAll().subscribe((data) => this.groupeEtudes = data);
        this.statutSocial = new StatutSocialDto();
        this.statutSocialService.findAll().subscribe((data) => this.statutSocials = data);
        this.interetEtudiant = new InteretEtudiantDto();
        this.interetEtudiantService.findAll().subscribe((data) => this.interetEtudiants = data);
        this.niveauEtude = new NiveauEtudeDto();
        this.niveauEtudeService.findAll().subscribe((data) => this.niveauEtudes = data);
        this.fonction = new FonctionDto();
        this.fonctionService.findAll().subscribe((data) => this.fonctions = data);
        this.quiz = new QuizDto();
        this.quizService.findAll().subscribe((data) => this.quizs = data);
        this.packStudent = new PackStudentDto();
        this.packStudentService.findAll().subscribe((data) => this.packStudents = data);
        this.skill = new SkillDto();
        this.skillService.findAll().subscribe((data) => this.skills = data);
    }


    get packStudent(): PackStudentDto {
       return this.packStudentService.item;
    }
    set packStudent(value: PackStudentDto) {
        this.packStudentService.item = value;
    }
    get packStudents():Array<PackStudentDto> {
       return this.packStudentService.items;
    }
    set packStudents(value: Array<PackStudentDto>) {
        this.packStudentService.items = value;
    }
    get statutSocial(): StatutSocialDto {
       return this.statutSocialService.item;
    }
    set statutSocial(value: StatutSocialDto) {
        this.statutSocialService.item = value;
    }
    get statutSocials():Array<StatutSocialDto> {
       return this.statutSocialService.items;
    }
    set statutSocials(value: Array<StatutSocialDto>) {
        this.statutSocialService.items = value;
    }
    get niveauEtude(): NiveauEtudeDto {
       return this.niveauEtudeService.item;
    }
    set niveauEtude(value: NiveauEtudeDto) {
        this.niveauEtudeService.item = value;
    }
    get niveauEtudes():Array<NiveauEtudeDto> {
       return this.niveauEtudeService.items;
    }
    set niveauEtudes(value: Array<NiveauEtudeDto>) {
        this.niveauEtudeService.items = value;
    }
    get quiz(): QuizDto {
       return this.quizService.item;
    }
    set quiz(value: QuizDto) {
        this.quizService.item = value;
    }
    get quizs():Array<QuizDto> {
       return this.quizService.items;
    }
    set quizs(value: Array<QuizDto>) {
        this.quizService.items = value;
    }
    get parcours(): ParcoursDto {
       return this.parcoursService.item;
    }
    set parcours(value: ParcoursDto) {
        this.parcoursService.item = value;
    }
    get parcourss():Array<ParcoursDto> {
       return this.parcoursService.items;
    }
    set parcourss(value: Array<ParcoursDto>) {
        this.parcoursService.items = value;
    }
    get skill(): SkillDto {
       return this.skillService.item;
    }
    set skill(value: SkillDto) {
        this.skillService.item = value;
    }
    get skills():Array<SkillDto> {
       return this.skillService.items;
    }
    set skills(value: Array<SkillDto>) {
        this.skillService.items = value;
    }
    get etudiant(): EtudiantDto {
       return this.etudiantService.item;
    }
    set etudiant(value: EtudiantDto) {
        this.etudiantService.item = value;
    }
    get etudiants():Array<EtudiantDto> {
       return this.etudiantService.items;
    }
    set etudiants(value: Array<EtudiantDto>) {
        this.etudiantService.items = value;
    }
    get interetEtudiant(): InteretEtudiantDto {
       return this.interetEtudiantService.item;
    }
    set interetEtudiant(value: InteretEtudiantDto) {
        this.interetEtudiantService.item = value;
    }
    get interetEtudiants():Array<InteretEtudiantDto> {
       return this.interetEtudiantService.items;
    }
    set interetEtudiants(value: Array<InteretEtudiantDto>) {
        this.interetEtudiantService.items = value;
    }
    get etatInscription(): EtatInscriptionDto {
       return this.etatInscriptionService.item;
    }
    set etatInscription(value: EtatInscriptionDto) {
        this.etatInscriptionService.item = value;
    }
    get etatInscriptions():Array<EtatInscriptionDto> {
       return this.etatInscriptionService.items;
    }
    set etatInscriptions(value: Array<EtatInscriptionDto>) {
        this.etatInscriptionService.items = value;
    }
    get fonction(): FonctionDto {
       return this.fonctionService.item;
    }
    set fonction(value: FonctionDto) {
        this.fonctionService.item = value;
    }
    get fonctions():Array<FonctionDto> {
       return this.fonctionService.items;
    }
    set fonctions(value: Array<FonctionDto>) {
        this.fonctionService.items = value;
    }
    get groupeEtude(): GroupeEtudeDto {
       return this.groupeEtudeService.item;
    }
    set groupeEtude(value: GroupeEtudeDto) {
        this.groupeEtudeService.item = value;
    }
    get groupeEtudes():Array<GroupeEtudeDto> {
       return this.groupeEtudeService.items;
    }
    set groupeEtudes(value: Array<GroupeEtudeDto>) {
        this.groupeEtudeService.items = value;
    }


}
