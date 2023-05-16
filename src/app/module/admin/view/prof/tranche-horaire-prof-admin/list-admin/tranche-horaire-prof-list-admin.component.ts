import {Component, OnInit} from '@angular/core';
import {TrancheHoraireProfService} from 'src/app/controller/service/TrancheHoraireProf.service';
import {TrancheHoraireProfDto} from 'src/app/controller/model/TrancheHoraireProf.model';
import {TrancheHoraireProfCriteria} from 'src/app/controller/criteria/TrancheHoraireProfCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { ProfService } from 'src/app/controller/service/Prof.service';

import {ProfDto} from 'src/app/controller/model/Prof.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-tranche-horaire-prof-list-admin',
  templateUrl: './tranche-horaire-prof-list-admin.component.html'
})
export class TrancheHoraireProfListAdminComponent extends AbstractListController<TrancheHoraireProfDto, TrancheHoraireProfCriteria, TrancheHoraireProfService>  implements OnInit {

    fileName = 'TrancheHoraireProf';

    profs :Array<ProfDto>;
  
    constructor(datePipe: DatePipe, trancheHoraireProfService: TrancheHoraireProfService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private profService: ProfService) {
        super(datePipe, trancheHoraireProfService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadProf();
    }

    public async loadTrancheHoraireProfs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TrancheHoraireProf', 'list');
        isPermistted ? this.service.findAll().subscribe(trancheHoraireProfs => this.items = trancheHoraireProfs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'startHour', header: 'Start hour'},
            {field: 'endHour', header: 'End hour'},
            {field: 'day', header: 'Day'},
            {field: 'groupIndex', header: 'Group index'},
            {field: 'profsId', header: 'Profs id'},
        ];
    }


    public async loadProf(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TrancheHoraireProf', 'list');
        isPermistted ? this.profService.findAllOptimized().subscribe(profs => this.profs = profs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: TrancheHoraireProfDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Prof': e.prof?.ref ,
                 'Start hour': e.startHour ,
                 'End hour': e.endHour ,
                 'Day': e.day ,
                 'Group index': e.groupIndex ,
                 'Profs id': e.profsId ,
            }
        });

        this.criteriaData = [{
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
            'Start hour': this.criteria.startHour ? this.criteria.startHour : environment.emptyForExport ,
            'End hour': this.criteria.endHour ? this.criteria.endHour : environment.emptyForExport ,
            'Day Min': this.criteria.dayMin ? this.criteria.dayMin : environment.emptyForExport ,
            'Day Max': this.criteria.dayMax ? this.criteria.dayMax : environment.emptyForExport ,
            'Group index Min': this.criteria.groupIndexMin ? this.criteria.groupIndexMin : environment.emptyForExport ,
            'Group index Max': this.criteria.groupIndexMax ? this.criteria.groupIndexMax : environment.emptyForExport ,
            'Profs id Min': this.criteria.profsIdMin ? this.criteria.profsIdMin : environment.emptyForExport ,
            'Profs id Max': this.criteria.profsIdMax ? this.criteria.profsIdMax : environment.emptyForExport ,
        }];
      }
}
