import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {LevelTestConfigurationService} from 'src/app/controller/service/LevelTestConfiguration.service';
import {LevelTestConfigurationDto} from 'src/app/controller/model/LevelTestConfiguration.model';
import {LevelTestConfigurationCriteria} from 'src/app/controller/criteria/LevelTestConfigurationCriteria.model';


import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {ParcoursService} from 'src/app/controller/service/Parcours.service';

@Component({
  selector: 'app-level-test-configuration-edit-admin',
  templateUrl: './level-test-configuration-edit-admin.component.html'
})
export class LevelTestConfigurationEditAdminComponent extends AbstractEditController<LevelTestConfigurationDto, LevelTestConfigurationCriteria, LevelTestConfigurationService>   implements OnInit {



    private _validParcoursCode = true;
    private _validParcoursLibelle = true;



    constructor(private datePipe: DatePipe, private levelTestConfigurationService: LevelTestConfigurationService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private parcoursService: ParcoursService
    ) {
        super(datePipe, levelTestConfigurationService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.parcours = new ParcoursDto();
    this.parcoursService.findAll().subscribe((data) => this.parcourss = data);
}

    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



   public async openCreateParcours(parcours: string) {
        const isPermistted = await this.roleService.isPermitted('Parcours', 'edit');
        if(isPermistted) {
             this.parcours = new ParcoursDto();
             this.createParcoursDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
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
}
