import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  userdata: any;

  constructor() { }
  
  localstore(){
      
  require( "nativescript-localstorage" );
  localStorage.setItem('accessToken', this.userdata.body.access_token);
  console.log(localStorage.getItem('accessToken'));
}
}