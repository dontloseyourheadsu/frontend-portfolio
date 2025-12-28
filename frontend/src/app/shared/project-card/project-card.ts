import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/projects/project-model';

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
