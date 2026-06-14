import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlaylistService } from '../../services/playlist';
import { SongService } from '../../services/song';
import { Song } from '../../models/song.model';
import { Playlist } from '../../models/playlist.model';
import { ViewChild, ElementRef } from '@angular/core';
import { PLAYLISTS } from '../../data/playlists-data';
import { PlayerService } from '../../player.service';



@Component({
  selector: 'app-playlists',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './playlists.html',
  styleUrl: './playlists.scss',
})
export class Playlists implements OnInit{

  testMessage = 'RAJU PLAYLIST COMPONENT';

  @ViewChild('audioPlayer')
audioPlayer!: ElementRef<HTMLAudioElement>;
  isPlaying = true;

  // playlists: any[] = [];
  playlists = PLAYLISTS;



  songs: any[] = [];
  selectedPlaylistId: number | null = null;
  selectedSong: any = null;
  selectedPlaylist: any = null;
  currentIndex: number = -1;



    constructor(
    private playlistService: PlaylistService,
    private songService: SongService,
    private cd: ChangeDetectorRef,
    private playerService: PlayerService
    ){
      console.log('PLAYLIST COMPONENT CREATED');
  }
    ngOnInit(): void {
      console.log('Playlists Loaded');
    this.loadPlaylists();
     

  }
loadPlaylists(): void {}
  
  openPlaylist(pl: any) {
    this.selectedPlaylist = pl;
  }
 playSong(song: any) {
  this.playerService.playSong(song, this.selectedPlaylist.songs);
}

  
}