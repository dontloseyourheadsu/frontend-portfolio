import { Component, OnInit, HostListener, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProjectCard } from '../../../shared/project-card/project-card';
import { ProjectService } from '../../../services/project.service';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LoadingComponent } from '../../../shared/loading/loading.component';
import { Project } from '../../models/projects/project-model';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, ProjectCard, LoadingComponent],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsPage implements OnInit {
  projects: Project[] = [];
  title: string = 'Projects';
  subtitle: string = 'Explore my work.';
  currentPage: number = 1;
  totalProjects: number = 0;
  projectsPerPage: number = 10;
  isLoading: boolean = false;

  private scrollSubject = new Subject<Event>();

  constructor(private route: ActivatedRoute, private projectService: ProjectService, private cdr: ChangeDetectorRef, private renderer: Renderer2) { }

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
        this.loadProjects('low-level');
      }
    });

    this.scrollSubject.pipe(debounceTime(200)).subscribe(event => {
      const target = event.target as HTMLElement;
      if (target.scrollTop + target.clientHeight >= target.scrollHeight - 100) {
        if (this.projects.length < this.totalProjects) {
          this.currentPage++;
          this.loadProjects('low-level');
        }
      }
    });
  }

  loadProjects(category: string) {
    if (this.isLoading) return;

    this.isLoading = true;
    this.projectService.getProjects(category, this.currentPage, this.projectsPerPage).subscribe({
      next: (data) => {
        this.projects = [...this.projects, ...data.projects];
        this.totalProjects = data.pagination.total;
        this.isLoading = false;
        this.cdr.detectChanges(); // Trigger change detection manually
      },
      error: (err) => {
        console.error('Failed to load projects', err);
        this.isLoading = false;
      }
    });
  }

  onScroll(event: Event) {
    this.scrollSubject.next(event);
  }
}
