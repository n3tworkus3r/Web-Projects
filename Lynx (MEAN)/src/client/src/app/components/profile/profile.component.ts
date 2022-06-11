import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SongsService } from '../../services/songs.service';

class Profile {
  _id: string;
  username: string;
  email: string;
  playlists: playlists;
}

class playlists {
  savedSongs: object[];
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  _id: string;
  username: string;
  email: string;
  playlists: any;

  constructor(
    private authService: AuthService,
    private songsService: SongsService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {
    this.authService.getProfile().subscribe(
      (profile: Profile) => {
        this._id = profile._id;
        this.username = profile.username;
        this.email = profile.email;
        this.playlists = profile.playlists;
        console.log(profile._id);
      },
      err => {
        console.log(err);
        localStorage.clear();
        this.flashMessage.show('You are not logged in!', {
          cssClass: 'alert-danger',
          timeout: 3000
        });
        this.router.navigate(['login']);
        return false;
      }
    );
  }

  // gets called on click when a user deletes a song. deletes based on song id.
  deleteSong(songId, spotifyId) {
    const userId = localStorage.getItem('_id');
    this.songsService.deleteSong(userId, songId).subscribe((result: any) => {
      // if song was deleted successfully, then removes the song from the page
      if (result.success) {
        this.playlists.forEach((a, i) => {
          if (a.spotifyId === spotifyId) {
            this.playlists.splice(i, 1);
          }
        });
      }
      console.log(songId, spotifyId);
    });
  }
}
