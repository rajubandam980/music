import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlaylistService } from '../../services/playlist';
import { SongService } from '../../services/song';
import { Song } from '../../models/song.model';
import { Playlist } from '../../models/playlist.model';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-playlists',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './playlists.html',
  styleUrl: './playlists.scss',
})
export class Playlists implements OnInit{

  testMessage = 'RAJU PLAYLIST COMPONENT';

  playlists: any[] = [];
  songs: any[] = [];
  selectedPlaylistId: number | null = null;
  selectedSong: any = null;



    constructor(
    private playlistService: PlaylistService,
    private songService: SongService,
    private cd: ChangeDetectorRef
    ){
      console.log('PLAYLIST COMPONENT CREATED');
  }
    ngOnInit(): void {
      console.log('Playlists Loaded');
    this.loadPlaylists();
     

  }
loadPlaylists(): void {

  console.log('Loading playlists...');

  this.playlistService.getAllPlaylists().subscribe({
    next: (data: any) => {

      console.log('API Response:', data);

      // 🔥 force fresh reference
      this.playlists = [];
      this.playlists = [...data];

      console.log('Final playlists:', this.playlists.length);

    },
    error: (err: any) => {
      console.error(err);
    }
  });

}
    openPlaylist(id: number): void {
    console.log('Selected Playlist ID:', id);
    this.selectedPlaylistId = id;
    this.songService.getSongsByPlaylist(id).subscribe({
      next: (data:any)=> {
        this.songs = data;
        this.cd.detectChanges();

      },
      error: (err:any) => {
        console.error(err);
      }
    })
    // console.log('Songs loaded for playlist:', this.songs);

    // We will load songs here in the next step
  }
  playSong(song: any): void {

  this.selectedSong = song;

} 

  
}