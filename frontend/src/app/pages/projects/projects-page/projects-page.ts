import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProjectCard, Project } from '../../../shared/project-card/project-card';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, ProjectCard],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css'
})
export class ProjectsPage implements OnInit {
  projects: Project[] = [];
  title: string = 'Projects';
  subtitle: string = 'Explore my work.';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id === 'low-level') {
        this.title = 'Low Level Projects';
        this.subtitle = 'Exploring systems programming, kernels, and performance optimization.';
        this.loadProjects('low-level');
      } else {
        this.title = 'All Projects';
        this.subtitle = 'A collection of all my projects.';
        // In a real scenario, we might want to load multiple JSONs or a master list.
        // For now, we'll load the low-level ones as they are the only ones we have.
        this.loadProjects('low-level');
      }
    });
  }

  loadProjects(category: string) {
    this.http.get<Project[]>(`data/projects/${category}.json`).subscribe({
      next: (data) => {
        this.projects = data;
      },
      error: (err) => {
        console.error('Failed to load projects', err);
        this.projects = [];
      }
    });
  }
}
