import {Component, OnInit} from '@angular/core';
import {ContactService} from 'src/app/controller/service/Contact.service';
import {ContactDto} from 'src/app/controller/model/Contact.model';
import {ContactCriteria} from 'src/app/controller/criteria/ContactCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-contact-list-admin',
  templateUrl: './contact-list-admin.component.html'
})
export class ContactListAdminComponent extends AbstractListController<ContactDto, ContactCriteria, ContactService>  implements OnInit {

    fileName = 'Contact';

     yesOrNoReplied :any[] =[];
  
    constructor(datePipe: DatePipe, contactService: ContactService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, contactService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    this.yesOrNoReplied =  [{label: 'Replied', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }

    public async loadContacts(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Contact', 'list');
        isPermistted ? this.service.findAll().subscribe(contacts => this.items = contacts,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'name', header: 'Name'},
            {field: 'email', header: 'Email'},
            {field: 'phone', header: 'Phone'},
            {field: 'setFrom', header: 'Set from'},
            {field: 'dateContact', header: 'Date contact'},
            {field: 'replied', header: 'Replied'},
        ];
    }



	public initDuplicate(res: ContactDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Name': e.name ,
                 'Email': e.email ,
                 'Phone': e.phone ,
                 'Set from': e.setFrom ,
                'Date contact': this.datePipe.transform(e.dateContact , 'dd/MM/yyyy hh:mm'),
                'Replied': e.replied? 'Vrai' : 'Faux' ,
                 'Message': e.message ,
            }
        });

        this.criteriaData = [{
            'Name': this.criteria.name ? this.criteria.name : environment.emptyForExport ,
            'Email': this.criteria.email ? this.criteria.email : environment.emptyForExport ,
            'Phone': this.criteria.phone ? this.criteria.phone : environment.emptyForExport ,
            'Set from': this.criteria.setFrom ? this.criteria.setFrom : environment.emptyForExport ,
            'Date contact Min': this.criteria.dateContactFrom ? this.datePipe.transform(this.criteria.dateContactFrom , this.dateFormat) : environment.emptyForExport ,
            'Date contact Max': this.criteria.dateContactTo ? this.datePipe.transform(this.criteria.dateContactTo , this.dateFormat) : environment.emptyForExport ,
            'Replied': this.criteria.replied ? (this.criteria.replied ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Message': this.criteria.message ? this.criteria.message : environment.emptyForExport ,
        }];
      }
}
