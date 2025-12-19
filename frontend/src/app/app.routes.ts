import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-component/home.component';
import { AboutComponent } from './pages/about';
import { ProjectsPage } from './pages/projects/projects-page/projects-page';
import { LowLevelProjectsPage } from './pages/projects/low-level-projects-page/low-level-projects-page';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsPage },
  { path: 'projects/low-level', component: LowLevelProjectsPage },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];
