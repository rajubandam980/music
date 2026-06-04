import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlaylistService } from '../../services/playlist';
import { SongService } from '../../services/song';
import { Playlist } from '../../models/playlist.model';
import { CreateSong } from '../../models/create-song.model';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin implements OnInit{
    playlists: any[] = [];

      playlist = {
        name: '',
        imageUrl: ''
     };

song: CreateSong = {
  title: '',
  artist: '',
  songUrl: '',
  playlistId: 0
};
    constructor(
    private playlistService:
      PlaylistService,

    private songService:
      SongService
  ) {}
    ngOnInit(): void {
    this.loadPlaylists();
  }

    loadPlaylists() {

    this.playlistService
      .getAllPlaylists()
      .subscribe(data => {
        this.playlists = data;
      });
  }

  createPlaylist() {

    this.playlistService
      .createPlaylist(this.playlist)
      .subscribe(() => {

        alert('Playlist Created');

        this.playlist = {
          name: '',
          imageUrl: ''
        };

        this.loadPlaylists();
      });
  }
  createSong() {

    this.songService
      .createSong(this.song)
      .subscribe(() => {

        alert('Song Added');

        this.song = {
          title: '',
          artist: '',
          songUrl: '',
          playlistId: 0
        };
      });
  }

}
