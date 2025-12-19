import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  techStack: string[];
  details?: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  @Input() project!: Project;
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal(event: Event) {
    event.stopPropagation();
    this.isModalOpen = false;
  }
}
