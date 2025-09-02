import { provideRouter, Routes } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app';
import { HomeComponent } from './pages/home';
import { AboutComponent } from './pages/about';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '' }
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});
