import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  characters: Observable<any>[];  
  page_number = 0;
  page_limit = 10;
  constructor(private router: Router, private api: ApiService) { 
    this.characters = [];
  }
  ngOnInit() {
    this.getCharacters(false, "");
      
      
  }
  getCharacters(isFirstLoad, event){
     this.api.getCharacters(this.page_limit, this.page_limit*this.page_number).subscribe((data: any) => {
      for (let i = 0; i < data.length; i++) {
        this.characters.push(data[i]);
      }
      if (isFirstLoad)
        event.target.complete();

      this.page_number++;
    }, error => {
      console.log(error);
    })
  }
  openDetails(character) {
    //console.log(episode);
    let characterId = character.char_id;
    this.router.navigateByUrl(`/tabs/characters/${characterId}`);
}
doInfinite(event) {
  this.getCharacters(true, event);
}

}
