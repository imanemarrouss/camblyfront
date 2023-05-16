import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
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
  selector: 'app-groupe-etudiant-view-admin',
  templateUrl: './groupe-etudiant-view-admin.component.html'
})
export class GroupeEtudiantViewAdminComponent extends AbstractViewController<GroupeEtudiantDto, GroupeEtudiantCriteria, GroupeEtudiantService> implements OnInit {

    groupeEtudiantDetails = new GroupeEtudiantDetailDto();
    groupeEtudiantDetailss: Array<GroupeEtudiantDetailDto> = [];

    constructor(private datePipe: DatePipe, private groupeEtudiantService: GroupeEtudiantService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private groupeEtudiantDetailService: GroupeEtudiantDetailService, private profService: ProfService, private etudiantService: EtudiantService, private groupeEtudeService: GroupeEtudeService, private parcoursService: ParcoursService
    ){
        super(datePipe, groupeEtudiantService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.groupeEtudiantDetails.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
        this.groupeEtude = new GroupeEtudeDto();
        this.groupeEtudeService.findAll().subscribe((data) => this.groupeEtudes = data);
        this.parcours = new ParcoursDto();
        this.parcoursService.findAll().subscribe((data) => this.parcourss = data);
        this.prof = new ProfDto();
        this.profService.findAll().subscribe((data) => this.profs = data);
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
