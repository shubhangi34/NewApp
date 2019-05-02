import { Component, OnInit } from '@angular/core';
import { Team } from './Team';
import { ApiService } from '../../../panel/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TEMPORARY_NAME } from '@angular/compiler/src/render3/view/util';
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { View } from 'tns-core-modules/ui/core/view';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
id : any;
team_id : any;
 // teamdata: any;
 heading="Team's Revenue";
 sticky: boolean = false;
   // teamdata= Teamdata;
   menuPosition: any;
   teamdata: any;
   constructor(private apiservice: ApiService,private router:Router, private activatedroute: ActivatedRoute) { }
 
   selectedTeam: Team;
 
 onSelect(t: Team,i){
   this.selectedTeam = t;
   this.router.navigate(['/list/add',i],{
    queryParams : {'team_name': t.team_name, 'amount': t.amount}
   });
  
   // console.log(this.selectedTeam.team_id);
 }
   ngOnInit() {
     // let id = parseInt(this.activatedroute.snapshot.paramMap.get('team_id'))
     this.apiservice.getTeams().subscribe(res =>{
       this.teamdata = res.data;
     console.log(this.teamdata);
   })
 }

 public onCellSwiping(args: ListViewEventData) { 
  const swipeLimits = args.data.swipeLimits; 
  const currentItemView = args.object; 
  this.id = this.teamdata.indexOf(args.object.bindingContext) 
  if (args.data.x < -200) { 
  console.log("Notify perform right action"); 
  } 
  } 
  
  
  public onSwipeCellStarted(args: ListViewEventData) { 
  const swipeLimits = args.data.swipeLimits; 
  const swipeView = args['object']; 
  const rightItem = swipeView.getViewById<View>('delete-view'); 
  swipeLimits.right = rightItem.getMeasuredWidth(); 
  swipeLimits.threshold = rightItem.getMeasuredWidth() / 2; 
  } 
  // << angular-listview-swipe-action-release-limits 
  
  // >> angular-listview-swipe-action-release-execute 
  public onSwipeCellFinished(args: ListViewEventData) { 
  
  } 
  
  public onRightSwipeClick(args){ 
  console.log("hi"); 
  this.id =this.teamdata.indexOf(args.object.bindingContext) 
  console.log(this.id); 
  let data = { 
  team_id : this.teamdata[this.id].team_id 
  } 
  this.apiservice.deleteTeam(data).subscribe(response => { 
  console.log(response); 
  if(response.status && response ==200){ 
  
  } 
  }) 
  }
 
}
