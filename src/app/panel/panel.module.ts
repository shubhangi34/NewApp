import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {ApiService} from '../panel/services/api.service'
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule
  ],
  providers :[ApiService]
})
export class PanelModule { }
