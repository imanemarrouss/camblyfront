
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { ClassAverageBonusListAdminComponent } from './class-average-bonus-admin/list-admin/class-average-bonus-list-admin.component';
import { NewsListAdminComponent } from './news-admin/list-admin/news-list-admin.component';
import { ContactListAdminComponent } from './contact-admin/list-admin/contact-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'class-average-bonus',
                            children: [
                                {
                                    path: 'list',
                                    component: ClassAverageBonusListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'news',
                            children: [
                                {
                                    path: 'list',
                                    component: NewsListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'contact',
                            children: [
                                {
                                    path: 'list',
                                    component: ContactListAdminComponent ,
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
export class CommonAdminRoutingModule { }
