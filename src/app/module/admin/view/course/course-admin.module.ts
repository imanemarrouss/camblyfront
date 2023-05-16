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

import { ParcoursCreateAdminComponent } from './parcours-admin/create-admin/parcours-create-admin.component';
import { ParcoursEditAdminComponent } from './parcours-admin/edit-admin/parcours-edit-admin.component';
import { ParcoursViewAdminComponent } from './parcours-admin/view-admin/parcours-view-admin.component';
import { ParcoursListAdminComponent } from './parcours-admin/list-admin/parcours-list-admin.component';
import { CategorieSectionCreateAdminComponent } from './categorie-section-admin/create-admin/categorie-section-create-admin.component';
import { CategorieSectionEditAdminComponent } from './categorie-section-admin/edit-admin/categorie-section-edit-admin.component';
import { CategorieSectionViewAdminComponent } from './categorie-section-admin/view-admin/categorie-section-view-admin.component';
import { CategorieSectionListAdminComponent } from './categorie-section-admin/list-admin/categorie-section-list-admin.component';
import { CoursCreateAdminComponent } from './cours-admin/create-admin/cours-create-admin.component';
import { CoursEditAdminComponent } from './cours-admin/edit-admin/cours-edit-admin.component';
import { CoursViewAdminComponent } from './cours-admin/view-admin/cours-view-admin.component';
import { CoursListAdminComponent } from './cours-admin/list-admin/cours-list-admin.component';
import { SuperCategorieSectionCreateAdminComponent } from './super-categorie-section-admin/create-admin/super-categorie-section-create-admin.component';
import { SuperCategorieSectionEditAdminComponent } from './super-categorie-section-admin/edit-admin/super-categorie-section-edit-admin.component';
import { SuperCategorieSectionViewAdminComponent } from './super-categorie-section-admin/view-admin/super-categorie-section-view-admin.component';
import { SuperCategorieSectionListAdminComponent } from './super-categorie-section-admin/list-admin/super-categorie-section-list-admin.component';
import { VocabularyCreateAdminComponent } from './vocabulary-admin/create-admin/vocabulary-create-admin.component';
import { VocabularyEditAdminComponent } from './vocabulary-admin/edit-admin/vocabulary-edit-admin.component';
import { VocabularyViewAdminComponent } from './vocabulary-admin/view-admin/vocabulary-view-admin.component';
import { VocabularyListAdminComponent } from './vocabulary-admin/list-admin/vocabulary-list-admin.component';
import { VocabularyQuizCreateAdminComponent } from './vocabulary-quiz-admin/create-admin/vocabulary-quiz-create-admin.component';
import { VocabularyQuizEditAdminComponent } from './vocabulary-quiz-admin/edit-admin/vocabulary-quiz-edit-admin.component';
import { VocabularyQuizViewAdminComponent } from './vocabulary-quiz-admin/view-admin/vocabulary-quiz-view-admin.component';
import { VocabularyQuizListAdminComponent } from './vocabulary-quiz-admin/list-admin/vocabulary-quiz-list-admin.component';
import { CentreCreateAdminComponent } from './centre-admin/create-admin/centre-create-admin.component';
import { CentreEditAdminComponent } from './centre-admin/edit-admin/centre-edit-admin.component';
import { CentreViewAdminComponent } from './centre-admin/view-admin/centre-view-admin.component';
import { CentreListAdminComponent } from './centre-admin/list-admin/centre-list-admin.component';
import { SectionItemCreateAdminComponent } from './section-item-admin/create-admin/section-item-create-admin.component';
import { SectionItemEditAdminComponent } from './section-item-admin/edit-admin/section-item-edit-admin.component';
import { SectionItemViewAdminComponent } from './section-item-admin/view-admin/section-item-view-admin.component';
import { SectionItemListAdminComponent } from './section-item-admin/list-admin/section-item-list-admin.component';
import { EtatCoursCreateAdminComponent } from './etat-cours-admin/create-admin/etat-cours-create-admin.component';
import { EtatCoursEditAdminComponent } from './etat-cours-admin/edit-admin/etat-cours-edit-admin.component';
import { EtatCoursViewAdminComponent } from './etat-cours-admin/view-admin/etat-cours-view-admin.component';
import { EtatCoursListAdminComponent } from './etat-cours-admin/list-admin/etat-cours-list-admin.component';
import { SectionCreateAdminComponent } from './section-admin/create-admin/section-create-admin.component';
import { SectionEditAdminComponent } from './section-admin/edit-admin/section-edit-admin.component';
import { SectionViewAdminComponent } from './section-admin/view-admin/section-view-admin.component';
import { SectionListAdminComponent } from './section-admin/list-admin/section-list-admin.component';
import { LevelTestConfigurationCreateAdminComponent } from './level-test-configuration-admin/create-admin/level-test-configuration-create-admin.component';
import { LevelTestConfigurationEditAdminComponent } from './level-test-configuration-admin/edit-admin/level-test-configuration-edit-admin.component';
import { LevelTestConfigurationViewAdminComponent } from './level-test-configuration-admin/view-admin/level-test-configuration-view-admin.component';
import { LevelTestConfigurationListAdminComponent } from './level-test-configuration-admin/list-admin/level-test-configuration-list-admin.component';

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

    ParcoursCreateAdminComponent,
    ParcoursListAdminComponent,
    ParcoursViewAdminComponent,
    ParcoursEditAdminComponent,
    CategorieSectionCreateAdminComponent,
    CategorieSectionListAdminComponent,
    CategorieSectionViewAdminComponent,
    CategorieSectionEditAdminComponent,
    CoursCreateAdminComponent,
    CoursListAdminComponent,
    CoursViewAdminComponent,
    CoursEditAdminComponent,
    SuperCategorieSectionCreateAdminComponent,
    SuperCategorieSectionListAdminComponent,
    SuperCategorieSectionViewAdminComponent,
    SuperCategorieSectionEditAdminComponent,
    VocabularyCreateAdminComponent,
    VocabularyListAdminComponent,
    VocabularyViewAdminComponent,
    VocabularyEditAdminComponent,
    VocabularyQuizCreateAdminComponent,
    VocabularyQuizListAdminComponent,
    VocabularyQuizViewAdminComponent,
    VocabularyQuizEditAdminComponent,
    CentreCreateAdminComponent,
    CentreListAdminComponent,
    CentreViewAdminComponent,
    CentreEditAdminComponent,
    SectionItemCreateAdminComponent,
    SectionItemListAdminComponent,
    SectionItemViewAdminComponent,
    SectionItemEditAdminComponent,
    EtatCoursCreateAdminComponent,
    EtatCoursListAdminComponent,
    EtatCoursViewAdminComponent,
    EtatCoursEditAdminComponent,
    SectionCreateAdminComponent,
    SectionListAdminComponent,
    SectionViewAdminComponent,
    SectionEditAdminComponent,
    LevelTestConfigurationCreateAdminComponent,
    LevelTestConfigurationListAdminComponent,
    LevelTestConfigurationViewAdminComponent,
    LevelTestConfigurationEditAdminComponent,
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
  ParcoursCreateAdminComponent,
  ParcoursListAdminComponent,
  ParcoursViewAdminComponent,
  ParcoursEditAdminComponent,
  CategorieSectionCreateAdminComponent,
  CategorieSectionListAdminComponent,
  CategorieSectionViewAdminComponent,
  CategorieSectionEditAdminComponent,
  CoursCreateAdminComponent,
  CoursListAdminComponent,
  CoursViewAdminComponent,
  CoursEditAdminComponent,
  SuperCategorieSectionCreateAdminComponent,
  SuperCategorieSectionListAdminComponent,
  SuperCategorieSectionViewAdminComponent,
  SuperCategorieSectionEditAdminComponent,
  VocabularyCreateAdminComponent,
  VocabularyListAdminComponent,
  VocabularyViewAdminComponent,
  VocabularyEditAdminComponent,
  VocabularyQuizCreateAdminComponent,
  VocabularyQuizListAdminComponent,
  VocabularyQuizViewAdminComponent,
  VocabularyQuizEditAdminComponent,
  CentreCreateAdminComponent,
  CentreListAdminComponent,
  CentreViewAdminComponent,
  CentreEditAdminComponent,
  SectionItemCreateAdminComponent,
  SectionItemListAdminComponent,
  SectionItemViewAdminComponent,
  SectionItemEditAdminComponent,
  EtatCoursCreateAdminComponent,
  EtatCoursListAdminComponent,
  EtatCoursViewAdminComponent,
  EtatCoursEditAdminComponent,
  SectionCreateAdminComponent,
  SectionListAdminComponent,
  SectionViewAdminComponent,
  SectionEditAdminComponent,
  LevelTestConfigurationCreateAdminComponent,
  LevelTestConfigurationListAdminComponent,
  LevelTestConfigurationViewAdminComponent,
  LevelTestConfigurationEditAdminComponent,
  ],
  entryComponents: [],
})
export class CourseAdminModule { }