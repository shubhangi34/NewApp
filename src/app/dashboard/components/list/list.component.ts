import { Component, OnInit } from '@angular/core';
import { Team } from './Team';
import { ApiService } from '../../../panel/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 // teamdata: any;
 heading="Team's Revenue";
 sticky: boolean = false;
   // teamdata= Teamdata;
   menuPosition: any;
   teamdata: any;
   constructor(private apiservice: ApiService,private router:Router, private activatedroute: ActivatedRoute) { }
 
   selectedTeam: Team;
 
 onSelect(t: Team){
   this.selectedTeam = t;
   this.router.navigate(['/list',t.team_id]);
   // console.log(this.selectedTeam.team_id);
 }
   ngOnInit() {
     // let id = parseInt(this.activatedroute.snapshot.paramMap.get('team_id'))
     this.apiservice.getTeams().subscribe(res =>{
       this.teamdata = res.data;
     console.log(this.teamdata);
   })
 }

 
}
