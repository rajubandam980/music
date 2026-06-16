import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SongService } from '../../services/song';
import { SONGS } from '../../data/songs-data';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './songs.html',
  styleUrl: './songs.scss',
})
export class Songs implements OnInit {
  
  selectedSong: any = null;

@ViewChild('audioPlayer')
audioPlayer!: ElementRef<HTMLAudioElement>;

  currentSongIndex = -1;
  isPlaying = true;

  currentTime = 0;
  duration = 0;
  progress = 0;

  songs = SONGS;
  searchText = '';
  filteredSongs = SONGS;

  constructor(private songService: SongService,public playerService: PlayerService) {}

  ngOnInit(): void {
    // this.loadSongs();
    this.filteredSongs = this.songs;
  }

  loadSongs(): void {

    // console.log('Loading songs...');

    // this.songService.getAllSongs().subscribe({
    //   next: (data: any) => {

    //     console.log('Songs API response:', data);

    //     // 🔥 IMPORTANT: new reference (avoids Angular update issues)
    //     this.songs = [...data];

    //   },
    //   error: (err: any) => {
    //     console.error(err);
    //   }
    // });



  }

filterSongs(): void {
  const text = this.searchText.toLowerCase();

  this.filteredSongs = this.songs.filter(song =>
    song.title.toLowerCase().includes(text) ||
    song.artist.toLowerCase().includes(text)
  );
}



playSong(song: any): void {
  // this.selectedSong = song;
  // this.currentSongIndex = this.songs.indexOf(song);
  this.playerService.playSong(
    song,
    this.songs
  );  
}

playNext(): void {
  if (this.currentSongIndex < this.songs.length - 1) {
    this.currentSongIndex++;
    this.selectedSong = this.songs[this.currentSongIndex];
  }
}

playPrevious(): void {
  if (this.currentSongIndex > 0) {
    this.currentSongIndex--;
    this.selectedSong = this.songs[this.currentSongIndex];
  }
}
togglePlayPause() {
  const audio = this.audioPlayer.nativeElement;

  if (audio.paused) {
    audio.play();
    this.isPlaying = true;
  } else {
    audio.pause();
    this.isPlaying = false;
  }
}

updateProgress() {

  const audio = this.audioPlayer.nativeElement;

  this.currentTime = audio.currentTime;

  this.progress =
    (audio.currentTime / audio.duration) * 100;
}

setDuration() {

  const audio = this.audioPlayer.nativeElement;

  this.duration = audio.duration;
}

formatTime(seconds: number): string {

  const mins = Math.floor(seconds / 60);

  const secs = Math.floor(seconds % 60);

  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}
}