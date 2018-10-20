import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { ListVoteComponent } from './vote/list-vote/list-vote.component';
import { CreateVoteComponent } from './vote/create-vote/create-vote.component';

const appRoutes: Routes = [
  {

    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',

  },
  {

    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full',

  },
  {

    path: 'create-vote',
    component: CreateVoteComponent,
    pathMatch: 'full',

  },
  {

    path: 'list-vote',
    component: ListVoteComponent,
    pathMatch: 'full',

  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class routing { }
