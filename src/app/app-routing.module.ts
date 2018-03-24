import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { UserPageComponent } from './user-page/user-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { UserSearchComponent } from './user-search/user-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/Account', pathMatch: 'full' },
  { path: 'Account', component: AccountComponent },
  { path: 'UserPage', component: UserPageComponent },
  { path: 'UserPage/:id', component: UserPageComponent },
  { path: 'Registration', component: RegistrationComponent },
  { path: 'Dialogs', component: DialogsComponent },
  { path: 'Dialogs/:id', component: DialogsComponent },
  { path: 'Search', component: UserSearchComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
