  import { CommonModule } from '@angular/common';
  import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
  import { RouterModule } from '@angular/router';
  import { PlayerService } from '../player.service';

  @Component({
    selector: 'app-global-player',
    imports: [CommonModule, RouterModule],
    templateUrl: './global-player.html',
    styleUrl: './global-player.scss',
  })
  export class GlobalPlayer {

    @ViewChild('audioPlayer')
    audioPlayer!: ElementRef<HTMLAudioElement>;
    
    constructor(public playerService: PlayerService) {}

    currentTime = 0;

    duration = 0;

    volume = 1;


ngAfterViewChecked() {

  if (
    this.playerService.currentSong &&
    this.playerService.isPlaying
  ) {

    const audio = this.audioPlayer.nativeElement;

    if (audio.paused) {
      audio.play().catch(() => {});
    }
  }
}


    togglePlayPause() {
  const audio = this.audioPlayer.nativeElement;

  if (audio.paused) {
    audio.play();
    this.playerService.isPlaying = true;
  } else {
    audio.pause();
    this.playerService.isPlaying = false;
  }
}

playNext() {

  // SHUFFLE MODE
  if (this.playerService.shuffle) {

    const randomIndex =
      Math.floor(
        Math.random() *
        this.playerService.playlist.length
      );

    this.playerService.currentIndex =
      randomIndex;

  } else {

    this.playerService.currentIndex++;

  }

  // REPEAT PLAYLIST
  if (
    this.playerService.currentIndex >=
    this.playerService.playlist.length
  ) {

    if (this.playerService.repeat) {

      this.playerService.currentIndex = 0;

    } else {

      return;
    }
  }

  this.playerService.currentSong =
    this.playerService.playlist[
      this.playerService.currentIndex
    ];

  const audio = this.audioPlayer.nativeElement;

  audio.src =
    this.playerService.currentSong.songUrl;

  // audio.load();

  // audio.play();

  this.playerService.isPlaying = true;
}

playPrevious() {

  if (this.playerService.currentIndex > 0) {

    this.playerService.currentIndex--;

    this.playerService.currentSong =
      this.playerService.playlist[
        this.playerService.currentIndex
      ];

    const audio = this.audioPlayer.nativeElement;

    audio.src =
      this.playerService.currentSong.songUrl;

    // audio.load();

    // audio.play();

    this.playerService.isPlaying = true;
  }
}

    updateProgress() {

      const audio = this.audioPlayer.nativeElement;

      this.currentTime = audio.currentTime;
    }

  setDuration() {
    const audio = this.audioPlayer.nativeElement;

    this.duration = audio.duration;
  }

  seekAudio(event: Event) {
    const value = +(event.target as HTMLInputElement).value;

    const audio = this.audioPlayer.nativeElement;

    audio.currentTime = value;

    this.currentTime = value;
  }

    changeVolume(event: Event) {

      const value =
        +(event.target as HTMLInputElement).value;

      this.volume = value;

      this.audioPlayer.nativeElement.volume = value;
    }

  formatTime(seconds: number): string {

    if (!seconds) {
      return '0:00';
    }

    const mins = Math.floor(seconds / 60);

    const secs = Math.floor(seconds % 60);

    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  toggleShuffle() {
  this.playerService.shuffle =
    !this.playerService.shuffle;
}

toggleRepeat() {
  this.playerService.repeat =
    !this.playerService.repeat;
}
  }
