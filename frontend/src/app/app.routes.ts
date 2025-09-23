import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-component/home.component';
import { AboutComponent } from './pages/about';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];
