import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {AboutComponent} from 'app/home/about/about.component';
import {ManageComponent} from './manage/manage.component';

export const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
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
];

export const homeRouting = RouterModule.forChild(homeRoutes);
