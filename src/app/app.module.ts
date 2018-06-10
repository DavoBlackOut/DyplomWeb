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
import { UserSearchComponent } from './user-search/user-search.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CountriesService } from './countries.service';
import { PostsService } from './posts.service';
import { WebSocketStatePipe } from './web-socket-state.pipe';
import { MessagesService } from './messages.service';
import { ManageComponent } from './manage/manage.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    UserPageComponent,
    RegistrationComponent,
    DialogsComponent,
    UserSearchComponent,
    NavigationComponent,
    WebSocketStatePipe,
    ManageComponent
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
    CountriesService,
    PostsService,
    MessagesService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
