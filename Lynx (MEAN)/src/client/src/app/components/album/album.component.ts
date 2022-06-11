import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SongsService } from '../../services/songs.service';

class Profile {
  _id: string;
  username: string;
  email: string;
}

class res {
  success: string;
  error: string;
}

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album = null;
  error = false;
  // saveIndex tracks which song was saved to display the result for the right song
  saveIndex: number;
  saveSucc: string;
  saveErr: string;

  constructor(
    private authService: AuthService,
    private songsService: SongsService,
    private _spotifyService: SpotifyService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    // loads all the songs for a specified album, based on the album id which is in the route
    this._route.params.subscribe(params => {
      this._spotifyService.getAlbum(params.id).subscribe(album => {
        this.album = album;
      });
    });

    this.authService.getProfile().subscribe(
      (profile: Profile) => {
        this.error = false;
      },
      err => {
        // this prevents the save button from showing if a user isn't authed
        this.error = true;
      }
    );
  }

  getSongId(buttonIndex, spotifyId, name, artist, preview, img) {
    // buttonIndex is used to track which song was saved when
    // displaying the result message to the user
    this.saveIndex = buttonIndex;
    const song = { spotifyId, name, artist, preview, img };
    const userId = localStorage.getItem('_id');
    this.songsService.saveSong(song, userId).subscribe((res: res) => {
      return res.success
        ? (this.saveSucc = res.success)
        : (this.saveErr = res.error);
    });
  }
}
