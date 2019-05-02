import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './dashboard/components/list/list.component';
import { LoginComponent } from './panel/components/login/login.component';
import { AddComponent } from './add-edit/components/add/add.component';
import { HeaderComponent } from './dashboard/components/header/header.component';
import { FooterComponent } from './dashboard/components/footer/footer.component';


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
    children : [{
      path: 'add/:id',
      component: AddComponent,
    }
  ]
}
];
export const navigationableComponents = [
  LoginComponent,
  ListComponent,
  AddComponent,
  HeaderComponent,
  FooterComponent

];
