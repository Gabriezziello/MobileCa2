import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.page.html',
  styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {
  deaths: Observable<any>;
  totalDeaths: Observable<any>;
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {      
    this.api.getTotalDeaths(null).subscribe(res => {
      //  console.log(res[0]);
      this.totalDeaths = res[0];
    });   
    
  }
  getDeaths(event) {
    let search = event.target.value;    
    this.api.getTotalDeaths(search).subscribe(res => {
      // console.log(res[0]);
     this.totalDeaths = res[0];
   });   
    
  }

}
