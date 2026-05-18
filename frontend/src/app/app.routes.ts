import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-component/home.component';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';
import { ProjectsPage } from './pages/projects/projects-page/projects-page';
import { AdminComponent } from './pages/admin/admin';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsPage },
  { path: 'projects/:id', component: ProjectsPage },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];
