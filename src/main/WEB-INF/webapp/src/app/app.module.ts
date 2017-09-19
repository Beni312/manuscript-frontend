import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from '../helpers/fakeBackend';
import { RouterModule } from '@angular/router';
import { RegistrationService } from './services/registration.service';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdminModule } from './modules/admin/admin.module';
import { UserModule } from './modules/user/user.module';
import { SharedModule } from './shared/shared.module';
import { AuthenticationService } from './services/authentication.service';
import { GuardComponent } from './services/guard.component';
import {NavigationComponent} from "./services/NavigationComponent";

const rootRouting: ModuleWithProviders = RouterModule.forRoot([
        {
            path: 'login', component: LoginComponent
        },
        {
            path: 'registration', component: RegistrationComponent
        },
        // //TODO ezzel baszni valamit mert nagyon trágya
        // {
        //     path: '**',
        //     component: NavigationComponent
        // },
        ], {useHash: true});

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegistrationComponent
    ],
    imports: [
        AdminModule,
        UserModule,
        SharedModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        rootRouting
    ],
    providers: [
        GuardComponent,
        AuthenticationService,
        // fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions,
        RegistrationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
