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

  // playlists: any[] = [];
   playlists = [
    {
      id: 1,
      name: 'Telugu Hits',
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500',
      songs: [
        {
          title: 'Chikiri Chikiri',
          artist: 'Ar rahaman',
          songUrl: 'music/Chikiri Chikiri.mp3'
        },
      ]
    },
    {
      id: 2,
      name: 'Romantic Hits',
      imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500',
      songs: [
        {
          title: 'Valukanula dana',
          artist: 'Unni Menon',
          songUrl: 'music/Valukanula dana.mp3'
        },
        {
          title: 'Rubaroo rubaa',
          artist: 'Sid',
          songUrl: 'music/Rubaroo.mp3'
        }
      ]
    },
    {
    id: 3,
    name: 'Workout Mix',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500',
    songs:[
      {
          title: 'Pineke badh',
          artist: 'Rahul',
          songUrl:'music/Peene Ke Baad Kick Ass.mp3'
      }
    ]
  },
  {
    id: 4,
    name: 'Party Songs',
    imageUrl: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=500',
    songs: [
        {
          title: 'Rai Rai Raa Raa',
          artist: 'Armaan Malik',
          songUrl: 'music/Rai Rai Raa Raa.mp3'
        }
    ]
  },
  {
    id: 5,
    name: '90s Telugu Classics',
    imageUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500',
    songs:[
      {
      title: 'Hrudayama',
      artist: 'Sid Sriram',
      songUrl: 'music/Hrudayama.mp3'
    },
      
    ]
  },
  {
    id: 6,
    name: 'Melody Mix',
    imageUrl: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=500',
    songs:[
    {
      title: 'Chusane',
      artist: 'Sid Sriram',
      songUrl: 'music/Chusane.mp3'
    }
    ]
  }
  ];



  songs: any[] = [];
  selectedPlaylistId: number | null = null;
  selectedSong: any = null;
  selectedPlaylist: any = null;
  currentIndex: number = -1;



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

  // console.log('Loading playlists...');

  // this.playlistService.getAllPlaylists().subscribe({
  //   next: (data: any) => {

  //     console.log('API Response:', data);

  //     // 🔥 force fresh reference
  //     this.playlists = [];
  //     this.playlists = [...data];

  //     console.log('Final playlists:', this.playlists.length);

  //   },
  //   error: (err: any) => {
  //     console.error(err);
  //   }
  // });

}
  //   openPlaylist(id: number): void {
  //   console.log('Selected Playlist ID:', id);
  //   this.selectedPlaylistId = id;
  //   this.songService.getSongsByPlaylist(id).subscribe({
  //     next: (data:any)=> {
  //       this.songs = data;
  //       this.cd.detectChanges();

  //     },
  //     error: (err:any) => {
  //       console.error(err);
  //     }
  //   })
  //   // console.log('Songs loaded for playlist:', this.songs);

  //   // We will load songs here in the next step
  // }
//   playSong(song: any): void {

//   this.selectedSong = song;

// } 
  openPlaylist(pl: any) {
    this.selectedPlaylist = pl;
  }
    playSong(song: any, index: number) {
    this.selectedSong = song;
    this.currentIndex = index;
  }
  playNext() {
    if (this.currentIndex < this.selectedPlaylist.songs.length - 1) {
      this.currentIndex++;
      this.selectedSong = this.selectedPlaylist.songs[this.currentIndex];
    }
  }

  playPrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.selectedSong = this.selectedPlaylist.songs[this.currentIndex];
    }
  }

  
}