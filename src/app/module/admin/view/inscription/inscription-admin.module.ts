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

import { GroupeEtudeCreateAdminComponent } from './groupe-etude-admin/create-admin/groupe-etude-create-admin.component';
import { GroupeEtudeEditAdminComponent } from './groupe-etude-admin/edit-admin/groupe-etude-edit-admin.component';
import { GroupeEtudeViewAdminComponent } from './groupe-etude-admin/view-admin/groupe-etude-view-admin.component';
import { GroupeEtudeListAdminComponent } from './groupe-etude-admin/list-admin/groupe-etude-list-admin.component';
import { EtudiantClassRoomCreateAdminComponent } from './etudiant-class-room-admin/create-admin/etudiant-class-room-create-admin.component';
import { EtudiantClassRoomEditAdminComponent } from './etudiant-class-room-admin/edit-admin/etudiant-class-room-edit-admin.component';
import { EtudiantClassRoomViewAdminComponent } from './etudiant-class-room-admin/view-admin/etudiant-class-room-view-admin.component';
import { EtudiantClassRoomListAdminComponent } from './etudiant-class-room-admin/list-admin/etudiant-class-room-list-admin.component';
import { InteretEtudiantCreateAdminComponent } from './interet-etudiant-admin/create-admin/interet-etudiant-create-admin.component';
import { InteretEtudiantEditAdminComponent } from './interet-etudiant-admin/edit-admin/interet-etudiant-edit-admin.component';
import { InteretEtudiantViewAdminComponent } from './interet-etudiant-admin/view-admin/interet-etudiant-view-admin.component';
import { InteretEtudiantListAdminComponent } from './interet-etudiant-admin/list-admin/interet-etudiant-list-admin.component';
import { EtatEtudiantScheduleCreateAdminComponent } from './etat-etudiant-schedule-admin/create-admin/etat-etudiant-schedule-create-admin.component';
import { EtatEtudiantScheduleEditAdminComponent } from './etat-etudiant-schedule-admin/edit-admin/etat-etudiant-schedule-edit-admin.component';
import { EtatEtudiantScheduleViewAdminComponent } from './etat-etudiant-schedule-admin/view-admin/etat-etudiant-schedule-view-admin.component';
import { EtatEtudiantScheduleListAdminComponent } from './etat-etudiant-schedule-admin/list-admin/etat-etudiant-schedule-list-admin.component';
import { ProfReviewCreateAdminComponent } from './prof-review-admin/create-admin/prof-review-create-admin.component';
import { ProfReviewEditAdminComponent } from './prof-review-admin/edit-admin/prof-review-edit-admin.component';
import { ProfReviewViewAdminComponent } from './prof-review-admin/view-admin/prof-review-view-admin.component';
import { ProfReviewListAdminComponent } from './prof-review-admin/list-admin/prof-review-list-admin.component';
import { LangueCreateAdminComponent } from './langue-admin/create-admin/langue-create-admin.component';
import { LangueEditAdminComponent } from './langue-admin/edit-admin/langue-edit-admin.component';
import { LangueViewAdminComponent } from './langue-admin/view-admin/langue-view-admin.component';
import { LangueListAdminComponent } from './langue-admin/list-admin/langue-list-admin.component';
import { SkillCreateAdminComponent } from './skill-admin/create-admin/skill-create-admin.component';
import { SkillEditAdminComponent } from './skill-admin/edit-admin/skill-edit-admin.component';
import { SkillViewAdminComponent } from './skill-admin/view-admin/skill-view-admin.component';
import { SkillListAdminComponent } from './skill-admin/list-admin/skill-list-admin.component';
import { EtatInscriptionCreateAdminComponent } from './etat-inscription-admin/create-admin/etat-inscription-create-admin.component';
import { EtatInscriptionEditAdminComponent } from './etat-inscription-admin/edit-admin/etat-inscription-edit-admin.component';
import { EtatInscriptionViewAdminComponent } from './etat-inscription-admin/view-admin/etat-inscription-view-admin.component';
import { EtatInscriptionListAdminComponent } from './etat-inscription-admin/list-admin/etat-inscription-list-admin.component';
import { InviteStudentCreateAdminComponent } from './invite-student-admin/create-admin/invite-student-create-admin.component';
import { InviteStudentEditAdminComponent } from './invite-student-admin/edit-admin/invite-student-edit-admin.component';
import { InviteStudentViewAdminComponent } from './invite-student-admin/view-admin/invite-student-view-admin.component';
import { InviteStudentListAdminComponent } from './invite-student-admin/list-admin/invite-student-list-admin.component';
import { PackStudentCreateAdminComponent } from './pack-student-admin/create-admin/pack-student-create-admin.component';
import { PackStudentEditAdminComponent } from './pack-student-admin/edit-admin/pack-student-edit-admin.component';
import { PackStudentViewAdminComponent } from './pack-student-admin/view-admin/pack-student-view-admin.component';
import { PackStudentListAdminComponent } from './pack-student-admin/list-admin/pack-student-list-admin.component';
import { PriceCreateAdminComponent } from './price-admin/create-admin/price-create-admin.component';
import { PriceEditAdminComponent } from './price-admin/edit-admin/price-edit-admin.component';
import { PriceViewAdminComponent } from './price-admin/view-admin/price-view-admin.component';
import { PriceListAdminComponent } from './price-admin/list-admin/price-list-admin.component';
import { DictionaryCreateAdminComponent } from './dictionary-admin/create-admin/dictionary-create-admin.component';
import { DictionaryEditAdminComponent } from './dictionary-admin/edit-admin/dictionary-edit-admin.component';
import { DictionaryViewAdminComponent } from './dictionary-admin/view-admin/dictionary-view-admin.component';
import { DictionaryListAdminComponent } from './dictionary-admin/list-admin/dictionary-list-admin.component';
import { EtudiantCoursCreateAdminComponent } from './etudiant-cours-admin/create-admin/etudiant-cours-create-admin.component';
import { EtudiantCoursEditAdminComponent } from './etudiant-cours-admin/edit-admin/etudiant-cours-edit-admin.component';
import { EtudiantCoursViewAdminComponent } from './etudiant-cours-admin/view-admin/etudiant-cours-view-admin.component';
import { EtudiantCoursListAdminComponent } from './etudiant-cours-admin/list-admin/etudiant-cours-list-admin.component';
import { EtudiantReviewCreateAdminComponent } from './etudiant-review-admin/create-admin/etudiant-review-create-admin.component';
import { EtudiantReviewEditAdminComponent } from './etudiant-review-admin/edit-admin/etudiant-review-edit-admin.component';
import { EtudiantReviewViewAdminComponent } from './etudiant-review-admin/view-admin/etudiant-review-view-admin.component';
import { EtudiantReviewListAdminComponent } from './etudiant-review-admin/list-admin/etudiant-review-list-admin.component';
import { PaiementCreateAdminComponent } from './paiement-admin/create-admin/paiement-create-admin.component';
import { PaiementEditAdminComponent } from './paiement-admin/edit-admin/paiement-edit-admin.component';
import { PaiementViewAdminComponent } from './paiement-admin/view-admin/paiement-view-admin.component';
import { PaiementListAdminComponent } from './paiement-admin/list-admin/paiement-list-admin.component';
import { StatutSocialCreateAdminComponent } from './statut-social-admin/create-admin/statut-social-create-admin.component';
import { StatutSocialEditAdminComponent } from './statut-social-admin/edit-admin/statut-social-edit-admin.component';
import { StatutSocialViewAdminComponent } from './statut-social-admin/view-admin/statut-social-view-admin.component';
import { StatutSocialListAdminComponent } from './statut-social-admin/list-admin/statut-social-list-admin.component';
import { EtatEtudiantCreateAdminComponent } from './etat-etudiant-admin/create-admin/etat-etudiant-create-admin.component';
import { EtatEtudiantEditAdminComponent } from './etat-etudiant-admin/edit-admin/etat-etudiant-edit-admin.component';
import { EtatEtudiantViewAdminComponent } from './etat-etudiant-admin/view-admin/etat-etudiant-view-admin.component';
import { EtatEtudiantListAdminComponent } from './etat-etudiant-admin/list-admin/etat-etudiant-list-admin.component';
import { FonctionCreateAdminComponent } from './fonction-admin/create-admin/fonction-create-admin.component';
import { FonctionEditAdminComponent } from './fonction-admin/edit-admin/fonction-edit-admin.component';
import { FonctionViewAdminComponent } from './fonction-admin/view-admin/fonction-view-admin.component';
import { FonctionListAdminComponent } from './fonction-admin/list-admin/fonction-list-admin.component';
import { EtudiantCreateAdminComponent } from './etudiant-admin/create-admin/etudiant-create-admin.component';
import { EtudiantEditAdminComponent } from './etudiant-admin/edit-admin/etudiant-edit-admin.component';
import { EtudiantViewAdminComponent } from './etudiant-admin/view-admin/etudiant-view-admin.component';
import { EtudiantListAdminComponent } from './etudiant-admin/list-admin/etudiant-list-admin.component';
import { GroupeEtudiantDetailCreateAdminComponent } from './groupe-etudiant-detail-admin/create-admin/groupe-etudiant-detail-create-admin.component';
import { GroupeEtudiantDetailEditAdminComponent } from './groupe-etudiant-detail-admin/edit-admin/groupe-etudiant-detail-edit-admin.component';
import { GroupeEtudiantDetailViewAdminComponent } from './groupe-etudiant-detail-admin/view-admin/groupe-etudiant-detail-view-admin.component';
import { GroupeEtudiantDetailListAdminComponent } from './groupe-etudiant-detail-admin/list-admin/groupe-etudiant-detail-list-admin.component';
import { InscriptionCreateAdminComponent } from './inscription-admin/create-admin/inscription-create-admin.component';
import { InscriptionEditAdminComponent } from './inscription-admin/edit-admin/inscription-edit-admin.component';
import { InscriptionViewAdminComponent } from './inscription-admin/view-admin/inscription-view-admin.component';
import { InscriptionListAdminComponent } from './inscription-admin/list-admin/inscription-list-admin.component';
import { ConfirmationTokenCreateAdminComponent } from './confirmation-token-admin/create-admin/confirmation-token-create-admin.component';
import { ConfirmationTokenEditAdminComponent } from './confirmation-token-admin/edit-admin/confirmation-token-edit-admin.component';
import { ConfirmationTokenViewAdminComponent } from './confirmation-token-admin/view-admin/confirmation-token-view-admin.component';
import { ConfirmationTokenListAdminComponent } from './confirmation-token-admin/list-admin/confirmation-token-list-admin.component';
import { TeacherLocalityCreateAdminComponent } from './teacher-locality-admin/create-admin/teacher-locality-create-admin.component';
import { TeacherLocalityEditAdminComponent } from './teacher-locality-admin/edit-admin/teacher-locality-edit-admin.component';
import { TeacherLocalityViewAdminComponent } from './teacher-locality-admin/view-admin/teacher-locality-view-admin.component';
import { TeacherLocalityListAdminComponent } from './teacher-locality-admin/list-admin/teacher-locality-list-admin.component';
import { NiveauEtudeCreateAdminComponent } from './niveau-etude-admin/create-admin/niveau-etude-create-admin.component';
import { NiveauEtudeEditAdminComponent } from './niveau-etude-admin/edit-admin/niveau-etude-edit-admin.component';
import { NiveauEtudeViewAdminComponent } from './niveau-etude-admin/view-admin/niveau-etude-view-admin.component';
import { NiveauEtudeListAdminComponent } from './niveau-etude-admin/list-admin/niveau-etude-list-admin.component';
import { GroupeEtudiantCreateAdminComponent } from './groupe-etudiant-admin/create-admin/groupe-etudiant-create-admin.component';
import { GroupeEtudiantEditAdminComponent } from './groupe-etudiant-admin/edit-admin/groupe-etudiant-edit-admin.component';
import { GroupeEtudiantViewAdminComponent } from './groupe-etudiant-admin/view-admin/groupe-etudiant-view-admin.component';
import { GroupeEtudiantListAdminComponent } from './groupe-etudiant-admin/list-admin/groupe-etudiant-list-admin.component';

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

    GroupeEtudeCreateAdminComponent,
    GroupeEtudeListAdminComponent,
    GroupeEtudeViewAdminComponent,
    GroupeEtudeEditAdminComponent,
    EtudiantClassRoomCreateAdminComponent,
    EtudiantClassRoomListAdminComponent,
    EtudiantClassRoomViewAdminComponent,
    EtudiantClassRoomEditAdminComponent,
    InteretEtudiantCreateAdminComponent,
    InteretEtudiantListAdminComponent,
    InteretEtudiantViewAdminComponent,
    InteretEtudiantEditAdminComponent,
    EtatEtudiantScheduleCreateAdminComponent,
    EtatEtudiantScheduleListAdminComponent,
    EtatEtudiantScheduleViewAdminComponent,
    EtatEtudiantScheduleEditAdminComponent,
    ProfReviewCreateAdminComponent,
    ProfReviewListAdminComponent,
    ProfReviewViewAdminComponent,
    ProfReviewEditAdminComponent,
    LangueCreateAdminComponent,
    LangueListAdminComponent,
    LangueViewAdminComponent,
    LangueEditAdminComponent,
    SkillCreateAdminComponent,
    SkillListAdminComponent,
    SkillViewAdminComponent,
    SkillEditAdminComponent,
    EtatInscriptionCreateAdminComponent,
    EtatInscriptionListAdminComponent,
    EtatInscriptionViewAdminComponent,
    EtatInscriptionEditAdminComponent,
    InviteStudentCreateAdminComponent,
    InviteStudentListAdminComponent,
    InviteStudentViewAdminComponent,
    InviteStudentEditAdminComponent,
    PackStudentCreateAdminComponent,
    PackStudentListAdminComponent,
    PackStudentViewAdminComponent,
    PackStudentEditAdminComponent,
    PriceCreateAdminComponent,
    PriceListAdminComponent,
    PriceViewAdminComponent,
    PriceEditAdminComponent,
    DictionaryCreateAdminComponent,
    DictionaryListAdminComponent,
    DictionaryViewAdminComponent,
    DictionaryEditAdminComponent,
    EtudiantCoursCreateAdminComponent,
    EtudiantCoursListAdminComponent,
    EtudiantCoursViewAdminComponent,
    EtudiantCoursEditAdminComponent,
    EtudiantReviewCreateAdminComponent,
    EtudiantReviewListAdminComponent,
    EtudiantReviewViewAdminComponent,
    EtudiantReviewEditAdminComponent,
    PaiementCreateAdminComponent,
    PaiementListAdminComponent,
    PaiementViewAdminComponent,
    PaiementEditAdminComponent,
    StatutSocialCreateAdminComponent,
    StatutSocialListAdminComponent,
    StatutSocialViewAdminComponent,
    StatutSocialEditAdminComponent,
    EtatEtudiantCreateAdminComponent,
    EtatEtudiantListAdminComponent,
    EtatEtudiantViewAdminComponent,
    EtatEtudiantEditAdminComponent,
    FonctionCreateAdminComponent,
    FonctionListAdminComponent,
    FonctionViewAdminComponent,
    FonctionEditAdminComponent,
    EtudiantCreateAdminComponent,
    EtudiantListAdminComponent,
    EtudiantViewAdminComponent,
    EtudiantEditAdminComponent,
    GroupeEtudiantDetailCreateAdminComponent,
    GroupeEtudiantDetailListAdminComponent,
    GroupeEtudiantDetailViewAdminComponent,
    GroupeEtudiantDetailEditAdminComponent,
    InscriptionCreateAdminComponent,
    InscriptionListAdminComponent,
    InscriptionViewAdminComponent,
    InscriptionEditAdminComponent,
    ConfirmationTokenCreateAdminComponent,
    ConfirmationTokenListAdminComponent,
    ConfirmationTokenViewAdminComponent,
    ConfirmationTokenEditAdminComponent,
    TeacherLocalityCreateAdminComponent,
    TeacherLocalityListAdminComponent,
    TeacherLocalityViewAdminComponent,
    TeacherLocalityEditAdminComponent,
    NiveauEtudeCreateAdminComponent,
    NiveauEtudeListAdminComponent,
    NiveauEtudeViewAdminComponent,
    NiveauEtudeEditAdminComponent,
    GroupeEtudiantCreateAdminComponent,
    GroupeEtudiantListAdminComponent,
    GroupeEtudiantViewAdminComponent,
    GroupeEtudiantEditAdminComponent,
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
  GroupeEtudeCreateAdminComponent,
  GroupeEtudeListAdminComponent,
  GroupeEtudeViewAdminComponent,
  GroupeEtudeEditAdminComponent,
  EtudiantClassRoomCreateAdminComponent,
  EtudiantClassRoomListAdminComponent,
  EtudiantClassRoomViewAdminComponent,
  EtudiantClassRoomEditAdminComponent,
  InteretEtudiantCreateAdminComponent,
  InteretEtudiantListAdminComponent,
  InteretEtudiantViewAdminComponent,
  InteretEtudiantEditAdminComponent,
  EtatEtudiantScheduleCreateAdminComponent,
  EtatEtudiantScheduleListAdminComponent,
  EtatEtudiantScheduleViewAdminComponent,
  EtatEtudiantScheduleEditAdminComponent,
  ProfReviewCreateAdminComponent,
  ProfReviewListAdminComponent,
  ProfReviewViewAdminComponent,
  ProfReviewEditAdminComponent,
  LangueCreateAdminComponent,
  LangueListAdminComponent,
  LangueViewAdminComponent,
  LangueEditAdminComponent,
  SkillCreateAdminComponent,
  SkillListAdminComponent,
  SkillViewAdminComponent,
  SkillEditAdminComponent,
  EtatInscriptionCreateAdminComponent,
  EtatInscriptionListAdminComponent,
  EtatInscriptionViewAdminComponent,
  EtatInscriptionEditAdminComponent,
  InviteStudentCreateAdminComponent,
  InviteStudentListAdminComponent,
  InviteStudentViewAdminComponent,
  InviteStudentEditAdminComponent,
  PackStudentCreateAdminComponent,
  PackStudentListAdminComponent,
  PackStudentViewAdminComponent,
  PackStudentEditAdminComponent,
  PriceCreateAdminComponent,
  PriceListAdminComponent,
  PriceViewAdminComponent,
  PriceEditAdminComponent,
  DictionaryCreateAdminComponent,
  DictionaryListAdminComponent,
  DictionaryViewAdminComponent,
  DictionaryEditAdminComponent,
  EtudiantCoursCreateAdminComponent,
  EtudiantCoursListAdminComponent,
  EtudiantCoursViewAdminComponent,
  EtudiantCoursEditAdminComponent,
  EtudiantReviewCreateAdminComponent,
  EtudiantReviewListAdminComponent,
  EtudiantReviewViewAdminComponent,
  EtudiantReviewEditAdminComponent,
  PaiementCreateAdminComponent,
  PaiementListAdminComponent,
  PaiementViewAdminComponent,
  PaiementEditAdminComponent,
  StatutSocialCreateAdminComponent,
  StatutSocialListAdminComponent,
  StatutSocialViewAdminComponent,
  StatutSocialEditAdminComponent,
  EtatEtudiantCreateAdminComponent,
  EtatEtudiantListAdminComponent,
  EtatEtudiantViewAdminComponent,
  EtatEtudiantEditAdminComponent,
  FonctionCreateAdminComponent,
  FonctionListAdminComponent,
  FonctionViewAdminComponent,
  FonctionEditAdminComponent,
  EtudiantCreateAdminComponent,
  EtudiantListAdminComponent,
  EtudiantViewAdminComponent,
  EtudiantEditAdminComponent,
  GroupeEtudiantDetailCreateAdminComponent,
  GroupeEtudiantDetailListAdminComponent,
  GroupeEtudiantDetailViewAdminComponent,
  GroupeEtudiantDetailEditAdminComponent,
  InscriptionCreateAdminComponent,
  InscriptionListAdminComponent,
  InscriptionViewAdminComponent,
  InscriptionEditAdminComponent,
  ConfirmationTokenCreateAdminComponent,
  ConfirmationTokenListAdminComponent,
  ConfirmationTokenViewAdminComponent,
  ConfirmationTokenEditAdminComponent,
  TeacherLocalityCreateAdminComponent,
  TeacherLocalityListAdminComponent,
  TeacherLocalityViewAdminComponent,
  TeacherLocalityEditAdminComponent,
  NiveauEtudeCreateAdminComponent,
  NiveauEtudeListAdminComponent,
  NiveauEtudeViewAdminComponent,
  NiveauEtudeEditAdminComponent,
  GroupeEtudiantCreateAdminComponent,
  GroupeEtudiantListAdminComponent,
  GroupeEtudiantViewAdminComponent,
  GroupeEtudiantEditAdminComponent,
  ],
  entryComponents: [],
})
export class InscriptionAdminModule { }