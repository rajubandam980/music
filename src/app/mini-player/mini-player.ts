import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-mini-player',
  imports: [CommonModule],
  templateUrl: './mini-player.html',
  styleUrl: './mini-player.scss',
})
export class MiniPlayer {
  constructor(public playerService: PlayerService) {
    
  }
  ngOnInit(){


}

}
