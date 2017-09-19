import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {SharedModule} from '../../shared/shared.module';
import {HomeComponent} from '../../shared/home/home.component';
import {AboutComponent} from '../../shared/about/about.component';
import {ManageComponent} from '../../shared/manage/manage.component';
import {AdminGuard} from "../../services/admin.guard";

const adminRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminGuard],
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'manage',
                component: ManageComponent
            }
        ]
    }
]);

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        adminRouting
    ],
    declarations: [
        AdminComponent
    ],
    providers: [
      AdminGuard
    ]
})
export class AdminModule {
}
