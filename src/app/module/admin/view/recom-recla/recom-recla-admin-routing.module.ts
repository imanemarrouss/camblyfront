
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { ReclamationProfListAdminComponent } from './reclamation-prof-admin/list-admin/reclamation-prof-list-admin.component';
import { TypeReclamationEtudiantListAdminComponent } from './type-reclamation-etudiant-admin/list-admin/type-reclamation-etudiant-list-admin.component';
import { TypeReclamationProfListAdminComponent } from './type-reclamation-prof-admin/list-admin/type-reclamation-prof-list-admin.component';
import { ReclamationEtudiantListAdminComponent } from './reclamation-etudiant-admin/list-admin/reclamation-etudiant-list-admin.component';
import { RecommendTeacherListAdminComponent } from './recommend-teacher-admin/list-admin/recommend-teacher-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'reclamation-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: ReclamationProfListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-reclamation-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeReclamationEtudiantListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-reclamation-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeReclamationProfListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'reclamation-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: ReclamationEtudiantListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'recommend-teacher',
                            children: [
                                {
                                    path: 'list',
                                    component: RecommendTeacherListAdminComponent ,
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
export class RecomReclaAdminRoutingModule { }
