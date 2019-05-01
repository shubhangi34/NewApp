import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../panel/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logout: any;

  constructor(private router : Router, private apiservice: ApiService) { }

  ngOnInit() {
  }
  Add(){
    this.router.navigate(['Add']);
  }
  out(){
    // localStorage.clear();
    // this.router.navigate([""]);
    this.apiservice.logout().subscribe(response =>{
      this.logout= response;
        localStorage.clear();
    this.router.navigate([""]);
      // console.log(this.logout);
    })
  }
}
