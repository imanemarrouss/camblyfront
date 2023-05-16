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

import { ReclamationProfCreateAdminComponent } from './reclamation-prof-admin/create-admin/reclamation-prof-create-admin.component';
import { ReclamationProfEditAdminComponent } from './reclamation-prof-admin/edit-admin/reclamation-prof-edit-admin.component';
import { ReclamationProfViewAdminComponent } from './reclamation-prof-admin/view-admin/reclamation-prof-view-admin.component';
import { ReclamationProfListAdminComponent } from './reclamation-prof-admin/list-admin/reclamation-prof-list-admin.component';
import { TypeReclamationEtudiantCreateAdminComponent } from './type-reclamation-etudiant-admin/create-admin/type-reclamation-etudiant-create-admin.component';
import { TypeReclamationEtudiantEditAdminComponent } from './type-reclamation-etudiant-admin/edit-admin/type-reclamation-etudiant-edit-admin.component';
import { TypeReclamationEtudiantViewAdminComponent } from './type-reclamation-etudiant-admin/view-admin/type-reclamation-etudiant-view-admin.component';
import { TypeReclamationEtudiantListAdminComponent } from './type-reclamation-etudiant-admin/list-admin/type-reclamation-etudiant-list-admin.component';
import { TypeReclamationProfCreateAdminComponent } from './type-reclamation-prof-admin/create-admin/type-reclamation-prof-create-admin.component';
import { TypeReclamationProfEditAdminComponent } from './type-reclamation-prof-admin/edit-admin/type-reclamation-prof-edit-admin.component';
import { TypeReclamationProfViewAdminComponent } from './type-reclamation-prof-admin/view-admin/type-reclamation-prof-view-admin.component';
import { TypeReclamationProfListAdminComponent } from './type-reclamation-prof-admin/list-admin/type-reclamation-prof-list-admin.component';
import { ReclamationEtudiantCreateAdminComponent } from './reclamation-etudiant-admin/create-admin/reclamation-etudiant-create-admin.component';
import { ReclamationEtudiantEditAdminComponent } from './reclamation-etudiant-admin/edit-admin/reclamation-etudiant-edit-admin.component';
import { ReclamationEtudiantViewAdminComponent } from './reclamation-etudiant-admin/view-admin/reclamation-etudiant-view-admin.component';
import { ReclamationEtudiantListAdminComponent } from './reclamation-etudiant-admin/list-admin/reclamation-etudiant-list-admin.component';
import { RecommendTeacherCreateAdminComponent } from './recommend-teacher-admin/create-admin/recommend-teacher-create-admin.component';
import { RecommendTeacherEditAdminComponent } from './recommend-teacher-admin/edit-admin/recommend-teacher-edit-admin.component';
import { RecommendTeacherViewAdminComponent } from './recommend-teacher-admin/view-admin/recommend-teacher-view-admin.component';
import { RecommendTeacherListAdminComponent } from './recommend-teacher-admin/list-admin/recommend-teacher-list-admin.component';

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

    ReclamationProfCreateAdminComponent,
    ReclamationProfListAdminComponent,
    ReclamationProfViewAdminComponent,
    ReclamationProfEditAdminComponent,
    TypeReclamationEtudiantCreateAdminComponent,
    TypeReclamationEtudiantListAdminComponent,
    TypeReclamationEtudiantViewAdminComponent,
    TypeReclamationEtudiantEditAdminComponent,
    TypeReclamationProfCreateAdminComponent,
    TypeReclamationProfListAdminComponent,
    TypeReclamationProfViewAdminComponent,
    TypeReclamationProfEditAdminComponent,
    ReclamationEtudiantCreateAdminComponent,
    ReclamationEtudiantListAdminComponent,
    ReclamationEtudiantViewAdminComponent,
    ReclamationEtudiantEditAdminComponent,
    RecommendTeacherCreateAdminComponent,
    RecommendTeacherListAdminComponent,
    RecommendTeacherViewAdminComponent,
    RecommendTeacherEditAdminComponent,
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
  ReclamationProfCreateAdminComponent,
  ReclamationProfListAdminComponent,
  ReclamationProfViewAdminComponent,
  ReclamationProfEditAdminComponent,
  TypeReclamationEtudiantCreateAdminComponent,
  TypeReclamationEtudiantListAdminComponent,
  TypeReclamationEtudiantViewAdminComponent,
  TypeReclamationEtudiantEditAdminComponent,
  TypeReclamationProfCreateAdminComponent,
  TypeReclamationProfListAdminComponent,
  TypeReclamationProfViewAdminComponent,
  TypeReclamationProfEditAdminComponent,
  ReclamationEtudiantCreateAdminComponent,
  ReclamationEtudiantListAdminComponent,
  ReclamationEtudiantViewAdminComponent,
  ReclamationEtudiantEditAdminComponent,
  RecommendTeacherCreateAdminComponent,
  RecommendTeacherListAdminComponent,
  RecommendTeacherViewAdminComponent,
  RecommendTeacherEditAdminComponent,
  ],
  entryComponents: [],
})
export class RecomReclaAdminModule { }