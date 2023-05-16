import {Component, OnInit} from '@angular/core';
import {SkillService} from 'src/app/controller/service/Skill.service';
import {SkillDto} from 'src/app/controller/model/Skill.model';
import {SkillCriteria} from 'src/app/controller/criteria/SkillCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-skill-list-admin',
  templateUrl: './skill-list-admin.component.html'
})
export class SkillListAdminComponent extends AbstractListController<SkillDto, SkillCriteria, SkillService>  implements OnInit {

    fileName = 'Skill';

  
    constructor(datePipe: DatePipe, skillService: SkillService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, skillService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadSkills(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Skill', 'list');
        isPermistted ? this.service.findAll().subscribe(skills => this.items = skills,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: SkillDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}
