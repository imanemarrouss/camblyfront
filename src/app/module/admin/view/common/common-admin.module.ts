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

import { ClassAverageBonusCreateAdminComponent } from './class-average-bonus-admin/create-admin/class-average-bonus-create-admin.component';
import { ClassAverageBonusEditAdminComponent } from './class-average-bonus-admin/edit-admin/class-average-bonus-edit-admin.component';
import { ClassAverageBonusViewAdminComponent } from './class-average-bonus-admin/view-admin/class-average-bonus-view-admin.component';
import { ClassAverageBonusListAdminComponent } from './class-average-bonus-admin/list-admin/class-average-bonus-list-admin.component';
import { NewsCreateAdminComponent } from './news-admin/create-admin/news-create-admin.component';
import { NewsEditAdminComponent } from './news-admin/edit-admin/news-edit-admin.component';
import { NewsViewAdminComponent } from './news-admin/view-admin/news-view-admin.component';
import { NewsListAdminComponent } from './news-admin/list-admin/news-list-admin.component';
import { ContactCreateAdminComponent } from './contact-admin/create-admin/contact-create-admin.component';
import { ContactEditAdminComponent } from './contact-admin/edit-admin/contact-edit-admin.component';
import { ContactViewAdminComponent } from './contact-admin/view-admin/contact-view-admin.component';
import { ContactListAdminComponent } from './contact-admin/list-admin/contact-list-admin.component';

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

    ClassAverageBonusCreateAdminComponent,
    ClassAverageBonusListAdminComponent,
    ClassAverageBonusViewAdminComponent,
    ClassAverageBonusEditAdminComponent,
    NewsCreateAdminComponent,
    NewsListAdminComponent,
    NewsViewAdminComponent,
    NewsEditAdminComponent,
    ContactCreateAdminComponent,
    ContactListAdminComponent,
    ContactViewAdminComponent,
    ContactEditAdminComponent,
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
  ClassAverageBonusCreateAdminComponent,
  ClassAverageBonusListAdminComponent,
  ClassAverageBonusViewAdminComponent,
  ClassAverageBonusEditAdminComponent,
  NewsCreateAdminComponent,
  NewsListAdminComponent,
  NewsViewAdminComponent,
  NewsEditAdminComponent,
  ContactCreateAdminComponent,
  ContactListAdminComponent,
  ContactViewAdminComponent,
  ContactEditAdminComponent,
  ],
  entryComponents: [],
})
export class CommonAdminModule { }