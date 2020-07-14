import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './views/user-list/user-list.component';
import { UserDetailComponent } from './views/user-detail/user-detail.component';
import { NewUserComponent } from './views/new-user/new-user.component';


const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full'},
  { path: 'users', component: UserListComponent },
  { path: 'users/new', component:NewUserComponent },
  { path: 'users/:user_id', component:UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
