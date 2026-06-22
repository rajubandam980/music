import { Injectable } from '@angular/core';
import { SONGS } from './data/songs-data';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  shuffle = false;
  repeat = false;

  constructor() {
  if (SONGS.length > 0) {
    this.currentSong = SONGS[0];
    this.playlist = SONGS;
    this.currentIndex = 0;
    this.isPlaying = false; // start paused
  }
}

shouldAutoPlay = false;
  currentSong: any = null;

  playlist: any[] = [];

  currentIndex = -1;

  isPlaying = false;

  playSong(song: any, playlist: any[]) {

    this.playlist = playlist;

    this.currentSong = song;

    this.currentIndex = playlist.indexOf(song);

    this.isPlaying = true;
    this.shouldAutoPlay = true;
  }

  playNext() {

    if (this.currentIndex < this.playlist.length - 1) {

      this.currentIndex++;

      this.currentSong =
        this.playlist[this.currentIndex];
    }
  }

  playPrevious() {

    if (this.currentIndex > 0) {

      this.currentIndex--;

      this.currentSong =
        this.playlist[this.currentIndex];
    }
  }
}