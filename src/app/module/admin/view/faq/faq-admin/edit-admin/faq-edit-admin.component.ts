import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {FaqService} from 'src/app/controller/service/Faq.service';
import {FaqDto} from 'src/app/controller/model/Faq.model';
import {FaqCriteria} from 'src/app/controller/criteria/FaqCriteria.model';


import {FaqTypeDto} from 'src/app/controller/model/FaqType.model';
import {FaqTypeService} from 'src/app/controller/service/FaqType.service';

@Component({
  selector: 'app-faq-edit-admin',
  templateUrl: './faq-edit-admin.component.html'
})
export class FaqEditAdminComponent extends AbstractEditController<FaqDto, FaqCriteria, FaqService>   implements OnInit {


    private _validFaqLibelle = true;

    private _validFaqTypeLibelle = true;



    constructor(private datePipe: DatePipe, private faqService: FaqService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private faqTypeService: FaqTypeService
    ) {
        super(datePipe, faqService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.faqType = new FaqTypeDto();
    this.faqTypeService.findAll().subscribe((data) => this.faqTypes = data);
}

    public setValidation(value : boolean){
        this.validFaqLibelle = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateFaqLibelle();
    }
    public validateFaqLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validFaqLibelle = false;
        } else {
            this.validFaqLibelle = true;
        }
    }



   public async openCreateFaqType(faqType: string) {
        const isPermistted = await this.roleService.isPermitted('FaqType', 'edit');
        if(isPermistted) {
             this.faqType = new FaqTypeDto();
             this.createFaqTypeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get faqType(): FaqTypeDto {
       return this.faqTypeService.item;
   }
  set faqType(value: FaqTypeDto) {
        this.faqTypeService.item = value;
   }
   get faqTypes(): Array<FaqTypeDto> {
        return this.faqTypeService.items;
   }
   set faqTypes(value: Array<FaqTypeDto>) {
        this.faqTypeService.items = value;
   }
   get createFaqTypeDialog(): boolean {
       return this.faqTypeService.createDialog;
   }
  set createFaqTypeDialog(value: boolean) {
       this.faqTypeService.createDialog= value;
   }


    get validFaqLibelle(): boolean {
        return this._validFaqLibelle;
    }
    set validFaqLibelle(value: boolean) {
        this._validFaqLibelle = value;
    }

    get validFaqTypeLibelle(): boolean {
        return this._validFaqTypeLibelle;
    }
    set validFaqTypeLibelle(value: boolean) {
        this._validFaqTypeLibelle = value;
    }
}
