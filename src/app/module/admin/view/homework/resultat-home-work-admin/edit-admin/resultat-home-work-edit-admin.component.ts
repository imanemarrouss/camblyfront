import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {ResultatHomeWorkService} from 'src/app/controller/service/ResultatHomeWork.service';
import {ResultatHomeWorkDto} from 'src/app/controller/model/ResultatHomeWork.model';
import {ResultatHomeWorkCriteria} from 'src/app/controller/criteria/ResultatHomeWorkCriteria.model';



@Component({
  selector: 'app-resultat-home-work-edit-admin',
  templateUrl: './resultat-home-work-edit-admin.component.html'
})
export class ResultatHomeWorkEditAdminComponent extends AbstractEditController<ResultatHomeWorkDto, ResultatHomeWorkCriteria, ResultatHomeWorkService>   implements OnInit {


    private _validResultatHomeWorkLibelle = true;
    private _validResultatHomeWorkCode = true;




    constructor(private datePipe: DatePipe, private resultatHomeWorkService: ResultatHomeWorkService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, resultatHomeWorkService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}

    public setValidation(value : boolean){
        this.validResultatHomeWorkLibelle = value;
        this.validResultatHomeWorkCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateResultatHomeWorkLibelle();
        this.validateResultatHomeWorkCode();
    }
    public validateResultatHomeWorkLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validResultatHomeWorkLibelle = false;
        } else {
            this.validResultatHomeWorkLibelle = true;
        }
    }
    public validateResultatHomeWorkCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validResultatHomeWorkCode = false;
        } else {
            this.validResultatHomeWorkCode = true;
        }
    }






    get validResultatHomeWorkLibelle(): boolean {
        return this._validResultatHomeWorkLibelle;
    }
    set validResultatHomeWorkLibelle(value: boolean) {
        this._validResultatHomeWorkLibelle = value;
    }
    get validResultatHomeWorkCode(): boolean {
        return this._validResultatHomeWorkCode;
    }
    set validResultatHomeWorkCode(value: boolean) {
        this._validResultatHomeWorkCode = value;
    }

}
