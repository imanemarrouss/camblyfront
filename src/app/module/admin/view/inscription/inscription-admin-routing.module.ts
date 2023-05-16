
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { GroupeEtudeListAdminComponent } from './groupe-etude-admin/list-admin/groupe-etude-list-admin.component';
import { EtudiantClassRoomListAdminComponent } from './etudiant-class-room-admin/list-admin/etudiant-class-room-list-admin.component';
import { InteretEtudiantListAdminComponent } from './interet-etudiant-admin/list-admin/interet-etudiant-list-admin.component';
import { EtatEtudiantScheduleListAdminComponent } from './etat-etudiant-schedule-admin/list-admin/etat-etudiant-schedule-list-admin.component';
import { ProfReviewListAdminComponent } from './prof-review-admin/list-admin/prof-review-list-admin.component';
import { LangueListAdminComponent } from './langue-admin/list-admin/langue-list-admin.component';
import { SkillListAdminComponent } from './skill-admin/list-admin/skill-list-admin.component';
import { EtatInscriptionListAdminComponent } from './etat-inscription-admin/list-admin/etat-inscription-list-admin.component';
import { InviteStudentListAdminComponent } from './invite-student-admin/list-admin/invite-student-list-admin.component';
import { PackStudentListAdminComponent } from './pack-student-admin/list-admin/pack-student-list-admin.component';
import { PriceListAdminComponent } from './price-admin/list-admin/price-list-admin.component';
import { DictionaryListAdminComponent } from './dictionary-admin/list-admin/dictionary-list-admin.component';
import { EtudiantCoursListAdminComponent } from './etudiant-cours-admin/list-admin/etudiant-cours-list-admin.component';
import { EtudiantReviewListAdminComponent } from './etudiant-review-admin/list-admin/etudiant-review-list-admin.component';
import { PaiementListAdminComponent } from './paiement-admin/list-admin/paiement-list-admin.component';
import { StatutSocialListAdminComponent } from './statut-social-admin/list-admin/statut-social-list-admin.component';
import { EtatEtudiantListAdminComponent } from './etat-etudiant-admin/list-admin/etat-etudiant-list-admin.component';
import { FonctionListAdminComponent } from './fonction-admin/list-admin/fonction-list-admin.component';
import { EtudiantListAdminComponent } from './etudiant-admin/list-admin/etudiant-list-admin.component';
import { GroupeEtudiantDetailListAdminComponent } from './groupe-etudiant-detail-admin/list-admin/groupe-etudiant-detail-list-admin.component';
import { InscriptionListAdminComponent } from './inscription-admin/list-admin/inscription-list-admin.component';
import { ConfirmationTokenListAdminComponent } from './confirmation-token-admin/list-admin/confirmation-token-list-admin.component';
import { TeacherLocalityListAdminComponent } from './teacher-locality-admin/list-admin/teacher-locality-list-admin.component';
import { NiveauEtudeListAdminComponent } from './niveau-etude-admin/list-admin/niveau-etude-list-admin.component';
import { GroupeEtudiantListAdminComponent } from './groupe-etudiant-admin/list-admin/groupe-etudiant-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'groupe-etude',
                            children: [
                                {
                                    path: 'list',
                                    component: GroupeEtudeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etudiant-class-room',
                            children: [
                                {
                                    path: 'list',
                                    component: EtudiantClassRoomListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'interet-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: InteretEtudiantListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-etudiant-schedule',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatEtudiantScheduleListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'prof-review',
                            children: [
                                {
                                    path: 'list',
                                    component: ProfReviewListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'langue',
                            children: [
                                {
                                    path: 'list',
                                    component: LangueListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'skill',
                            children: [
                                {
                                    path: 'list',
                                    component: SkillListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-inscription',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatInscriptionListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'invite-student',
                            children: [
                                {
                                    path: 'list',
                                    component: InviteStudentListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'pack-student',
                            children: [
                                {
                                    path: 'list',
                                    component: PackStudentListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'price',
                            children: [
                                {
                                    path: 'list',
                                    component: PriceListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'dictionary',
                            children: [
                                {
                                    path: 'list',
                                    component: DictionaryListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etudiant-cours',
                            children: [
                                {
                                    path: 'list',
                                    component: EtudiantCoursListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etudiant-review',
                            children: [
                                {
                                    path: 'list',
                                    component: EtudiantReviewListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'paiement',
                            children: [
                                {
                                    path: 'list',
                                    component: PaiementListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'statut-social',
                            children: [
                                {
                                    path: 'list',
                                    component: StatutSocialListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatEtudiantListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'fonction',
                            children: [
                                {
                                    path: 'list',
                                    component: FonctionListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: EtudiantListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'groupe-etudiant-detail',
                            children: [
                                {
                                    path: 'list',
                                    component: GroupeEtudiantDetailListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'inscription',
                            children: [
                                {
                                    path: 'list',
                                    component: InscriptionListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'confirmation-token',
                            children: [
                                {
                                    path: 'list',
                                    component: ConfirmationTokenListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'teacher-locality',
                            children: [
                                {
                                    path: 'list',
                                    component: TeacherLocalityListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'niveau-etude',
                            children: [
                                {
                                    path: 'list',
                                    component: NiveauEtudeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'groupe-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: GroupeEtudiantListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class InscriptionAdminRoutingModule { }
