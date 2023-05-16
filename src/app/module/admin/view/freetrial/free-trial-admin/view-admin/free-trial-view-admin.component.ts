import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {FreeTrialService} from 'src/app/controller/service/FreeTrial.service';
import {FreeTrialDto} from 'src/app/controller/model/FreeTrial.model';
import {FreeTrialCriteria} from 'src/app/controller/criteria/FreeTrialCriteria.model';

import {FreeTrialStudentEmailTemplateDto} from 'src/app/controller/model/FreeTrialStudentEmailTemplate.model';
import {FreeTrialStudentEmailTemplateService} from 'src/app/controller/service/FreeTrialStudentEmailTemplate.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {FreeTrialTeacherWhatsTemplateDto} from 'src/app/controller/model/FreeTrialTeacherWhatsTemplate.model';
import {FreeTrialTeacherWhatsTemplateService} from 'src/app/controller/service/FreeTrialTeacherWhatsTemplate.service';
import {FreeTrialTeacherEmailTemplateDto} from 'src/app/controller/model/FreeTrialTeacherEmailTemplate.model';
import {FreeTrialTeacherEmailTemplateService} from 'src/app/controller/service/FreeTrialTeacherEmailTemplate.service';
import {FreeTrialConfigurationDto} from 'src/app/controller/model/FreeTrialConfiguration.model';
import {FreeTrialConfigurationService} from 'src/app/controller/service/FreeTrialConfiguration.service';
import {StatutFreeTrialDto} from 'src/app/controller/model/StatutFreeTrial.model';
import {StatutFreeTrialService} from 'src/app/controller/service/StatutFreeTrial.service';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
import {NiveauEtudeDto} from 'src/app/controller/model/NiveauEtude.model';
import {NiveauEtudeService} from 'src/app/controller/service/NiveauEtude.service';
import {FreeTrialStudentWhatsTemplateDto} from 'src/app/controller/model/FreeTrialStudentWhatsTemplate.model';
import {FreeTrialStudentWhatsTemplateService} from 'src/app/controller/service/FreeTrialStudentWhatsTemplate.service';
import {FreeTrialDetailDto} from 'src/app/controller/model/FreeTrialDetail.model';
import {FreeTrialDetailService} from 'src/app/controller/service/FreeTrialDetail.service';
@Component({
  selector: 'app-free-trial-view-admin',
  templateUrl: './free-trial-view-admin.component.html'
})
export class FreeTrialViewAdminComponent extends AbstractViewController<FreeTrialDto, FreeTrialCriteria, FreeTrialService> implements OnInit {

    freeTrialDetails = new FreeTrialDetailDto();
    freeTrialDetailss: Array<FreeTrialDetailDto> = [];

    constructor(private datePipe: DatePipe, private freeTrialService: FreeTrialService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private profService: ProfService, private freeTrialStudentEmailTemplateService: FreeTrialStudentEmailTemplateService, private etudiantService: EtudiantService, private freeTrialTeacherWhatsTemplateService: FreeTrialTeacherWhatsTemplateService, private niveauEtudeService: NiveauEtudeService, private freeTrialStudentWhatsTemplateService: FreeTrialStudentWhatsTemplateService, private freeTrialTeacherEmailTemplateService: FreeTrialTeacherEmailTemplateService, private freeTrialDetailService: FreeTrialDetailService, private freeTrialConfigurationService: FreeTrialConfigurationService, private statutFreeTrialService: StatutFreeTrialService
    ){
        super(datePipe, freeTrialService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.freeTrialDetails.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
        this.prof = new ProfDto();
        this.profService.findAll().subscribe((data) => this.profs = data);
        this.niveauEtude = new NiveauEtudeDto();
        this.niveauEtudeService.findAll().subscribe((data) => this.niveauEtudes = data);
        this.freeTrialStudentWhatsTemplate = new FreeTrialStudentWhatsTemplateDto();
        this.freeTrialStudentWhatsTemplateService.findAll().subscribe((data) => this.freeTrialStudentWhatsTemplates = data);
        this.freeTrialStudentEmailTemplate = new FreeTrialStudentEmailTemplateDto();
        this.freeTrialStudentEmailTemplateService.findAll().subscribe((data) => this.freeTrialStudentEmailTemplates = data);
        this.freeTrialTeacherEmailTemplate = new FreeTrialTeacherEmailTemplateDto();
        this.freeTrialTeacherEmailTemplateService.findAll().subscribe((data) => this.freeTrialTeacherEmailTemplates = data);
        this.freeTrialTeacherWhatsTemplate = new FreeTrialTeacherWhatsTemplateDto();
        this.freeTrialTeacherWhatsTemplateService.findAll().subscribe((data) => this.freeTrialTeacherWhatsTemplates = data);
        this.freeTrialConfiguration = new FreeTrialConfigurationDto();
        this.freeTrialConfigurationService.findAll().subscribe((data) => this.freeTrialConfigurations = data);
        this.statutFreeTrial = new StatutFreeTrialDto();
        this.statutFreeTrialService.findAll().subscribe((data) => this.statutFreeTrials = data);
    }


    get freeTrialTeacherWhatsTemplate(): FreeTrialTeacherWhatsTemplateDto {
       return this.freeTrialTeacherWhatsTemplateService.item;
    }
    set freeTrialTeacherWhatsTemplate(value: FreeTrialTeacherWhatsTemplateDto) {
        this.freeTrialTeacherWhatsTemplateService.item = value;
    }
    get freeTrialTeacherWhatsTemplates():Array<FreeTrialTeacherWhatsTemplateDto> {
       return this.freeTrialTeacherWhatsTemplateService.items;
    }
    set freeTrialTeacherWhatsTemplates(value: Array<FreeTrialTeacherWhatsTemplateDto>) {
        this.freeTrialTeacherWhatsTemplateService.items = value;
    }
    get freeTrialStudentEmailTemplate(): FreeTrialStudentEmailTemplateDto {
       return this.freeTrialStudentEmailTemplateService.item;
    }
    set freeTrialStudentEmailTemplate(value: FreeTrialStudentEmailTemplateDto) {
        this.freeTrialStudentEmailTemplateService.item = value;
    }
    get freeTrialStudentEmailTemplates():Array<FreeTrialStudentEmailTemplateDto> {
       return this.freeTrialStudentEmailTemplateService.items;
    }
    set freeTrialStudentEmailTemplates(value: Array<FreeTrialStudentEmailTemplateDto>) {
        this.freeTrialStudentEmailTemplateService.items = value;
    }
    get freeTrialConfiguration(): FreeTrialConfigurationDto {
       return this.freeTrialConfigurationService.item;
    }
    set freeTrialConfiguration(value: FreeTrialConfigurationDto) {
        this.freeTrialConfigurationService.item = value;
    }
    get freeTrialConfigurations():Array<FreeTrialConfigurationDto> {
       return this.freeTrialConfigurationService.items;
    }
    set freeTrialConfigurations(value: Array<FreeTrialConfigurationDto>) {
        this.freeTrialConfigurationService.items = value;
    }
    get prof(): ProfDto {
       return this.profService.item;
    }
    set prof(value: ProfDto) {
        this.profService.item = value;
    }
    get profs():Array<ProfDto> {
       return this.profService.items;
    }
    set profs(value: Array<ProfDto>) {
        this.profService.items = value;
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
    get freeTrialStudentWhatsTemplate(): FreeTrialStudentWhatsTemplateDto {
       return this.freeTrialStudentWhatsTemplateService.item;
    }
    set freeTrialStudentWhatsTemplate(value: FreeTrialStudentWhatsTemplateDto) {
        this.freeTrialStudentWhatsTemplateService.item = value;
    }
    get freeTrialStudentWhatsTemplates():Array<FreeTrialStudentWhatsTemplateDto> {
       return this.freeTrialStudentWhatsTemplateService.items;
    }
    set freeTrialStudentWhatsTemplates(value: Array<FreeTrialStudentWhatsTemplateDto>) {
        this.freeTrialStudentWhatsTemplateService.items = value;
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
    get statutFreeTrial(): StatutFreeTrialDto {
       return this.statutFreeTrialService.item;
    }
    set statutFreeTrial(value: StatutFreeTrialDto) {
        this.statutFreeTrialService.item = value;
    }
    get statutFreeTrials():Array<StatutFreeTrialDto> {
       return this.statutFreeTrialService.items;
    }
    set statutFreeTrials(value: Array<StatutFreeTrialDto>) {
        this.statutFreeTrialService.items = value;
    }
    get freeTrialTeacherEmailTemplate(): FreeTrialTeacherEmailTemplateDto {
       return this.freeTrialTeacherEmailTemplateService.item;
    }
    set freeTrialTeacherEmailTemplate(value: FreeTrialTeacherEmailTemplateDto) {
        this.freeTrialTeacherEmailTemplateService.item = value;
    }
    get freeTrialTeacherEmailTemplates():Array<FreeTrialTeacherEmailTemplateDto> {
       return this.freeTrialTeacherEmailTemplateService.items;
    }
    set freeTrialTeacherEmailTemplates(value: Array<FreeTrialTeacherEmailTemplateDto>) {
        this.freeTrialTeacherEmailTemplateService.items = value;
    }


}
