import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';

import { SalaryCreateAdminComponent } from './salary-admin/create-admin/salary-create-admin.component';
import { SalaryEditAdminComponent } from './salary-admin/edit-admin/salary-edit-admin.component';
import { SalaryViewAdminComponent } from './salary-admin/view-admin/salary-view-admin.component';
import { SalaryListAdminComponent } from './salary-admin/list-admin/salary-list-admin.component';
import { WorkloadBonusCreateAdminComponent } from './workload-bonus-admin/create-admin/workload-bonus-create-admin.component';
import { WorkloadBonusEditAdminComponent } from './workload-bonus-admin/edit-admin/workload-bonus-edit-admin.component';
import { WorkloadBonusViewAdminComponent } from './workload-bonus-admin/view-admin/workload-bonus-view-admin.component';
import { WorkloadBonusListAdminComponent } from './workload-bonus-admin/list-admin/workload-bonus-list-admin.component';
import { WorkloadBonusProfCreateAdminComponent } from './workload-bonus-prof-admin/create-admin/workload-bonus-prof-create-admin.component';
import { WorkloadBonusProfEditAdminComponent } from './workload-bonus-prof-admin/edit-admin/workload-bonus-prof-edit-admin.component';
import { WorkloadBonusProfViewAdminComponent } from './workload-bonus-prof-admin/view-admin/workload-bonus-prof-view-admin.component';
import { WorkloadBonusProfListAdminComponent } from './workload-bonus-prof-admin/list-admin/workload-bonus-prof-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    SalaryCreateAdminComponent,
    SalaryListAdminComponent,
    SalaryViewAdminComponent,
    SalaryEditAdminComponent,
    WorkloadBonusCreateAdminComponent,
    WorkloadBonusListAdminComponent,
    WorkloadBonusViewAdminComponent,
    WorkloadBonusEditAdminComponent,
    WorkloadBonusProfCreateAdminComponent,
    WorkloadBonusProfListAdminComponent,
    WorkloadBonusProfViewAdminComponent,
    WorkloadBonusProfEditAdminComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
    PaginatorModule,
    TranslateModule,
  ],
  exports: [
  SalaryCreateAdminComponent,
  SalaryListAdminComponent,
  SalaryViewAdminComponent,
  SalaryEditAdminComponent,
  WorkloadBonusCreateAdminComponent,
  WorkloadBonusListAdminComponent,
  WorkloadBonusViewAdminComponent,
  WorkloadBonusEditAdminComponent,
  WorkloadBonusProfCreateAdminComponent,
  WorkloadBonusProfListAdminComponent,
  WorkloadBonusProfViewAdminComponent,
  WorkloadBonusProfEditAdminComponent,
  ],
  entryComponents: [],
})
export class SalaryAdminModule { }