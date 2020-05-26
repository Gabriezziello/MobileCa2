import { FavouriteService } from './../../services/favourite.service'; 
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {
  character: any;
  characterId = null;
  isFavourite = false;
  STORAGE_KEY = "favouriteCharacters"; 
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) {}
  ngOnInit() {
    this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getCharacter(this.characterId).subscribe(res => {
      console.log(res[0]);
      this.character = res[0];
    });
    this.favouriteService.isFavourite(this.characterId,this.STORAGE_KEY).then(isFav => {
      this.isFavourite = isFav;
    });
  };

  favourite() {
    this.favouriteService.favourite(this.characterId,this.STORAGE_KEY).then(() => {
      this.isFavourite = true;
    });
  };
 
  unfavourite() {
    this.favouriteService.unfavourite(this.characterId,this.STORAGE_KEY).then(() => {
      this.isFavourite = false;
    });
  };

};