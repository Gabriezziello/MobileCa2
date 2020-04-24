import { FavouriteService } from './../../services/favourite.service'; 
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {
  episode: any;
  episodeId = null;
  isFavourite = false;
  STORAGE_KEY = "favouriteEpisodes"; 

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) {}
  ngOnInit() {
    this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getEpisode(this.episodeId).subscribe(res => {
      // console.log(res[0]);
      this.episode = res[0];
    });

    this.favouriteService.isFavourite(this.episodeId,this.STORAGE_KEY).then(isFav => {
      this.isFavourite = isFav;
    });

    };

    favourite() {
      this.favouriteService.favourite(this.episodeId,this.STORAGE_KEY).then(() => {
        this.isFavourite = true;
      });
    };
   
    unfavourite() {
      this.favouriteService.unfavourite(this.episodeId,this.STORAGE_KEY).then(() => {
        this.isFavourite = false;
      });
    };
}