import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
// import { Footer } from './components/footer/footer';
import { GlobalPlayer } from './global-player/global-player';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, GlobalPlayer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('music-player-app');
}
