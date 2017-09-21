import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UserComponent} from './user.component';
import {SharedModule} from '../../shared/shared.module';
import {HomeComponent} from '../../shared/home/home.component';
import {AboutComponent} from '../../shared/about/about.component';
import {ManageComponent} from '../../shared/manage/manage.component';
import {GuardComponent} from '../../services/guard.component';

const userRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component: UserComponent,
        canActivate: [GuardComponent],
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
        userRouting
    ],
    declarations: [
        UserComponent
    ],
    providers: [
        GuardComponent
    ]
})
export class UserModule {
}
