import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  currentSong: any = null;

  playlist: any[] = [];

  currentIndex = -1;

  isPlaying = false;

  playSong(song: any, playlist: any[]) {

    this.playlist = playlist;

    this.currentSong = song;

    this.currentIndex = playlist.indexOf(song);

    this.isPlaying = true;
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