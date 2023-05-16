import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {GroupeEtudiantService} from 'src/app/controller/service/GroupeEtudiant.service';
import {GroupeEtudiantDto} from 'src/app/controller/model/GroupeEtudiant.model';
import {GroupeEtudiantCriteria} from 'src/app/controller/criteria/GroupeEtudiantCriteria.model';
import {GroupeEtudiantDetailDto} from 'src/app/controller/model/GroupeEtudiantDetail.model';
import {GroupeEtudiantDetailService} from 'src/app/controller/service/GroupeEtudiantDetail.service';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {GroupeEtudeDto} from 'src/app/controller/model/GroupeEtude.model';
import {GroupeEtudeService} from 'src/app/controller/service/GroupeEtude.service';
import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {ParcoursService} from 'src/app/controller/service/Parcours.service';
@Component({
  selector: 'app-groupe-etudiant-create-admin',
  templateUrl: './groupe-etudiant-create-admin.component.html'
})
export class GroupeEtudiantCreateAdminComponent extends AbstractCreateController<GroupeEtudiantDto, GroupeEtudiantCriteria, GroupeEtudiantService>  implements OnInit {

    private _groupeEtudiantDetailsElement = new GroupeEtudiantDetailDto();


    private _validGroupeEtudeLibelle = true;
    private _validParcoursCode = true;
    private _validParcoursLibelle = true;
    private _validProfRef = true;
    private _groupeEtudiantDetails: Array<GroupeEtudiantDetailDto> = [];

    constructor(private datePipe: DatePipe, private groupeEtudiantService: GroupeEtudiantService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  
, private groupeEtudiantDetailService: GroupeEtudiantDetailService, private profService: ProfService, private etudiantService: EtudiantService, private groupeEtudeService: GroupeEtudeService, private parcoursService: ParcoursService
    ) {
        super(datePipe, groupeEtudiantService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.etudiantService.findAll().subscribe(data => this.prepareGroupeEtudiantDetails(data));
        this.groupeEtudiantDetailsElement.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
    this.groupeEtude = new GroupeEtudeDto();
    this.groupeEtudeService.findAll().subscribe((data) => this.groupeEtudes = data);
    this.parcours = new ParcoursDto();
    this.parcoursService.findAll().subscribe((data) => this.parcourss = data);
    this.prof = new ProfDto();
    this.profService.findAll().subscribe((data) => this.profs = data);
}


     prepareGroupeEtudiantDetails(etudiants: Array<EtudiantDto>): void{
        if( etudiants != null){
                etudiants.forEach(e => {
                const groupeEtudiantDetail = new GroupeEtudiantDetailDto();
                groupeEtudiantDetail.etudiant = e;
                this.groupeEtudiantDetails.push(groupeEtudiantDetail);
            });
        }
    }



    public setValidation(value: boolean){
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



    public async openCreateEtudiant(etudiant: string) {
    const isPermistted = await this.roleService.isPermitted('Etudiant', 'add');
    if(isPermistted) {
         this.etudiant = new EtudiantDto();
         this.createEtudiantDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateGroupeEtude(groupeEtude: string) {
    const isPermistted = await this.roleService.isPermitted('GroupeEtude', 'add');
    if(isPermistted) {
         this.groupeEtude = new GroupeEtudeDto();
         this.createGroupeEtudeDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
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
    get parcours(): ParcoursDto {
        return this.parcoursService.item;
    }
    set parcours(value: ParcoursDto) {
        this.parcoursService.item = value;
    }
    get parcourss(): Array<ParcoursDto> {
        return this.parcoursService.items;
    }
    set parcourss(value: Array<ParcoursDto>) {
        this.parcoursService.items = value;
    }
    get createParcoursDialog(): boolean {
       return this.parcoursService.createDialog;
    }
    set createParcoursDialog(value: boolean) {
        this.parcoursService.createDialog= value;
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
    get groupeEtude(): GroupeEtudeDto {
        return this.groupeEtudeService.item;
    }
    set groupeEtude(value: GroupeEtudeDto) {
        this.groupeEtudeService.item = value;
    }
    get groupeEtudes(): Array<GroupeEtudeDto> {
        return this.groupeEtudeService.items;
    }
    set groupeEtudes(value: Array<GroupeEtudeDto>) {
        this.groupeEtudeService.items = value;
    }
    get createGroupeEtudeDialog(): boolean {
       return this.groupeEtudeService.createDialog;
    }
    set createGroupeEtudeDialog(value: boolean) {
        this.groupeEtudeService.createDialog= value;
    }

    get groupeEtudiantDetails(): Array<GroupeEtudiantDetailDto> {
        if( this._groupeEtudiantDetails == null )
            this._groupeEtudiantDetails = new Array();
        return this._groupeEtudiantDetails;
    }

    set groupeEtudiantDetails(value: Array<GroupeEtudiantDetailDto>) {
        this._groupeEtudiantDetails = value;
    }



    get validGroupeEtudeLibelle(): boolean {
        return this._validGroupeEtudeLibelle;
    }
    set validGroupeEtudeLibelle(value: boolean) {
        this._validGroupeEtudeLibelle = value;
    }
    get validParcoursCode(): boolean {
        return this._validParcoursCode;
    }
    set validParcoursCode(value: boolean) {
        this._validParcoursCode = value;
    }
    get validParcoursLibelle(): boolean {
        return this._validParcoursLibelle;
    }
    set validParcoursLibelle(value: boolean) {
        this._validParcoursLibelle = value;
    }
    get validProfRef(): boolean {
        return this._validProfRef;
    }
    set validProfRef(value: boolean) {
        this._validProfRef = value;
    }

    get groupeEtudiantDetailsElement(): GroupeEtudiantDetailDto {
        if( this._groupeEtudiantDetailsElement == null )
            this._groupeEtudiantDetailsElement = new GroupeEtudiantDetailDto();
        return this._groupeEtudiantDetailsElement;
    }

    set groupeEtudiantDetailsElement(value: GroupeEtudiantDetailDto) {
        this._groupeEtudiantDetailsElement = value;
    }

}
