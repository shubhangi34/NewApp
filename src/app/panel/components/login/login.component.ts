import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  code:number;
  alert1="Required field!";


  constructor(private fb: FormBuilder ,private apiservice: ApiService,private router:Router, private lcs:LocalstorageService) { }

  loginform= this.fb.group({
    email : ['',Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
    password : ['',Validators.compose([Validators.required,Validators.minLength(6)])],
  
  })

  submit = function(data) {
    
    this.apiservice.login(this.loginform.value).subscribe(data =>{
      this.userdata = data;
    // console.log(this.userdata);
    // console.log(this.userdata.status);

      if(this.userdata.status == 200){
        // require( "nativescript-localstorage" );
         this.lcs.localstore(this.userdata.body.access_token);
    // console.log(localStorage.getItem('accessToken'));
      this.router.navigate(['/list']);

      }
      else 
    
      { 
        console.log(this.userdata.message);
       alert('Session expired. Please login again');
      }
     });

   }

  ngOnInit() {
  //   if (localStorage.getItem('user_token'))
  //   {
    
  //   this.router.navigate(['/dashboard'])
  //  }
}

}
