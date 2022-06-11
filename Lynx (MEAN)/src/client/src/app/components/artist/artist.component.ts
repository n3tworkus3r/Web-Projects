import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist = null;
  albums = null;
  constructor(
    private _spotifyService: SpotifyService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.params.subscribe(params => {
      this._spotifyService.getArtist(params.id).subscribe(artist => {
        this.artist = artist;
      });
      this._spotifyService.getAlbums(params.id).subscribe(albums => {
        this.albums = albums;
      });
    });
  }
}
