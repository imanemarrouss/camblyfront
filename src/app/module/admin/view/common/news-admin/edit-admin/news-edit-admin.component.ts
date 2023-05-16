import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {NewsService} from 'src/app/controller/service/News.service';
import {NewsDto} from 'src/app/controller/model/News.model';
import {NewsCriteria} from 'src/app/controller/criteria/NewsCriteria.model';



@Component({
  selector: 'app-news-edit-admin',
  templateUrl: './news-edit-admin.component.html'
})
export class NewsEditAdminComponent extends AbstractEditController<NewsDto, NewsCriteria, NewsService>   implements OnInit {


    private _validNewsRef = true;




    constructor(private datePipe: DatePipe, private newsService: NewsService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, newsService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}

    public setValidation(value : boolean){
        this.validNewsRef = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateNewsRef();
    }
    public validateNewsRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validNewsRef = false;
        } else {
            this.validNewsRef = true;
        }
    }






    get validNewsRef(): boolean {
        return this._validNewsRef;
    }
    set validNewsRef(value: boolean) {
        this._validNewsRef = value;
    }

}
