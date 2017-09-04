import {BrowserModule} from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BaseRequestOptions, HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {SkeletonComponent} from './skeleton/skeleton.component';
import {LoginComponent} from './login/login.component';
import {AuthenticationService} from './services/authentication.service';
import {GuardComponent} from './guard/index';
import {MockBackend} from '@angular/http/testing';
import {fakeBackendProvider} from '../helpers/fakeBackend';
import {SkeletonModule} from './skeleton/skeleton.module';
import {RouterModule} from '@angular/router';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([
        {
            path: 'login', component: LoginComponent
        }
        ], {useHash: true});

@NgModule({
    declarations: [
        AppComponent,
        SkeletonComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        SkeletonModule,
        rootRouting
    ],
    providers: [
        AuthenticationService,
        GuardComponent,
        // fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
