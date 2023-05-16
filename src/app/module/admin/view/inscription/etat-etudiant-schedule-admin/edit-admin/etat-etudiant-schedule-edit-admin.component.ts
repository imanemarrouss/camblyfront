import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {EtatEtudiantScheduleService} from 'src/app/controller/service/EtatEtudiantSchedule.service';
import {EtatEtudiantScheduleDto} from 'src/app/controller/model/EtatEtudiantSchedule.model';
import {EtatEtudiantScheduleCriteria} from 'src/app/controller/criteria/EtatEtudiantScheduleCriteria.model';



@Component({
  selector: 'app-etat-etudiant-schedule-edit-admin',
  templateUrl: './etat-etudiant-schedule-edit-admin.component.html'
})
export class EtatEtudiantScheduleEditAdminComponent extends AbstractEditController<EtatEtudiantScheduleDto, EtatEtudiantScheduleCriteria, EtatEtudiantScheduleService>   implements OnInit {


    private _validEtatEtudiantScheduleRef = true;




    constructor(private datePipe: DatePipe, private etatEtudiantScheduleService: EtatEtudiantScheduleService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, etatEtudiantScheduleService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}

    public setValidation(value : boolean){
        this.validEtatEtudiantScheduleRef = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEtatEtudiantScheduleRef();
    }
    public validateEtatEtudiantScheduleRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validEtatEtudiantScheduleRef = false;
        } else {
            this.validEtatEtudiantScheduleRef = true;
        }
    }






    get validEtatEtudiantScheduleRef(): boolean {
        return this._validEtatEtudiantScheduleRef;
    }
    set validEtatEtudiantScheduleRef(value: boolean) {
        this._validEtatEtudiantScheduleRef = value;
    }

}
