import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../../panel/services/api.service';
import { ViewChild, ElementRef} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Team } from '../../../dashboard/components/list/Team';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;
  inboundClick : boolean ;
  outboundClick : boolean;
  teamdata:any;
  title: any;
  constructor(private fb : FormBuilder, private apiservice : ApiService, private router : Router, private route : ActivatedRoute) { }
add_editteamform= this.fb.group({
  team_name : [''],
  amount : ['']

})
  ngOnInit() {
 this.list();
 if(this.route.snapshot.queryParamMap.get('team_name')== '' && this.route.snapshot.queryParamMap.get('amount')== '' ){
   this.title= "Add Team"
 }
 else{
   this.title="Update Team"
 }
  }

list= function(){
  this.apiservice.getTeams().subscribe(res =>{
    this.teamdata = res.data;
  console.log(this.teamdata);
});
}
  addteam= function(data){
    if(this.route.snapshot.queryParamMap.get('team_name')== '' && this.route.snapshot.queryParamMap.get('amount')== '' )
    { 
      this.apiservice.addTeam(this.add_editteamform.value).subscribe(data =>{
        this.newteam = data;
      console.log(this.newteam);
      this.closeAddExpenseModal.nativeElement.click();
      this.router.navigate(['list'])
       });
    }
    else 
    {
      this.i= this.route.snapshot.paramMap.get('id');
      console.log(this.i);

      data = {
        team_id:this.teamdata[this.i].team_id,
        team_name : this.add_editteamform.get('team_name').value,
        amount :this.add_editteamform.get('amount').value
      }

      console.log(data);
      this.apiservice.updateTeam(data).subscribe(response =>{
console.log(response);
// console.log( this.teamdata[this.i].team_name);
console.log( data.team_name);
        this.teamdata[this.i].team_name = data.team_name;
        this.teamdata[this.i].amount = data.amount;
// console.log(this.teamdata[this.i]);
      })
    }
  
  }

  delete =function(){
    this.i= this.route.snapshot.paramMap.get('id');
    console.log(this.i);
    
  let data1 = {
      team_id:this.teamdata[this.i].team_id
    }
    this.apiservice.deleteTeam(data1).subscribe(res =>{
      this.deldata = res;
      location.reload();
  //  if(res && res.status==200){
    
  //     this.getTeams()
      
  //  }
  });
  }

}
