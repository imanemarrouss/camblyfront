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

import { ReponseEtudiantCreateAdminComponent } from './reponse-etudiant-admin/create-admin/reponse-etudiant-create-admin.component';
import { ReponseEtudiantEditAdminComponent } from './reponse-etudiant-admin/edit-admin/reponse-etudiant-edit-admin.component';
import { ReponseEtudiantViewAdminComponent } from './reponse-etudiant-admin/view-admin/reponse-etudiant-view-admin.component';
import { ReponseEtudiantListAdminComponent } from './reponse-etudiant-admin/list-admin/reponse-etudiant-list-admin.component';
import { TypeDeQuestionCreateAdminComponent } from './type-de-question-admin/create-admin/type-de-question-create-admin.component';
import { TypeDeQuestionEditAdminComponent } from './type-de-question-admin/edit-admin/type-de-question-edit-admin.component';
import { TypeDeQuestionViewAdminComponent } from './type-de-question-admin/view-admin/type-de-question-view-admin.component';
import { TypeDeQuestionListAdminComponent } from './type-de-question-admin/list-admin/type-de-question-list-admin.component';
import { QuizCreateAdminComponent } from './quiz-admin/create-admin/quiz-create-admin.component';
import { QuizEditAdminComponent } from './quiz-admin/edit-admin/quiz-edit-admin.component';
import { QuizViewAdminComponent } from './quiz-admin/view-admin/quiz-view-admin.component';
import { QuizListAdminComponent } from './quiz-admin/list-admin/quiz-list-admin.component';
import { QuestionCreateAdminComponent } from './question-admin/create-admin/question-create-admin.component';
import { QuestionEditAdminComponent } from './question-admin/edit-admin/question-edit-admin.component';
import { QuestionViewAdminComponent } from './question-admin/view-admin/question-view-admin.component';
import { QuestionListAdminComponent } from './question-admin/list-admin/question-list-admin.component';
import { EtatReponseCreateAdminComponent } from './etat-reponse-admin/create-admin/etat-reponse-create-admin.component';
import { EtatReponseEditAdminComponent } from './etat-reponse-admin/edit-admin/etat-reponse-edit-admin.component';
import { EtatReponseViewAdminComponent } from './etat-reponse-admin/view-admin/etat-reponse-view-admin.component';
import { EtatReponseListAdminComponent } from './etat-reponse-admin/list-admin/etat-reponse-list-admin.component';
import { QuizEtudiantCreateAdminComponent } from './quiz-etudiant-admin/create-admin/quiz-etudiant-create-admin.component';
import { QuizEtudiantEditAdminComponent } from './quiz-etudiant-admin/edit-admin/quiz-etudiant-edit-admin.component';
import { QuizEtudiantViewAdminComponent } from './quiz-etudiant-admin/view-admin/quiz-etudiant-view-admin.component';
import { QuizEtudiantListAdminComponent } from './quiz-etudiant-admin/list-admin/quiz-etudiant-list-admin.component';
import { ReponseCreateAdminComponent } from './reponse-admin/create-admin/reponse-create-admin.component';
import { ReponseEditAdminComponent } from './reponse-admin/edit-admin/reponse-edit-admin.component';
import { ReponseViewAdminComponent } from './reponse-admin/view-admin/reponse-view-admin.component';
import { ReponseListAdminComponent } from './reponse-admin/list-admin/reponse-list-admin.component';
import { ClassRoomCreateAdminComponent } from './class-room-admin/create-admin/class-room-create-admin.component';
import { ClassRoomEditAdminComponent } from './class-room-admin/edit-admin/class-room-edit-admin.component';
import { ClassRoomViewAdminComponent } from './class-room-admin/view-admin/class-room-view-admin.component';
import { ClassRoomListAdminComponent } from './class-room-admin/list-admin/class-room-list-admin.component';
import { QuizClassRoomCreateAdminComponent } from './quiz-class-room-admin/create-admin/quiz-class-room-create-admin.component';
import { QuizClassRoomEditAdminComponent } from './quiz-class-room-admin/edit-admin/quiz-class-room-edit-admin.component';
import { QuizClassRoomViewAdminComponent } from './quiz-class-room-admin/view-admin/quiz-class-room-view-admin.component';
import { QuizClassRoomListAdminComponent } from './quiz-class-room-admin/list-admin/quiz-class-room-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';
import { ExamComponent } from './exam/exam.component';
import {CardModule} from "primeng/card";
import {EditorModule} from "primeng/editor";
import { ViewquizComponent } from './viewquiz/viewquiz.component';
import {CheckboxModule} from "primeng/checkbox";




@NgModule({
  declarations: [

    ReponseEtudiantCreateAdminComponent,
    ReponseEtudiantListAdminComponent,
    ReponseEtudiantViewAdminComponent,
    ReponseEtudiantEditAdminComponent,
    TypeDeQuestionCreateAdminComponent,
    TypeDeQuestionListAdminComponent,
    TypeDeQuestionViewAdminComponent,
    TypeDeQuestionEditAdminComponent,
    QuizCreateAdminComponent,
    QuizListAdminComponent,
    QuizViewAdminComponent,
    QuizEditAdminComponent,
    QuestionCreateAdminComponent,
    QuestionListAdminComponent,
    QuestionViewAdminComponent,
    QuestionEditAdminComponent,
    EtatReponseCreateAdminComponent,
    EtatReponseListAdminComponent,
    EtatReponseViewAdminComponent,
    EtatReponseEditAdminComponent,
    QuizEtudiantCreateAdminComponent,
    QuizEtudiantListAdminComponent,
    QuizEtudiantViewAdminComponent,
    QuizEtudiantEditAdminComponent,
    ReponseCreateAdminComponent,
    ReponseListAdminComponent,
    ReponseViewAdminComponent,
    ReponseEditAdminComponent,
    ClassRoomCreateAdminComponent,
    ClassRoomListAdminComponent,
    ClassRoomViewAdminComponent,
    ClassRoomEditAdminComponent,
    QuizClassRoomCreateAdminComponent,
    QuizClassRoomListAdminComponent,
    QuizClassRoomViewAdminComponent,
    QuizClassRoomEditAdminComponent,
    ExamComponent,
    ViewquizComponent,
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
    CardModule,
    EditorModule,
    CheckboxModule,
  ],
  exports: [
  ReponseEtudiantCreateAdminComponent,
  ReponseEtudiantListAdminComponent,
  ReponseEtudiantViewAdminComponent,
  ReponseEtudiantEditAdminComponent,
  TypeDeQuestionCreateAdminComponent,
  TypeDeQuestionListAdminComponent,
  TypeDeQuestionViewAdminComponent,
  TypeDeQuestionEditAdminComponent,
  QuizCreateAdminComponent,
  QuizListAdminComponent,
  QuizViewAdminComponent,
  QuizEditAdminComponent,
  QuestionCreateAdminComponent,
  QuestionListAdminComponent,
  QuestionViewAdminComponent,
  QuestionEditAdminComponent,
  EtatReponseCreateAdminComponent,
  EtatReponseListAdminComponent,
  EtatReponseViewAdminComponent,
  EtatReponseEditAdminComponent,
  QuizEtudiantCreateAdminComponent,
  QuizEtudiantListAdminComponent,
  QuizEtudiantViewAdminComponent,
  QuizEtudiantEditAdminComponent,
  ReponseCreateAdminComponent,
  ReponseListAdminComponent,
  ReponseViewAdminComponent,
  ReponseEditAdminComponent,
  ClassRoomCreateAdminComponent,
  ClassRoomListAdminComponent,
  ClassRoomViewAdminComponent,
  ClassRoomEditAdminComponent,
  QuizClassRoomCreateAdminComponent,
  QuizClassRoomListAdminComponent,
  QuizClassRoomViewAdminComponent,
  QuizClassRoomEditAdminComponent,
  ],
  entryComponents: [],
})
export class QuizAdminModule { }