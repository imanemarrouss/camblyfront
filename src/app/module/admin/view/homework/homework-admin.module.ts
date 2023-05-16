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

import { HomeWorkQuestionCreateAdminComponent } from './home-work-question-admin/create-admin/home-work-question-create-admin.component';
import { HomeWorkQuestionEditAdminComponent } from './home-work-question-admin/edit-admin/home-work-question-edit-admin.component';
import { HomeWorkQuestionViewAdminComponent } from './home-work-question-admin/view-admin/home-work-question-view-admin.component';
import { HomeWorkQuestionListAdminComponent } from './home-work-question-admin/list-admin/home-work-question-list-admin.component';
import { HomeWorkCreateAdminComponent } from './home-work-admin/create-admin/home-work-create-admin.component';
import { HomeWorkEditAdminComponent } from './home-work-admin/edit-admin/home-work-edit-admin.component';
import { HomeWorkViewAdminComponent } from './home-work-admin/view-admin/home-work-view-admin.component';
import { HomeWorkListAdminComponent } from './home-work-admin/list-admin/home-work-list-admin.component';
import { ResultatHomeWorkCreateAdminComponent } from './resultat-home-work-admin/create-admin/resultat-home-work-create-admin.component';
import { ResultatHomeWorkEditAdminComponent } from './resultat-home-work-admin/edit-admin/resultat-home-work-edit-admin.component';
import { ResultatHomeWorkViewAdminComponent } from './resultat-home-work-admin/view-admin/resultat-home-work-view-admin.component';
import { ResultatHomeWorkListAdminComponent } from './resultat-home-work-admin/list-admin/resultat-home-work-list-admin.component';
import { ReponseEtudiantHomeWorkCreateAdminComponent } from './reponse-etudiant-home-work-admin/create-admin/reponse-etudiant-home-work-create-admin.component';
import { ReponseEtudiantHomeWorkEditAdminComponent } from './reponse-etudiant-home-work-admin/edit-admin/reponse-etudiant-home-work-edit-admin.component';
import { ReponseEtudiantHomeWorkViewAdminComponent } from './reponse-etudiant-home-work-admin/view-admin/reponse-etudiant-home-work-view-admin.component';
import { ReponseEtudiantHomeWorkListAdminComponent } from './reponse-etudiant-home-work-admin/list-admin/reponse-etudiant-home-work-list-admin.component';
import { HoweWorkQSTReponseCreateAdminComponent } from './howe-work-q-s-t-reponse-admin/create-admin/howe-work-q-s-t-reponse-create-admin.component';
import { HoweWorkQSTReponseEditAdminComponent } from './howe-work-q-s-t-reponse-admin/edit-admin/howe-work-q-s-t-reponse-edit-admin.component';
import { HoweWorkQSTReponseViewAdminComponent } from './howe-work-q-s-t-reponse-admin/view-admin/howe-work-q-s-t-reponse-view-admin.component';
import { HoweWorkQSTReponseListAdminComponent } from './howe-work-q-s-t-reponse-admin/list-admin/howe-work-q-s-t-reponse-list-admin.component';
import { TypeHomeWorkCreateAdminComponent } from './type-home-work-admin/create-admin/type-home-work-create-admin.component';
import { TypeHomeWorkEditAdminComponent } from './type-home-work-admin/edit-admin/type-home-work-edit-admin.component';
import { TypeHomeWorkViewAdminComponent } from './type-home-work-admin/view-admin/type-home-work-view-admin.component';
import { TypeHomeWorkListAdminComponent } from './type-home-work-admin/list-admin/type-home-work-list-admin.component';
import { HomeWorkEtudiantCreateAdminComponent } from './home-work-etudiant-admin/create-admin/home-work-etudiant-create-admin.component';
import { HomeWorkEtudiantEditAdminComponent } from './home-work-etudiant-admin/edit-admin/home-work-etudiant-edit-admin.component';
import { HomeWorkEtudiantViewAdminComponent } from './home-work-etudiant-admin/view-admin/home-work-etudiant-view-admin.component';
import { HomeWorkEtudiantListAdminComponent } from './home-work-etudiant-admin/list-admin/home-work-etudiant-list-admin.component';

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

    HomeWorkQuestionCreateAdminComponent,
    HomeWorkQuestionListAdminComponent,
    HomeWorkQuestionViewAdminComponent,
    HomeWorkQuestionEditAdminComponent,
    HomeWorkCreateAdminComponent,
    HomeWorkListAdminComponent,
    HomeWorkViewAdminComponent,
    HomeWorkEditAdminComponent,
    ResultatHomeWorkCreateAdminComponent,
    ResultatHomeWorkListAdminComponent,
    ResultatHomeWorkViewAdminComponent,
    ResultatHomeWorkEditAdminComponent,
    ReponseEtudiantHomeWorkCreateAdminComponent,
    ReponseEtudiantHomeWorkListAdminComponent,
    ReponseEtudiantHomeWorkViewAdminComponent,
    ReponseEtudiantHomeWorkEditAdminComponent,
    HoweWorkQSTReponseCreateAdminComponent,
    HoweWorkQSTReponseListAdminComponent,
    HoweWorkQSTReponseViewAdminComponent,
    HoweWorkQSTReponseEditAdminComponent,
    TypeHomeWorkCreateAdminComponent,
    TypeHomeWorkListAdminComponent,
    TypeHomeWorkViewAdminComponent,
    TypeHomeWorkEditAdminComponent,
    HomeWorkEtudiantCreateAdminComponent,
    HomeWorkEtudiantListAdminComponent,
    HomeWorkEtudiantViewAdminComponent,
    HomeWorkEtudiantEditAdminComponent,
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
  HomeWorkQuestionCreateAdminComponent,
  HomeWorkQuestionListAdminComponent,
  HomeWorkQuestionViewAdminComponent,
  HomeWorkQuestionEditAdminComponent,
  HomeWorkCreateAdminComponent,
  HomeWorkListAdminComponent,
  HomeWorkViewAdminComponent,
  HomeWorkEditAdminComponent,
  ResultatHomeWorkCreateAdminComponent,
  ResultatHomeWorkListAdminComponent,
  ResultatHomeWorkViewAdminComponent,
  ResultatHomeWorkEditAdminComponent,
  ReponseEtudiantHomeWorkCreateAdminComponent,
  ReponseEtudiantHomeWorkListAdminComponent,
  ReponseEtudiantHomeWorkViewAdminComponent,
  ReponseEtudiantHomeWorkEditAdminComponent,
  HoweWorkQSTReponseCreateAdminComponent,
  HoweWorkQSTReponseListAdminComponent,
  HoweWorkQSTReponseViewAdminComponent,
  HoweWorkQSTReponseEditAdminComponent,
  TypeHomeWorkCreateAdminComponent,
  TypeHomeWorkListAdminComponent,
  TypeHomeWorkViewAdminComponent,
  TypeHomeWorkEditAdminComponent,
  HomeWorkEtudiantCreateAdminComponent,
  HomeWorkEtudiantListAdminComponent,
  HomeWorkEtudiantViewAdminComponent,
  HomeWorkEtudiantEditAdminComponent,
  ],
  entryComponents: [],
})
export class HomeworkAdminModule { }