import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [AddComponent, UpdateComponent],
  imports: [
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AddEditModule { }
