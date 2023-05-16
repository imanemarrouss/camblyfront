import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {GroupeEtudeService} from 'src/app/controller/service/GroupeEtude.service';
import {GroupeEtudeDto} from 'src/app/controller/model/GroupeEtude.model';
import {GroupeEtudeCriteria} from 'src/app/controller/criteria/GroupeEtudeCriteria.model';



@Component({
  selector: 'app-groupe-etude-edit-admin',
  templateUrl: './groupe-etude-edit-admin.component.html'
})
export class GroupeEtudeEditAdminComponent extends AbstractEditController<GroupeEtudeDto, GroupeEtudeCriteria, GroupeEtudeService>   implements OnInit {


    private _validGroupeEtudeLibelle = true;




    constructor(private datePipe: DatePipe, private groupeEtudeService: GroupeEtudeService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, groupeEtudeService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}

    public setValidation(value : boolean){
        this.validGroupeEtudeLibelle = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateGroupeEtudeLibelle();
    }
    public validateGroupeEtudeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validGroupeEtudeLibelle = false;
        } else {
            this.validGroupeEtudeLibelle = true;
        }
    }






    get validGroupeEtudeLibelle(): boolean {
        return this._validGroupeEtudeLibelle;
    }
    set validGroupeEtudeLibelle(value: boolean) {
        this._validGroupeEtudeLibelle = value;
    }

}
