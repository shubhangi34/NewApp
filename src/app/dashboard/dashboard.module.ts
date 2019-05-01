import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { FooterComponent } from './components/footer/footer.component';
import {ApiService} from "../panel/services/api.service"
@NgModule({
  declarations: [HeaderComponent, ListComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  providers:[ApiService]
})
export class DashboardModule { }
