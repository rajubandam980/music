import { Routes } from '@angular/router';
import { SongPlayer } from './song-player/song-player';

export const routes: Routes = [
    {path:'playsong', component:SongPlayer},
    {path:'', redirectTo:'/playsong',pathMatch:'full'}
];
