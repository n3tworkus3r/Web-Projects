import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  searchMusic(str: string) {
    return this.http
      .post('http://localhost:8080/api/search', { search: str })
      .pipe(map(res => res));
  }

  getArtist(str: string) {
    return this.http
      .post('http://localhost:8080/api/artist', { artistId: str })
      .pipe(map(res => res));
  }

  getAlbums(str: string) {
    return this.http
      .post('http://localhost:8080/api/albums', { artistId: str })
      .pipe(map(res => res));
  }

  getAlbum(str: string) {
    return this.http
      .post('http://localhost:8080/api/album', { albumId: str })
      .pipe(map(res => res));
  }
}
