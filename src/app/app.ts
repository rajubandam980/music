import { Component, OnInit, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
// import { Footer } from './components/footer/footer';
// import { GlobalPlayer } from './global-player/global-player';
import { MiniPlayer } from './mini-player/mini-player';
import { FullPlayer } from './full-player/full-player';
import { PlayerService } from './player.service';
import { CommonModule } from '@angular/common';
import { AudioPlayer } from './audio-player/audio-player';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, MiniPlayer, 
    FullPlayer,CommonModule, RouterModule, AudioPlayer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('music-player-app');
  constructor(
 public playerService: PlayerService,
 private cdr: ChangeDetectorRef
){}
ngOnInit(){

 this.playerService.initializePlayer();

}
}
