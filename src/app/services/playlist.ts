import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from '../models/playlist.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
    private api =
    'http://localhost:8080/api/playlists';
    
      constructor(
    private http: HttpClient
  ) {}
  
    getAllPlaylists(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.api);
  }

    createPlaylist(
      playlist: any): Observable<any> {

    return this.http.post(
      this.api,
      playlist
    );
  }
}
