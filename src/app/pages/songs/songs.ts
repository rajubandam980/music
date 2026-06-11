import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SongService } from '../../services/song';

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

    songs = [
    {
      title: 'Chikri Chikri',
      artist: 'Rahul Sipligunj',
      songUrl: 'music/Chikiri Chikiri.mp3'
    },
    {
      title: 'Rai Rai Ra Ra',
      artist: 'Armaan Malik',
      songUrl: 'music/Rai Rai Raa Raa.mp3'
    },
    {
      title: 'Peene ke Bad',
      artist: 'Sid Sriram',
      songUrl: 'music/Peene Ke Baad Kick Ass.mp3'
    },
    {
      title: 'Rubaroo rubaa',
      artist: 'Sid Sriram',
      songUrl: 'music/Rubaroo.mp3'
    },
    {
      title: 'Hrudayama',
      artist: 'Sid Sriram',
      songUrl: 'music/Hrudayama.mp3'
    },
    {
      title: 'Chusane',
      artist: 'Sid Sriram',
      songUrl: 'music/Chusane.mp3'
    },
    {
      title: 'Valukanula dana',
      artist: 'Unni Menon',
      songUrl: 'music/Valukanula dana.mp3'
    }

  ];

  constructor(private songService: SongService) {}

  ngOnInit(): void {
    // this.loadSongs();
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
playSong(song: any): void {
  this.selectedSong = song;
  this.currentSongIndex = this.songs.indexOf(song);
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