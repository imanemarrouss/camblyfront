import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {SectionItemService} from 'src/app/controller/service/SectionItem.service';
import {SectionItemDto} from 'src/app/controller/model/SectionItem.model';
import {SectionItemCriteria} from 'src/app/controller/criteria/SectionItemCriteria.model';


import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';

@Component({
  selector: 'app-section-item-edit-admin',
  templateUrl: './section-item-edit-admin.component.html'
})
export class SectionItemEditAdminComponent extends AbstractEditController<SectionItemDto, SectionItemCriteria, SectionItemService>   implements OnInit {



    private _validSectionCode = true;



    constructor(private datePipe: DatePipe, private sectionItemService: SectionItemService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private sectionService: SectionService
    ) {
        super(datePipe, sectionItemService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.section = new SectionDto();
    this.sectionService.findAll().subscribe((data) => this.sections = data);
}

    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



   public async openCreateSection(section: string) {
        const isPermistted = await this.roleService.isPermitted('Section', 'edit');
        if(isPermistted) {
             this.section = new SectionDto();
             this.createSectionDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get section(): SectionDto {
       return this.sectionService.item;
   }
  set section(value: SectionDto) {
        this.sectionService.item = value;
   }
   get sections(): Array<SectionDto> {
        return this.sectionService.items;
   }
   set sections(value: Array<SectionDto>) {
        this.sectionService.items = value;
   }
   get createSectionDialog(): boolean {
       return this.sectionService.createDialog;
   }
  set createSectionDialog(value: boolean) {
       this.sectionService.createDialog= value;
   }



    get validSectionCode(): boolean {
        return this._validSectionCode;
    }
    set validSectionCode(value: boolean) {
        this._validSectionCode = value;
    }
}
