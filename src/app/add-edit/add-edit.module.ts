import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './components/add/add.component';
import {ApiService} from '../panel/services/api.service'
@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule
  ],
  providers :[ApiService]
})
export class AddEditModule { }
