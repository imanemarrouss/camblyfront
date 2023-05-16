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
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import { QuizAdminModule } from './view/quiz/quiz-admin.module';
import { QuizAdminRoutingModule } from './view/quiz/quiz-admin-routing.module';
import { FaqAdminModule } from './view/faq/faq-admin.module';
import { FaqAdminRoutingModule } from './view/faq/faq-admin-routing.module';
import { RecomReclaAdminModule } from './view/recom-recla/recom-recla-admin.module';
import { RecomReclaAdminRoutingModule } from './view/recom-recla/recom-recla-admin-routing.module';
import { CommonAdminModule } from './view/common/common-admin.module';
import { CommonAdminRoutingModule } from './view/common/common-admin-routing.module';
import { AlcAdminModule } from './view/alc/alc-admin.module';
import { AlcAdminRoutingModule } from './view/alc/alc-admin-routing.module';
import { InscriptionAdminModule } from './view/inscription/inscription-admin.module';
import { InscriptionAdminRoutingModule } from './view/inscription/inscription-admin-routing.module';
import { CourseAdminModule } from './view/course/course-admin.module';
import { CourseAdminRoutingModule } from './view/course/course-admin-routing.module';
import { FreetrialAdminModule } from './view/freetrial/freetrial-admin.module';
import { FreetrialAdminRoutingModule } from './view/freetrial/freetrial-admin-routing.module';
import { LearningAdminModule } from './view/learning/learning-admin.module';
import { LearningAdminRoutingModule } from './view/learning/learning-admin-routing.module';
import { HomeworkAdminModule } from './view/homework/homework-admin.module';
import { HomeworkAdminRoutingModule } from './view/homework/homework-admin-routing.module';
import { ProfAdminModule } from './view/prof/prof-admin.module';
import { ProfAdminRoutingModule } from './view/prof/prof-admin-routing.module';
import { SalaryAdminModule } from './view/salary/salary-admin.module';
import { SalaryAdminRoutingModule } from './view/salary/salary-admin-routing.module';


import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';


@NgModule({
  declarations: [
   LoginAdminComponent,
   RegisterAdminComponent
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
  QuizAdminModule,
  QuizAdminRoutingModule,
  FaqAdminModule,
  FaqAdminRoutingModule,
  RecomReclaAdminModule,
  RecomReclaAdminRoutingModule,
  CommonAdminModule,
  CommonAdminRoutingModule,
  AlcAdminModule,
  AlcAdminRoutingModule,
  InscriptionAdminModule,
  InscriptionAdminRoutingModule,
  CourseAdminModule,
  CourseAdminRoutingModule,
  FreetrialAdminModule,
  FreetrialAdminRoutingModule,
  LearningAdminModule,
  LearningAdminRoutingModule,
  HomeworkAdminModule,
  HomeworkAdminRoutingModule,
  ProfAdminModule,
  ProfAdminRoutingModule,
  SalaryAdminModule,
  SalaryAdminRoutingModule,
  ],
  exports: [
  LoginAdminComponent,
  RegisterAdminComponent,

    QuizAdminModule,
    FaqAdminModule,
    RecomReclaAdminModule,
    CommonAdminModule,
    AlcAdminModule,
    InscriptionAdminModule,
    CourseAdminModule,
    FreetrialAdminModule,
    LearningAdminModule,
    HomeworkAdminModule,
    ProfAdminModule,
    SalaryAdminModule,
  ],
  entryComponents: [],
})
export class AdminModule { }
