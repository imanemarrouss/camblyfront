import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {ParcoursService} from 'src/app/controller/service/Parcours.service';
import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {ParcoursCriteria} from 'src/app/controller/criteria/ParcoursCriteria.model';

import {CentreDto} from 'src/app/controller/model/Centre.model';
import {CentreService} from 'src/app/controller/service/Centre.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {GroupeEtudiantDto} from 'src/app/controller/model/GroupeEtudiant.model';
import {GroupeEtudiantService} from 'src/app/controller/service/GroupeEtudiant.service';
import {NiveauEtudeDto} from 'src/app/controller/model/NiveauEtude.model';
import {NiveauEtudeService} from 'src/app/controller/service/NiveauEtude.service';
import {EtatCoursDto} from 'src/app/controller/model/EtatCours.model';
import {EtatCoursService} from 'src/app/controller/service/EtatCours.service';
import {PackStudentDto} from 'src/app/controller/model/PackStudent.model';
import {PackStudentService} from 'src/app/controller/service/PackStudent.service';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import {CoursService} from 'src/app/controller/service/Cours.service';
import {StatutSocialDto} from 'src/app/controller/model/StatutSocial.model';
import {StatutSocialService} from 'src/app/controller/service/StatutSocial.service';
import {GroupeEtudiantDetailDto} from 'src/app/controller/model/GroupeEtudiantDetail.model';
import {GroupeEtudiantDetailService} from 'src/app/controller/service/GroupeEtudiantDetail.service';
import {GroupeEtudeDto} from 'src/app/controller/model/GroupeEtude.model';
import {GroupeEtudeService} from 'src/app/controller/service/GroupeEtude.service';
import {HomeWorkDto} from 'src/app/controller/model/HomeWork.model';
import {HomeWorkService} from 'src/app/controller/service/HomeWork.service';
import {LangueDto} from 'src/app/controller/model/Langue.model';
import {LangueService} from 'src/app/controller/service/Langue.service';
import {InteretEtudiantDto} from 'src/app/controller/model/InteretEtudiant.model';
import {InteretEtudiantService} from 'src/app/controller/service/InteretEtudiant.service';
import {EtatEtudiantScheduleDto} from 'src/app/controller/model/EtatEtudiantSchedule.model';
import {EtatEtudiantScheduleService} from 'src/app/controller/service/EtatEtudiantSchedule.service';
import {QuizEtudiantDto} from 'src/app/controller/model/QuizEtudiant.model';
import {QuizEtudiantService} from 'src/app/controller/service/QuizEtudiant.service';
import {TeacherLocalityDto} from 'src/app/controller/model/TeacherLocality.model';
import {TeacherLocalityService} from 'src/app/controller/service/TeacherLocality.service';
import {FonctionDto} from 'src/app/controller/model/Fonction.model';
import {FonctionService} from 'src/app/controller/service/Fonction.service';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';
import {SkillDto} from 'src/app/controller/model/Skill.model';
import {SkillService} from 'src/app/controller/service/Skill.service';
@Component({
  selector: 'app-parcours-view-admin',
  templateUrl: './parcours-view-admin.component.html'
})
export class ParcoursViewAdminComponent extends AbstractViewController<ParcoursDto, ParcoursCriteria, ParcoursService> implements OnInit {

    courss = new CoursDto();
    coursss: Array<CoursDto> = [];
    etudiants = new EtudiantDto();
    etudiantss: Array<EtudiantDto> = [];

    constructor(private datePipe: DatePipe, private parcoursService: ParcoursService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private centreService: CentreService, private statutSocialService: StatutSocialService, private etudiantService: EtudiantService, private groupeEtudeService: GroupeEtudeService, private langueService: LangueService, private interetEtudiantService: InteretEtudiantService, private etatEtudiantScheduleService: EtatEtudiantScheduleService, private teacherLocalityService: TeacherLocalityService, private groupeEtudiantService: GroupeEtudiantService, private fonctionService: FonctionService, private niveauEtudeService: NiveauEtudeService, private etatCoursService: EtatCoursService, private packStudentService: PackStudentService, private coursService: CoursService, private skillService: SkillService
    ){
        super(datePipe, parcoursService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.courss.etatCours = new EtatCoursDto();
        this.etatCoursService.findAll().subscribe((data) => this.etatCourss = data);
        this.etudiants.teacherLocality = new TeacherLocalityDto();
        this.teacherLocalityService.findAll().subscribe((data) => this.teacherLocalitys = data);
        this.etudiants.etatEtudiantSchedule = new EtatEtudiantScheduleDto();
        this.etatEtudiantScheduleService.findAll().subscribe((data) => this.etatEtudiantSchedules = data);
        this.etudiants.groupeEtude = new GroupeEtudeDto();
        this.groupeEtudeService.findAll().subscribe((data) => this.groupeEtudes = data);
        this.etudiants.packStudent = new PackStudentDto();
        this.packStudentService.findAll().subscribe((data) => this.packStudents = data);
        this.etudiants.statutSocial = new StatutSocialDto();
        this.statutSocialService.findAll().subscribe((data) => this.statutSocials = data);
        this.etudiants.interetEtudiant = new InteretEtudiantDto();
        this.interetEtudiantService.findAll().subscribe((data) => this.interetEtudiants = data);
        this.etudiants.niveauEtude = new NiveauEtudeDto();
        this.niveauEtudeService.findAll().subscribe((data) => this.niveauEtudes = data);
        this.etudiants.skill = new SkillDto();
        this.skillService.findAll().subscribe((data) => this.skills = data);
        this.etudiants.fonction = new FonctionDto();
        this.fonctionService.findAll().subscribe((data) => this.fonctions = data);
        this.etudiants.langue = new LangueDto();
        this.langueService.findAll().subscribe((data) => this.langues = data);
        this.centre = new CentreDto();
        this.centreService.findAll().subscribe((data) => this.centres = data);
    }


    get langue(): LangueDto {
       return this.langueService.item;
    }
    set langue(value: LangueDto) {
        this.langueService.item = value;
    }
    get langues():Array<LangueDto> {
       return this.langueService.items;
    }
    set langues(value: Array<LangueDto>) {
        this.langueService.items = value;
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
    get etatCours(): EtatCoursDto {
       return this.etatCoursService.item;
    }
    set etatCours(value: EtatCoursDto) {
        this.etatCoursService.item = value;
    }
    get etatCourss():Array<EtatCoursDto> {
       return this.etatCoursService.items;
    }
    set etatCourss(value: Array<EtatCoursDto>) {
        this.etatCoursService.items = value;
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
    get teacherLocality(): TeacherLocalityDto {
       return this.teacherLocalityService.item;
    }
    set teacherLocality(value: TeacherLocalityDto) {
        this.teacherLocalityService.item = value;
    }
    get teacherLocalitys():Array<TeacherLocalityDto> {
       return this.teacherLocalityService.items;
    }
    set teacherLocalitys(value: Array<TeacherLocalityDto>) {
        this.teacherLocalityService.items = value;
    }
    get etatEtudiantSchedule(): EtatEtudiantScheduleDto {
       return this.etatEtudiantScheduleService.item;
    }
    set etatEtudiantSchedule(value: EtatEtudiantScheduleDto) {
        this.etatEtudiantScheduleService.item = value;
    }
    get etatEtudiantSchedules():Array<EtatEtudiantScheduleDto> {
       return this.etatEtudiantScheduleService.items;
    }
    set etatEtudiantSchedules(value: Array<EtatEtudiantScheduleDto>) {
        this.etatEtudiantScheduleService.items = value;
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
    get centre(): CentreDto {
       return this.centreService.item;
    }
    set centre(value: CentreDto) {
        this.centreService.item = value;
    }
    get centres():Array<CentreDto> {
       return this.centreService.items;
    }
    set centres(value: Array<CentreDto>) {
        this.centreService.items = value;
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
