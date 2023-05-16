
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { ReponseEtudiantListAdminComponent } from './reponse-etudiant-admin/list-admin/reponse-etudiant-list-admin.component';
import { TypeDeQuestionListAdminComponent } from './type-de-question-admin/list-admin/type-de-question-list-admin.component';
import { QuizListAdminComponent } from './quiz-admin/list-admin/quiz-list-admin.component';
import { QuestionListAdminComponent } from './question-admin/list-admin/question-list-admin.component';
import { EtatReponseListAdminComponent } from './etat-reponse-admin/list-admin/etat-reponse-list-admin.component';
import { QuizEtudiantListAdminComponent } from './quiz-etudiant-admin/list-admin/quiz-etudiant-list-admin.component';
import { ReponseListAdminComponent } from './reponse-admin/list-admin/reponse-list-admin.component';
import { ClassRoomListAdminComponent } from './class-room-admin/list-admin/class-room-list-admin.component';
import { QuizClassRoomListAdminComponent } from './quiz-class-room-admin/list-admin/quiz-class-room-list-admin.component';
import {ExamComponent} from "./exam/exam.component";
import {ViewquizComponent} from "./viewquiz/viewquiz.component";
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'reponse-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: ReponseEtudiantListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-de-question',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeDeQuestionListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'quiz',
                            children: [
                                {
                                    path: 'list',
                                    component: QuizListAdminComponent ,
                                    canActivate: [AuthGuard]
                                },
                                {
                                    path: 'exam',
                                    component: ExamComponent,
                                    canActivate: [AuthGuard]
                                },
                                {
                                    path: 'viewquiz',
                                    component: ViewquizComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'question',
                            children: [
                                {
                                    path: 'list',
                                    component: QuestionListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-reponse',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatReponseListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'quiz-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: QuizEtudiantListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'reponse',
                            children: [
                                {
                                    path: 'list',
                                    component: ReponseListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'class-room',
                            children: [
                                {
                                    path: 'list',
                                    component: ClassRoomListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'quiz-class-room',
                            children: [
                                {
                                    path: 'list',
                                    component: QuizClassRoomListAdminComponent ,
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
export class QuizAdminRoutingModule { }
