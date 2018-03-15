import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthorizationService } from './authorization.service';
import { HttpClientModule } from '@angular/common/http';
import { UserPageComponent } from './user-page/user-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationService } from './registration.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ManageService } from './manage.service';
import { DialogsComponent } from './dialogs/dialogs.component';
import { UsersService } from './users.service';
import { LanguageComponent } from './language/language.component';
import { LanguageService } from './language.service';
import { UserSearchComponent } from './user-search/user-search.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    UserPageComponent,
    RegistrationComponent,
    DialogsComponent,
    LanguageComponent,
    UserSearchComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthorizationService,
    RegistrationService,
    ManageService,
    UsersService,
    LanguageService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
