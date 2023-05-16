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

import { FaqEtudiantCreateAdminComponent } from './faq-etudiant-admin/create-admin/faq-etudiant-create-admin.component';
import { FaqEtudiantEditAdminComponent } from './faq-etudiant-admin/edit-admin/faq-etudiant-edit-admin.component';
import { FaqEtudiantViewAdminComponent } from './faq-etudiant-admin/view-admin/faq-etudiant-view-admin.component';
import { FaqEtudiantListAdminComponent } from './faq-etudiant-admin/list-admin/faq-etudiant-list-admin.component';
import { FaqProfCreateAdminComponent } from './faq-prof-admin/create-admin/faq-prof-create-admin.component';
import { FaqProfEditAdminComponent } from './faq-prof-admin/edit-admin/faq-prof-edit-admin.component';
import { FaqProfViewAdminComponent } from './faq-prof-admin/view-admin/faq-prof-view-admin.component';
import { FaqProfListAdminComponent } from './faq-prof-admin/list-admin/faq-prof-list-admin.component';
import { FaqCreateAdminComponent } from './faq-admin/create-admin/faq-create-admin.component';
import { FaqEditAdminComponent } from './faq-admin/edit-admin/faq-edit-admin.component';
import { FaqViewAdminComponent } from './faq-admin/view-admin/faq-view-admin.component';
import { FaqListAdminComponent } from './faq-admin/list-admin/faq-list-admin.component';
import { FaqTypeCreateAdminComponent } from './faq-type-admin/create-admin/faq-type-create-admin.component';
import { FaqTypeEditAdminComponent } from './faq-type-admin/edit-admin/faq-type-edit-admin.component';
import { FaqTypeViewAdminComponent } from './faq-type-admin/view-admin/faq-type-view-admin.component';
import { FaqTypeListAdminComponent } from './faq-type-admin/list-admin/faq-type-list-admin.component';

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

    FaqEtudiantCreateAdminComponent,
    FaqEtudiantListAdminComponent,
    FaqEtudiantViewAdminComponent,
    FaqEtudiantEditAdminComponent,
    FaqProfCreateAdminComponent,
    FaqProfListAdminComponent,
    FaqProfViewAdminComponent,
    FaqProfEditAdminComponent,
    FaqCreateAdminComponent,
    FaqListAdminComponent,
    FaqViewAdminComponent,
    FaqEditAdminComponent,
    FaqTypeCreateAdminComponent,
    FaqTypeListAdminComponent,
    FaqTypeViewAdminComponent,
    FaqTypeEditAdminComponent,
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
  FaqEtudiantCreateAdminComponent,
  FaqEtudiantListAdminComponent,
  FaqEtudiantViewAdminComponent,
  FaqEtudiantEditAdminComponent,
  FaqProfCreateAdminComponent,
  FaqProfListAdminComponent,
  FaqProfViewAdminComponent,
  FaqProfEditAdminComponent,
  FaqCreateAdminComponent,
  FaqListAdminComponent,
  FaqViewAdminComponent,
  FaqEditAdminComponent,
  FaqTypeCreateAdminComponent,
  FaqTypeListAdminComponent,
  FaqTypeViewAdminComponent,
  FaqTypeEditAdminComponent,
  ],
  entryComponents: [],
})
export class FaqAdminModule { }