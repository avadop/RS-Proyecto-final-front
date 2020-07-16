import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './views/user/user-list/user-list.component';
import { UserDetailComponent } from './views/user/user-detail/user-detail.component';
import { NewUserComponent } from './views/user/new-user/new-user.component';
import { EditUserComponent } from './views/user/edit-user/edit-user.component';
import { Error404Component } from './views/error404/error404.component';


const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full'},
  { path: 'users', component: UserListComponent },
  { path: 'users/new', component:NewUserComponent },
  { path: 'users/:user_id', component:UserDetailComponent },
  { path: 'users/:user_id/edit', component:EditUserComponent },
  { path: '**', component:Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
