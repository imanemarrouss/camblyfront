
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { SalaryListAdminComponent } from './salary-admin/list-admin/salary-list-admin.component';
import { WorkloadBonusListAdminComponent } from './workload-bonus-admin/list-admin/workload-bonus-list-admin.component';
import { WorkloadBonusProfListAdminComponent } from './workload-bonus-prof-admin/list-admin/workload-bonus-prof-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'salary',
                            children: [
                                {
                                    path: 'list',
                                    component: SalaryListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'workload-bonus',
                            children: [
                                {
                                    path: 'list',
                                    component: WorkloadBonusListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'workload-bonus-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: WorkloadBonusProfListAdminComponent ,
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
export class SalaryAdminRoutingModule { }
