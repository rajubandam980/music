import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../models/song.model';
import { CreateSong } from '../models/create-song.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {

   private api = 'http://localhost:8080/api/songs';

  constructor(private http: HttpClient) {}

  createSong(song: CreateSong): Observable<Song> {
    return this.http.post<Song>(this.api, song);
  }

  getSongsByPlaylist(playlistId: number): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.api}/playlist/${playlistId}`);
  }

  deleteSong(songId: number) {
  return this.http.delete(`${this.api}/${songId}`);
}
  getAllSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.api,);
  }
}
