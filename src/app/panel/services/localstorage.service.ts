import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  userdata: any;

  constructor() { }
  
  localstore(Token){
  localStorage.setItem('accessToken', Token);
  // console.log(localStorage.getItem('accessToken'));
}
}
