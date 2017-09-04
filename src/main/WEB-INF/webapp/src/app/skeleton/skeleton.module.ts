import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationService} from '../services/authentication.service';
import {ManageComponent} from './manage/manage.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {GuardComponent} from '../guard/guard.component';
import {SkeletonComponent} from './skeleton.component';

const skeletonRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component: SkeletonComponent,
        canActivate: [ GuardComponent ],
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
        skeletonRouting
    ],
    declarations: [
        ManageComponent,
        AboutComponent,
        HomeComponent
    ],
    providers: [
        AuthenticationService
    ]
})
export class SkeletonModule {
}
