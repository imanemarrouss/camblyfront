
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { ParcoursListAdminComponent } from './parcours-admin/list-admin/parcours-list-admin.component';
import { CategorieSectionListAdminComponent } from './categorie-section-admin/list-admin/categorie-section-list-admin.component';
import { CoursListAdminComponent } from './cours-admin/list-admin/cours-list-admin.component';
import { SuperCategorieSectionListAdminComponent } from './super-categorie-section-admin/list-admin/super-categorie-section-list-admin.component';
import { VocabularyListAdminComponent } from './vocabulary-admin/list-admin/vocabulary-list-admin.component';
import { VocabularyQuizListAdminComponent } from './vocabulary-quiz-admin/list-admin/vocabulary-quiz-list-admin.component';
import { CentreListAdminComponent } from './centre-admin/list-admin/centre-list-admin.component';
import { SectionItemListAdminComponent } from './section-item-admin/list-admin/section-item-list-admin.component';
import { EtatCoursListAdminComponent } from './etat-cours-admin/list-admin/etat-cours-list-admin.component';
import { SectionListAdminComponent } from './section-admin/list-admin/section-list-admin.component';
import { LevelTestConfigurationListAdminComponent } from './level-test-configuration-admin/list-admin/level-test-configuration-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'parcours',
                            children: [
                                {
                                    path: 'list',
                                    component: ParcoursListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'categorie-section',
                            children: [
                                {
                                    path: 'list',
                                    component: CategorieSectionListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'cours',
                            children: [
                                {
                                    path: 'list',
                                    component: CoursListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'super-categorie-section',
                            children: [
                                {
                                    path: 'list',
                                    component: SuperCategorieSectionListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'vocabulary',
                            children: [
                                {
                                    path: 'list',
                                    component: VocabularyListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'vocabulary-quiz',
                            children: [
                                {
                                    path: 'list',
                                    component: VocabularyQuizListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'centre',
                            children: [
                                {
                                    path: 'list',
                                    component: CentreListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'section-item',
                            children: [
                                {
                                    path: 'list',
                                    component: SectionItemListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-cours',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatCoursListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'section',
                            children: [
                                {
                                    path: 'list',
                                    component: SectionListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'level-test-configuration',
                            children: [
                                {
                                    path: 'list',
                                    component: LevelTestConfigurationListAdminComponent ,
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
export class CourseAdminRoutingModule { }
