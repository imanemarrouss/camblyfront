import {Component, OnInit} from '@angular/core';
import {NewsService} from 'src/app/controller/service/News.service';
import {NewsDto} from 'src/app/controller/model/News.model';
import {NewsCriteria} from 'src/app/controller/criteria/NewsCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-news-list-admin',
  templateUrl: './news-list-admin.component.html'
})
export class NewsListAdminComponent extends AbstractListController<NewsDto, NewsCriteria, NewsService>  implements OnInit {

    fileName = 'News';

  
    constructor(datePipe: DatePipe, newsService: NewsService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, newsService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadNewss(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('News', 'list');
        isPermistted ? this.service.findAll().subscribe(newss => this.items = newss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'image', header: 'Image'},
            {field: 'dateNews', header: 'Date news'},
            {field: 'dateDebut', header: 'Date debut'},
            {field: 'dateFin', header: 'Date fin'},
            {field: 'numeroOrdre', header: 'Numero ordre'},
            {field: 'destinataire', header: 'Destinataire'},
        ];
    }



	public initDuplicate(res: NewsDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Libelle': e.libelle ,
                 'Image': e.image ,
                 'Description': e.description ,
                'Date news': this.datePipe.transform(e.dateNews , 'dd/MM/yyyy hh:mm'),
                'Date debut': this.datePipe.transform(e.dateDebut , 'dd/MM/yyyy hh:mm'),
                'Date fin': this.datePipe.transform(e.dateFin , 'dd/MM/yyyy hh:mm'),
                 'Numero ordre': e.numeroOrdre ,
                 'Destinataire': e.destinataire ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Image': this.criteria.image ? this.criteria.image : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Date news Min': this.criteria.dateNewsFrom ? this.datePipe.transform(this.criteria.dateNewsFrom , this.dateFormat) : environment.emptyForExport ,
            'Date news Max': this.criteria.dateNewsTo ? this.datePipe.transform(this.criteria.dateNewsTo , this.dateFormat) : environment.emptyForExport ,
            'Date debut Min': this.criteria.dateDebutFrom ? this.datePipe.transform(this.criteria.dateDebutFrom , this.dateFormat) : environment.emptyForExport ,
            'Date debut Max': this.criteria.dateDebutTo ? this.datePipe.transform(this.criteria.dateDebutTo , this.dateFormat) : environment.emptyForExport ,
            'Date fin Min': this.criteria.dateFinFrom ? this.datePipe.transform(this.criteria.dateFinFrom , this.dateFormat) : environment.emptyForExport ,
            'Date fin Max': this.criteria.dateFinTo ? this.datePipe.transform(this.criteria.dateFinTo , this.dateFormat) : environment.emptyForExport ,
            'Numero ordre Min': this.criteria.numeroOrdreMin ? this.criteria.numeroOrdreMin : environment.emptyForExport ,
            'Numero ordre Max': this.criteria.numeroOrdreMax ? this.criteria.numeroOrdreMax : environment.emptyForExport ,
            'Destinataire': this.criteria.destinataire ? this.criteria.destinataire : environment.emptyForExport ,
        }];
      }
}
