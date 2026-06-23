import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
// import { Login } from './pages/login/login';
// import { Register } from './pages/register/register';
import { Songs } from './pages/songs/songs';
import { Playlists } from './pages/playlists/playlists';
import { Admin } from './pages/admin/admin';
import { PlaylistDetails } from './pages/playlist-details/playlist-details';
import { Profile } from './components/profile/profile';

export const routes: Routes = [

    {
        path:"", component:Home
    },
    // {
    // path: 'login',
    // component: Login
    // },
    // {
    //     path: 'register',
    //     component: Register
    // },
    {
    path: 'songs',
    component: Songs
   },
     {
    path: 'playlists',
    component: Playlists
  },
  // {
  //   path: 'admin',
  //   component: Admin
  // },
  { 
    path: 'profile',
    component: Profile
  }
//   {
//   path: 'playlist/:id',
//   component: PlaylistDetails
// }

]
