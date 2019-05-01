import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListComponent } from './dashboard/components/list/list.component';
import { LoginComponent } from './panel/components/login/login.component';
import { AddComponent } from './add-edit/components/add/add.component';
import { UpdateComponent } from './add-edit/components/update/update.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
},
{
  path: 'login',
  component: LoginComponent,
},
{
    path: 'list',
    component: ListComponent,
},
{
    path: 'list/:team_id',
    component: UpdateComponent,
},
{
    path: 'Add',
    component: AddComponent,
},
{
  path: 'Update',
  component: UpdateComponent,
},
];
export const navigationableComponents = [
  LoginComponent,
  ListComponent,
  AddComponent
];
