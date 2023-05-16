import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {EtatInscriptionService} from 'src/app/controller/service/EtatInscription.service';
import {EtatInscriptionDto} from 'src/app/controller/model/EtatInscription.model';
import {EtatInscriptionCriteria} from 'src/app/controller/criteria/EtatInscriptionCriteria.model';
@Component({
  selector: 'app-etat-inscription-create-admin',
  templateUrl: './etat-inscription-create-admin.component.html'
})
export class EtatInscriptionCreateAdminComponent extends AbstractCreateController<EtatInscriptionDto, EtatInscriptionCriteria, EtatInscriptionService>  implements OnInit {



   private _validEtatInscriptionRef = true;

    constructor(private datePipe: DatePipe, private etatInscriptionService: EtatInscriptionService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, etatInscriptionService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validEtatInscriptionRef = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEtatInscriptionRef();
    }

    public validateEtatInscriptionRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validEtatInscriptionRef = false;
        } else {
            this.validEtatInscriptionRef = true;
        }
    }






    get validEtatInscriptionRef(): boolean {
        return this._validEtatInscriptionRef;
    }

    set validEtatInscriptionRef(value: boolean) {
         this._validEtatInscriptionRef = value;
    }



}
