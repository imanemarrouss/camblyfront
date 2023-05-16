import {Component, OnInit} from '@angular/core';
import {PriceService} from 'src/app/controller/service/Price.service';
import {PriceDto} from 'src/app/controller/model/Price.model';
import {PriceCriteria} from 'src/app/controller/criteria/PriceCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-price-list-admin',
  templateUrl: './price-list-admin.component.html'
})
export class PriceListAdminComponent extends AbstractListController<PriceDto, PriceCriteria, PriceService>  implements OnInit {

    fileName = 'Price';

     yesOrNoForGroup :any[] =[];
  
    constructor(datePipe: DatePipe, priceService: PriceService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, priceService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    this.yesOrNoForGroup =  [{label: 'ForGroup', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }

    public async loadPrices(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Price', 'list');
        isPermistted ? this.service.findAll().subscribe(prices => this.items = prices,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'price', header: 'Price'},
            {field: 'oldPrice', header: 'Old price'},
            {field: 'lib', header: 'Lib'},
            {field: 'nreCourse', header: 'Nre course'},
            {field: 'nreHours', header: 'Nre hours'},
            {field: 'nreMonth', header: 'Nre month'},
            {field: 'forGroup', header: 'For group'},
        ];
    }



	public initDuplicate(res: PriceDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Price': e.price ,
                 'Old price': e.oldPrice ,
                 'Lib': e.lib ,
                 'Nre course': e.nreCourse ,
                 'Nre hours': e.nreHours ,
                 'Nre month': e.nreMonth ,
                'For group': e.forGroup? 'Vrai' : 'Faux' ,
            }
        });

        this.criteriaData = [{
            'Price Min': this.criteria.priceMin ? this.criteria.priceMin : environment.emptyForExport ,
            'Price Max': this.criteria.priceMax ? this.criteria.priceMax : environment.emptyForExport ,
            'Old price Min': this.criteria.oldPriceMin ? this.criteria.oldPriceMin : environment.emptyForExport ,
            'Old price Max': this.criteria.oldPriceMax ? this.criteria.oldPriceMax : environment.emptyForExport ,
            'Lib': this.criteria.lib ? this.criteria.lib : environment.emptyForExport ,
            'Nre course Min': this.criteria.nreCourseMin ? this.criteria.nreCourseMin : environment.emptyForExport ,
            'Nre course Max': this.criteria.nreCourseMax ? this.criteria.nreCourseMax : environment.emptyForExport ,
            'Nre hours Min': this.criteria.nreHoursMin ? this.criteria.nreHoursMin : environment.emptyForExport ,
            'Nre hours Max': this.criteria.nreHoursMax ? this.criteria.nreHoursMax : environment.emptyForExport ,
            'Nre month Min': this.criteria.nreMonthMin ? this.criteria.nreMonthMin : environment.emptyForExport ,
            'Nre month Max': this.criteria.nreMonthMax ? this.criteria.nreMonthMax : environment.emptyForExport ,
            'For group': this.criteria.forGroup ? (this.criteria.forGroup ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
        }];
      }
}
