import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-component/home.component';
import { AboutComponent } from './pages/about';
import { ProjectsPage } from './pages/projects/projects-page/projects-page';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsPage },
  { path: 'projects/:id', component: ProjectsPage },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];
