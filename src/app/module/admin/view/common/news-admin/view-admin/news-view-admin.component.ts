import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {NewsService} from 'src/app/controller/service/News.service';
import {NewsDto} from 'src/app/controller/model/News.model';
import {NewsCriteria} from 'src/app/controller/criteria/NewsCriteria.model';

@Component({
  selector: 'app-news-view-admin',
  templateUrl: './news-view-admin.component.html'
})
export class NewsViewAdminComponent extends AbstractViewController<NewsDto, NewsCriteria, NewsService> implements OnInit {


    constructor(private datePipe: DatePipe, private newsService: NewsService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, newsService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
