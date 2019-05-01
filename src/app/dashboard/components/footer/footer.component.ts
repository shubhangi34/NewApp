import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../panel/services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  teamdata: any;
  total: any=0;

  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.apiservice.getTeams().subscribe(res =>{
      this.teamdata = res.data;
    // console.log(this.teamdata.amount);
    for(let i=0;i<this.teamdata.length;i++){
      this.total += this.teamdata[i].amount;
    // console.log(this.total);

    }

  })
  }

}
