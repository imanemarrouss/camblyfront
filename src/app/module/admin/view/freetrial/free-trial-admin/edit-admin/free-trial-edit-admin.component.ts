import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

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
  selector: 'app-free-trial-edit-admin',
  templateUrl: './free-trial-edit-admin.component.html'
})
export class FreeTrialEditAdminComponent extends AbstractEditController<FreeTrialDto, FreeTrialCriteria, FreeTrialService>   implements OnInit {

    private _freeTrialDetailsElement = new FreeTrialDetailDto();

    private _validFreeTrialReference = true;

    private _validProfRef = true;
    private _validNiveauEtudeLibelle = true;
    private _validNiveauEtudeCode = true;
    private _validStatutFreeTrialLibelle = true;
    private _validStatutFreeTrialCode = true;



    constructor(private datePipe: DatePipe, private freeTrialService: FreeTrialService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private profService: ProfService, private freeTrialStudentEmailTemplateService: FreeTrialStudentEmailTemplateService, private etudiantService: EtudiantService, private freeTrialTeacherWhatsTemplateService: FreeTrialTeacherWhatsTemplateService, private niveauEtudeService: NiveauEtudeService, private freeTrialStudentWhatsTemplateService: FreeTrialStudentWhatsTemplateService, private freeTrialTeacherEmailTemplateService: FreeTrialTeacherEmailTemplateService, private freeTrialDetailService: FreeTrialDetailService, private freeTrialConfigurationService: FreeTrialConfigurationService, private statutFreeTrialService: StatutFreeTrialService
    ) {
        super(datePipe, freeTrialService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.freeTrialDetailsElement.etudiant = new EtudiantDto();
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

    public validateFreeTrialDetails(){
        this.errorMessages = new Array();
    }
    public setValidation(value : boolean){
        this.validFreeTrialReference = value;
        }
   public addFreeTrialDetails() {
        if( this.item.freeTrialDetails == null )
            this.item.freeTrialDetails = new Array<FreeTrialDetailDto>();
       this.validateFreeTrialDetails();
       if (this.errorMessages.length === 0) {
            if(this.freeTrialDetailsElement.id == null){
                this.item.freeTrialDetails.push(this.freeTrialDetailsElement);
            }else{
                const index = this.item.freeTrialDetails.findIndex(e => e.id == this.freeTrialDetailsElement.id);
                this.item.freeTrialDetails[index] = this.freeTrialDetailsElement;
            }
          this.freeTrialDetailsElement = new FreeTrialDetailDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteFreeTrialDetail(p: FreeTrialDetailDto) {
        this.item.freeTrialDetails.forEach((element, index) => {
            if (element === p) { this.item.freeTrialDetails.splice(index, 1); }
        });
    }

    public editFreeTrialDetail(p: FreeTrialDetailDto) {
        this.freeTrialDetailsElement = {... p};
        this.activeTab = 0;
    }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateFreeTrialReference();
    }
    public validateFreeTrialReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
            this.errorMessages.push('Reference non valide');
            this.validFreeTrialReference = false;
        } else {
            this.validFreeTrialReference = true;
        }
    }



   public async openCreateFreeTrialTeacherWhatsTemplate(freeTrialTeacherWhatsTemplate: string) {
        const isPermistted = await this.roleService.isPermitted('FreeTrialTeacherWhatsTemplate', 'edit');
        if(isPermistted) {
             this.freeTrialTeacherWhatsTemplate = new FreeTrialTeacherWhatsTemplateDto();
             this.createFreeTrialTeacherWhatsTemplateDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateFreeTrialStudentEmailTemplate(freeTrialStudentEmailTemplate: string) {
        const isPermistted = await this.roleService.isPermitted('FreeTrialStudentEmailTemplate', 'edit');
        if(isPermistted) {
             this.freeTrialStudentEmailTemplate = new FreeTrialStudentEmailTemplateDto();
             this.createFreeTrialStudentEmailTemplateDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateFreeTrialConfiguration(freeTrialConfiguration: string) {
        const isPermistted = await this.roleService.isPermitted('FreeTrialConfiguration', 'edit');
        if(isPermistted) {
             this.freeTrialConfiguration = new FreeTrialConfigurationDto();
             this.createFreeTrialConfigurationDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateFreeTrialStudentWhatsTemplate(freeTrialStudentWhatsTemplate: string) {
        const isPermistted = await this.roleService.isPermitted('FreeTrialStudentWhatsTemplate', 'edit');
        if(isPermistted) {
             this.freeTrialStudentWhatsTemplate = new FreeTrialStudentWhatsTemplateDto();
             this.createFreeTrialStudentWhatsTemplateDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateStatutFreeTrial(statutFreeTrial: string) {
        const isPermistted = await this.roleService.isPermitted('StatutFreeTrial', 'edit');
        if(isPermistted) {
             this.statutFreeTrial = new StatutFreeTrialDto();
             this.createStatutFreeTrialDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateFreeTrialTeacherEmailTemplate(freeTrialTeacherEmailTemplate: string) {
        const isPermistted = await this.roleService.isPermitted('FreeTrialTeacherEmailTemplate', 'edit');
        if(isPermistted) {
             this.freeTrialTeacherEmailTemplate = new FreeTrialTeacherEmailTemplateDto();
             this.createFreeTrialTeacherEmailTemplateDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get freeTrialTeacherWhatsTemplate(): FreeTrialTeacherWhatsTemplateDto {
       return this.freeTrialTeacherWhatsTemplateService.item;
   }
  set freeTrialTeacherWhatsTemplate(value: FreeTrialTeacherWhatsTemplateDto) {
        this.freeTrialTeacherWhatsTemplateService.item = value;
   }
   get freeTrialTeacherWhatsTemplates(): Array<FreeTrialTeacherWhatsTemplateDto> {
        return this.freeTrialTeacherWhatsTemplateService.items;
   }
   set freeTrialTeacherWhatsTemplates(value: Array<FreeTrialTeacherWhatsTemplateDto>) {
        this.freeTrialTeacherWhatsTemplateService.items = value;
   }
   get createFreeTrialTeacherWhatsTemplateDialog(): boolean {
       return this.freeTrialTeacherWhatsTemplateService.createDialog;
   }
  set createFreeTrialTeacherWhatsTemplateDialog(value: boolean) {
       this.freeTrialTeacherWhatsTemplateService.createDialog= value;
   }
   get freeTrialStudentEmailTemplate(): FreeTrialStudentEmailTemplateDto {
       return this.freeTrialStudentEmailTemplateService.item;
   }
  set freeTrialStudentEmailTemplate(value: FreeTrialStudentEmailTemplateDto) {
        this.freeTrialStudentEmailTemplateService.item = value;
   }
   get freeTrialStudentEmailTemplates(): Array<FreeTrialStudentEmailTemplateDto> {
        return this.freeTrialStudentEmailTemplateService.items;
   }
   set freeTrialStudentEmailTemplates(value: Array<FreeTrialStudentEmailTemplateDto>) {
        this.freeTrialStudentEmailTemplateService.items = value;
   }
   get createFreeTrialStudentEmailTemplateDialog(): boolean {
       return this.freeTrialStudentEmailTemplateService.createDialog;
   }
  set createFreeTrialStudentEmailTemplateDialog(value: boolean) {
       this.freeTrialStudentEmailTemplateService.createDialog= value;
   }
   get freeTrialConfiguration(): FreeTrialConfigurationDto {
       return this.freeTrialConfigurationService.item;
   }
  set freeTrialConfiguration(value: FreeTrialConfigurationDto) {
        this.freeTrialConfigurationService.item = value;
   }
   get freeTrialConfigurations(): Array<FreeTrialConfigurationDto> {
        return this.freeTrialConfigurationService.items;
   }
   set freeTrialConfigurations(value: Array<FreeTrialConfigurationDto>) {
        this.freeTrialConfigurationService.items = value;
   }
   get createFreeTrialConfigurationDialog(): boolean {
       return this.freeTrialConfigurationService.createDialog;
   }
  set createFreeTrialConfigurationDialog(value: boolean) {
       this.freeTrialConfigurationService.createDialog= value;
   }
   get prof(): ProfDto {
       return this.profService.item;
   }
  set prof(value: ProfDto) {
        this.profService.item = value;
   }
   get profs(): Array<ProfDto> {
        return this.profService.items;
   }
   set profs(value: Array<ProfDto>) {
        this.profService.items = value;
   }
   get createProfDialog(): boolean {
       return this.profService.createDialog;
   }
  set createProfDialog(value: boolean) {
       this.profService.createDialog= value;
   }
   get niveauEtude(): NiveauEtudeDto {
       return this.niveauEtudeService.item;
   }
  set niveauEtude(value: NiveauEtudeDto) {
        this.niveauEtudeService.item = value;
   }
   get niveauEtudes(): Array<NiveauEtudeDto> {
        return this.niveauEtudeService.items;
   }
   set niveauEtudes(value: Array<NiveauEtudeDto>) {
        this.niveauEtudeService.items = value;
   }
   get createNiveauEtudeDialog(): boolean {
       return this.niveauEtudeService.createDialog;
   }
  set createNiveauEtudeDialog(value: boolean) {
       this.niveauEtudeService.createDialog= value;
   }
   get freeTrialStudentWhatsTemplate(): FreeTrialStudentWhatsTemplateDto {
       return this.freeTrialStudentWhatsTemplateService.item;
   }
  set freeTrialStudentWhatsTemplate(value: FreeTrialStudentWhatsTemplateDto) {
        this.freeTrialStudentWhatsTemplateService.item = value;
   }
   get freeTrialStudentWhatsTemplates(): Array<FreeTrialStudentWhatsTemplateDto> {
        return this.freeTrialStudentWhatsTemplateService.items;
   }
   set freeTrialStudentWhatsTemplates(value: Array<FreeTrialStudentWhatsTemplateDto>) {
        this.freeTrialStudentWhatsTemplateService.items = value;
   }
   get createFreeTrialStudentWhatsTemplateDialog(): boolean {
       return this.freeTrialStudentWhatsTemplateService.createDialog;
   }
  set createFreeTrialStudentWhatsTemplateDialog(value: boolean) {
       this.freeTrialStudentWhatsTemplateService.createDialog= value;
   }
   get etudiant(): EtudiantDto {
       return this.etudiantService.item;
   }
  set etudiant(value: EtudiantDto) {
        this.etudiantService.item = value;
   }
   get etudiants(): Array<EtudiantDto> {
        return this.etudiantService.items;
   }
   set etudiants(value: Array<EtudiantDto>) {
        this.etudiantService.items = value;
   }
   get createEtudiantDialog(): boolean {
       return this.etudiantService.createDialog;
   }
  set createEtudiantDialog(value: boolean) {
       this.etudiantService.createDialog= value;
   }
   get statutFreeTrial(): StatutFreeTrialDto {
       return this.statutFreeTrialService.item;
   }
  set statutFreeTrial(value: StatutFreeTrialDto) {
        this.statutFreeTrialService.item = value;
   }
   get statutFreeTrials(): Array<StatutFreeTrialDto> {
        return this.statutFreeTrialService.items;
   }
   set statutFreeTrials(value: Array<StatutFreeTrialDto>) {
        this.statutFreeTrialService.items = value;
   }
   get createStatutFreeTrialDialog(): boolean {
       return this.statutFreeTrialService.createDialog;
   }
  set createStatutFreeTrialDialog(value: boolean) {
       this.statutFreeTrialService.createDialog= value;
   }
   get freeTrialTeacherEmailTemplate(): FreeTrialTeacherEmailTemplateDto {
       return this.freeTrialTeacherEmailTemplateService.item;
   }
  set freeTrialTeacherEmailTemplate(value: FreeTrialTeacherEmailTemplateDto) {
        this.freeTrialTeacherEmailTemplateService.item = value;
   }
   get freeTrialTeacherEmailTemplates(): Array<FreeTrialTeacherEmailTemplateDto> {
        return this.freeTrialTeacherEmailTemplateService.items;
   }
   set freeTrialTeacherEmailTemplates(value: Array<FreeTrialTeacherEmailTemplateDto>) {
        this.freeTrialTeacherEmailTemplateService.items = value;
   }
   get createFreeTrialTeacherEmailTemplateDialog(): boolean {
       return this.freeTrialTeacherEmailTemplateService.createDialog;
   }
  set createFreeTrialTeacherEmailTemplateDialog(value: boolean) {
       this.freeTrialTeacherEmailTemplateService.createDialog= value;
   }

    get freeTrialDetailsElement(): FreeTrialDetailDto {
        if( this._freeTrialDetailsElement == null )
            this._freeTrialDetailsElement = new FreeTrialDetailDto();
         return this._freeTrialDetailsElement;
    }

    set freeTrialDetailsElement(value: FreeTrialDetailDto) {
        this._freeTrialDetailsElement = value;
    }

    get validFreeTrialReference(): boolean {
        return this._validFreeTrialReference;
    }
    set validFreeTrialReference(value: boolean) {
        this._validFreeTrialReference = value;
    }

    get validProfRef(): boolean {
        return this._validProfRef;
    }
    set validProfRef(value: boolean) {
        this._validProfRef = value;
    }
    get validNiveauEtudeLibelle(): boolean {
        return this._validNiveauEtudeLibelle;
    }
    set validNiveauEtudeLibelle(value: boolean) {
        this._validNiveauEtudeLibelle = value;
    }
    get validNiveauEtudeCode(): boolean {
        return this._validNiveauEtudeCode;
    }
    set validNiveauEtudeCode(value: boolean) {
        this._validNiveauEtudeCode = value;
    }
    get validStatutFreeTrialLibelle(): boolean {
        return this._validStatutFreeTrialLibelle;
    }
    set validStatutFreeTrialLibelle(value: boolean) {
        this._validStatutFreeTrialLibelle = value;
    }
    get validStatutFreeTrialCode(): boolean {
        return this._validStatutFreeTrialCode;
    }
    set validStatutFreeTrialCode(value: boolean) {
        this._validStatutFreeTrialCode = value;
    }
}
