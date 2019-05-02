import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  userdata: any;
  constructor(private myRoute: Router) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('accessToken'))
     {
      return true;
    }
    else 
    {
      console.log("in false condition of canactivate");
      this.myRoute.navigate(['']);
      return false;
    }
  }
}
