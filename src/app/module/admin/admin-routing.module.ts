
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';

import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {
                            path: 'login',
                            children: [
                                {
                                    path: '',
                                    component: LoginAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {

                            path: 'quiz',
                            loadChildren: () => import('./view/quiz/quiz-admin-routing.module').then(x=>x.QuizAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'faq',
                            loadChildren: () => import('./view/faq/faq-admin-routing.module').then(x=>x.FaqAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        /*{

                            path: 'recom-recla',
                            loadChildren: () => import('./view/recom-recla/recom-recla-admin-routing.module').then(x=>x.Recom-reclaAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },*/
                        {

                            path: 'common',
                            loadChildren: () => import('./view/common/common-admin-routing.module').then(x=>x.CommonAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'alc',
                            loadChildren: () => import('./view/alc/alc-admin-routing.module').then(x=>x.AlcAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'inscription',
                            loadChildren: () => import('./view/inscription/inscription-admin-routing.module').then(x=>x.InscriptionAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'course',
                            loadChildren: () => import('./view/course/course-admin-routing.module').then(x=>x.CourseAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'freetrial',
                            loadChildren: () => import('./view/freetrial/freetrial-admin-routing.module').then(x=>x.FreetrialAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'learning',
                            loadChildren: () => import('./view/learning/learning-admin-routing.module').then(x=>x.LearningAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'homework',
                            loadChildren: () => import('./view/homework/homework-admin-routing.module').then(x=>x.HomeworkAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'prof',
                            loadChildren: () => import('./view/prof/prof-admin-routing.module').then(x=>x.ProfAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'salary',
                            loadChildren: () => import('./view/salary/salary-admin-routing.module').then(x=>x.SalaryAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
