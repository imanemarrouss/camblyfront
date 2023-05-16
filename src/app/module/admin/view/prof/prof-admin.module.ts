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

import { TypeTeacherCreateAdminComponent } from './type-teacher-admin/create-admin/type-teacher-create-admin.component';
import { TypeTeacherEditAdminComponent } from './type-teacher-admin/edit-admin/type-teacher-edit-admin.component';
import { TypeTeacherViewAdminComponent } from './type-teacher-admin/view-admin/type-teacher-view-admin.component';
import { TypeTeacherListAdminComponent } from './type-teacher-admin/list-admin/type-teacher-list-admin.component';
import { TrancheHoraireProfCreateAdminComponent } from './tranche-horaire-prof-admin/create-admin/tranche-horaire-prof-create-admin.component';
import { TrancheHoraireProfEditAdminComponent } from './tranche-horaire-prof-admin/edit-admin/tranche-horaire-prof-edit-admin.component';
import { TrancheHoraireProfViewAdminComponent } from './tranche-horaire-prof-admin/view-admin/tranche-horaire-prof-view-admin.component';
import { TrancheHoraireProfListAdminComponent } from './tranche-horaire-prof-admin/list-admin/tranche-horaire-prof-list-admin.component';
import { CalendrierProfCreateAdminComponent } from './calendrier-prof-admin/create-admin/calendrier-prof-create-admin.component';
import { CalendrierProfEditAdminComponent } from './calendrier-prof-admin/edit-admin/calendrier-prof-edit-admin.component';
import { CalendrierProfViewAdminComponent } from './calendrier-prof-admin/view-admin/calendrier-prof-view-admin.component';
import { CalendrierProfListAdminComponent } from './calendrier-prof-admin/list-admin/calendrier-prof-list-admin.component';
import { CategorieProfCreateAdminComponent } from './categorie-prof-admin/create-admin/categorie-prof-create-admin.component';
import { CategorieProfEditAdminComponent } from './categorie-prof-admin/edit-admin/categorie-prof-edit-admin.component';
import { CategorieProfViewAdminComponent } from './categorie-prof-admin/view-admin/categorie-prof-view-admin.component';
import { CategorieProfListAdminComponent } from './categorie-prof-admin/list-admin/categorie-prof-list-admin.component';
import { ProfCreateAdminComponent } from './prof-admin/create-admin/prof-create-admin.component';
import { ProfEditAdminComponent } from './prof-admin/edit-admin/prof-edit-admin.component';
import { ProfViewAdminComponent } from './prof-admin/view-admin/prof-view-admin.component';
import { ProfListAdminComponent } from './prof-admin/list-admin/prof-list-admin.component';
import { ClassAverageBonusProfCreateAdminComponent } from './class-average-bonus-prof-admin/create-admin/class-average-bonus-prof-create-admin.component';
import { ClassAverageBonusProfEditAdminComponent } from './class-average-bonus-prof-admin/edit-admin/class-average-bonus-prof-edit-admin.component';
import { ClassAverageBonusProfViewAdminComponent } from './class-average-bonus-prof-admin/view-admin/class-average-bonus-prof-view-admin.component';
import { ClassAverageBonusProfListAdminComponent } from './class-average-bonus-prof-admin/list-admin/class-average-bonus-prof-list-admin.component';
import { ScheduleProfCreateAdminComponent } from './schedule-prof-admin/create-admin/schedule-prof-create-admin.component';
import { ScheduleProfEditAdminComponent } from './schedule-prof-admin/edit-admin/schedule-prof-edit-admin.component';
import { ScheduleProfViewAdminComponent } from './schedule-prof-admin/view-admin/schedule-prof-view-admin.component';
import { ScheduleProfListAdminComponent } from './schedule-prof-admin/list-admin/schedule-prof-list-admin.component';

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

    TypeTeacherCreateAdminComponent,
    TypeTeacherListAdminComponent,
    TypeTeacherViewAdminComponent,
    TypeTeacherEditAdminComponent,
    TrancheHoraireProfCreateAdminComponent,
    TrancheHoraireProfListAdminComponent,
    TrancheHoraireProfViewAdminComponent,
    TrancheHoraireProfEditAdminComponent,
    CalendrierProfCreateAdminComponent,
    CalendrierProfListAdminComponent,
    CalendrierProfViewAdminComponent,
    CalendrierProfEditAdminComponent,
    CategorieProfCreateAdminComponent,
    CategorieProfListAdminComponent,
    CategorieProfViewAdminComponent,
    CategorieProfEditAdminComponent,
    ProfCreateAdminComponent,
    ProfListAdminComponent,
    ProfViewAdminComponent,
    ProfEditAdminComponent,
    ClassAverageBonusProfCreateAdminComponent,
    ClassAverageBonusProfListAdminComponent,
    ClassAverageBonusProfViewAdminComponent,
    ClassAverageBonusProfEditAdminComponent,
    ScheduleProfCreateAdminComponent,
    ScheduleProfListAdminComponent,
    ScheduleProfViewAdminComponent,
    ScheduleProfEditAdminComponent,
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
  TypeTeacherCreateAdminComponent,
  TypeTeacherListAdminComponent,
  TypeTeacherViewAdminComponent,
  TypeTeacherEditAdminComponent,
  TrancheHoraireProfCreateAdminComponent,
  TrancheHoraireProfListAdminComponent,
  TrancheHoraireProfViewAdminComponent,
  TrancheHoraireProfEditAdminComponent,
  CalendrierProfCreateAdminComponent,
  CalendrierProfListAdminComponent,
  CalendrierProfViewAdminComponent,
  CalendrierProfEditAdminComponent,
  CategorieProfCreateAdminComponent,
  CategorieProfListAdminComponent,
  CategorieProfViewAdminComponent,
  CategorieProfEditAdminComponent,
  ProfCreateAdminComponent,
  ProfListAdminComponent,
  ProfViewAdminComponent,
  ProfEditAdminComponent,
  ClassAverageBonusProfCreateAdminComponent,
  ClassAverageBonusProfListAdminComponent,
  ClassAverageBonusProfViewAdminComponent,
  ClassAverageBonusProfEditAdminComponent,
  ScheduleProfCreateAdminComponent,
  ScheduleProfListAdminComponent,
  ScheduleProfViewAdminComponent,
  ScheduleProfEditAdminComponent,
  ],
  entryComponents: [],
})
export class ProfAdminModule { }