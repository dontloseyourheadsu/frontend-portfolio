import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { AuthService } from '../../services/auth.service';
import { Project } from '../../models/projects/project-model';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="admin-container inter-regular">
      <header class="admin-header">
        <div class="title-group">
          <h1>Admin Dashboard</h1>
          <p class="subtitle">Manage your portfolio projects and content.</p>
        </div>
        <div class="user-info" *ngIf="authService.user$ | async as user">
          <span class="user-email">{{ user.email }}</span>
          <button (click)="authService.logout()" class="btn-secondary logout-btn">
            <span class="material-icons">logout</span>
            Logout
          </button>
        </div>
      </header>

      <div class="admin-grid">
        <!-- Form Section -->
        <section class="card form-section">
          <div class="card-header">
            <span class="material-icons">{{ editingProject ? 'edit' : 'add_circle' }}</span>
            <h2>{{ editingProject ? 'Edit Project' : 'Add New Project' }}</h2>
          </div>
          
          <form (submit)="saveProject()" class="admin-form">
            <div class="form-group">
              <label for="title">Project Title</label>
              <input id="title" [(ngModel)]="currentProject.title" name="title" placeholder="e.g. Memory Allocator" required>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="category">Category</label>
                <input id="category" [(ngModel)]="currentProject.category" name="category" placeholder="e.g. low-level" required>
              </div>
              <div class="form-group">
                <label for="projectUrl">Project URL</label>
                <input id="projectUrl" [(ngModel)]="currentProject.projectUrl" name="projectUrl" placeholder="https://github.com..." required>
              </div>
            </div>

            <div class="form-group">
              <label for="description">Short Description</label>
              <textarea id="description" [(ngModel)]="currentProject.description" name="description" placeholder="A brief overview of the project..." rows="3" required></textarea>
            </div>

            <div class="form-group">
              <label for="techStack">Tech Stack</label>
              <input id="techStack" [(ngModel)]="techStackInput" name="techStack" placeholder="C++, Assembly, Rust (comma separated)" required>
            </div>

            <div class="form-group">
              <label>Project Image</label>
              <div class="image-upload-zone" [class.has-image]="currentProject.imageUrl">
                <input type="file" id="fileInput" (change)="onFileSelected($event)" accept="image/*" class="file-input">
                <label for="fileInput" class="upload-label">
                  <span class="material-icons">add_photo_alternate</span>
                  <span>{{ currentProject.imageUrl ? 'Change Image' : 'Upload Image' }}</span>
                </label>
                <div *ngIf="uploading" class="upload-overlay">
                  <span class="material-icons rotating">sync</span>
                  <span>Uploading...</span>
                </div>
                <img *ngIf="currentProject.imageUrl && !uploading" [src]="currentProject.imageUrl" class="image-preview">
              </div>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn-primary" [disabled]="uploading">
                <span class="material-icons">{{ editingProject ? 'save' : 'publish' }}</span>
                {{ editingProject ? 'Update' : 'Create' }} Project
              </button>
              <button type="button" *ngIf="editingProject" (click)="resetForm()" class="btn-outline">
                Cancel
              </button>
            </div>
          </form>
        </section>

        <!-- List Section -->
        <section class="card list-section">
          <div class="card-header">
            <span class="material-icons">list</span>
            <h2>Existing Projects</h2>
          </div>

          <div class="project-table-wrapper">
            <table class="project-table">
              <thead>
                <tr>
                  <th>Preview</th>
                  <th>Details</th>
                  <th>Category</th>
                  <th class="actions-cell">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let project of projects">
                  <td class="preview-cell">
                    <img [src]="project.imageUrl" alt="Preview" class="table-thumb">
                  </td>
                  <td>
                    <div class="table-title">{{ project.title }}</div>
                    <div class="table-url">{{ project.projectUrl }}</div>
                  </td>
                  <td><span class="category-badge">{{ project.category }}</span></td>
                  <td class="actions-cell">
                    <button (click)="editProject(project)" class="icon-btn edit-btn" title="Edit">
                      <span class="material-icons">edit</span>
                    </button>
                    <button (click)="deleteProject(project.id!)" class="icon-btn delete-btn" title="Delete">
                      <span class="material-icons">delete</span>
                    </button>
                  </td>
                </tr>
                <tr *ngIf="projects.length === 0">
                  <td colspan="4" class="empty-state">No projects found. Start by adding one!</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      overflow-y: auto;
      background-color: var(--background-color);
    }

    .admin-container {
      padding: 2.5rem;
      max-width: 1400px;
      margin: 0 auto;
      color: var(--text-color);
    }

    .admin-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 3rem;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 1.5rem;
    }

    .title-group h1 {
      font-size: 2.2rem;
      margin: 0 0 0.5rem 0;
      color: var(--primary-color);
      font-weight: 700;
    }

    .subtitle {
      color: var(--muted-text-color);
      margin: 0;
    }

    .user-info {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      background: var(--background-color-secondary);
      padding: 0.5rem 1rem;
      border-radius: 50px;
      border: 1px solid var(--border-color);
    }

    .user-email {
      font-size: 0.9rem;
      color: var(--muted-text-color);
    }

    .admin-grid {
      display: grid;
      grid-template-columns: 450px 1fr;
      gap: 2rem;
      align-items: start;
    }

    @media (max-width: 1100px) {
      .admin-grid { grid-template-columns: 1fr; }
    }

    .card {
      background: var(--background-color-secondary);
      border-radius: 12px;
      border: 1px solid var(--border-color);
      overflow: hidden;
    }

    .card-header {
      padding: 1.25rem 1.5rem;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      align-items: center;
      gap: 0.75rem;
      background: var(--secondary-background-color);
    }

    .card-header h2 {
      margin: 0;
      font-size: 1.2rem;
      font-weight: 600;
    }

    .card-header .material-icons {
      color: var(--primary-color);
    }

    .admin-form {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    label {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--muted-text-color);
    }

    input, textarea {
      background: var(--input-background);
      border: 1px solid var(--border-color);
      border-radius: 6px;
      padding: 0.75rem;
      color: var(--text-color);
      font-family: inherit;
      font-size: 0.95rem;
      transition: border-color 0.2s, box-shadow 0.2s;
    }

    input:focus, textarea:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(143, 122, 255, 0.15);
    }

    .image-upload-zone {
      position: relative;
      border: 2px dashed var(--border-color);
      border-radius: 8px;
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      cursor: pointer;
      transition: border-color 0.2s, background 0.2s;
    }

    .image-upload-zone:hover {
      border-color: var(--primary-color);
      background: rgba(143, 122, 255, 0.05);
    }

    .file-input {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
      z-index: 2;
    }

    .upload-label {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      color: var(--muted-text-color);
      z-index: 1;
    }

    .image-preview {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.4;
    }

    .upload-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.6);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      z-index: 3;
    }

    .rotating {
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .form-actions {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    .btn-primary {
      background: var(--button-background);
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex: 1;
      justify-content: center;
      transition: background 0.2s;
    }

    .btn-primary:hover:not(:disabled) {
      background: var(--button-hover);
    }

    .btn-outline {
      background: transparent;
      border: 1px solid var(--border-color);
      color: var(--text-color);
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.2s;
    }

    .btn-outline:hover {
      background: var(--secondary-background-color);
    }

    .btn-secondary {
      background: transparent;
      border: none;
      color: var(--muted-text-color);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 4px;
    }

    .btn-secondary:hover {
      color: var(--text-color);
      background: rgba(255,255,255,0.05);
    }

    /* Table Styles */
    .project-table-wrapper {
      overflow-x: auto;
    }

    .project-table {
      width: 100%;
      border-collapse: collapse;
    }

    .project-table th {
      text-align: left;
      padding: 1rem 1.5rem;
      font-size: 0.85rem;
      color: var(--muted-text-color);
      border-bottom: 1px solid var(--border-color);
      background: var(--secondary-background-color);
    }

    .project-table td {
      padding: 1rem 1.5rem;
      border-bottom: 1px solid var(--border-color);
      vertical-align: middle;
    }

    .preview-cell { width: 100px; }
    .table-thumb {
      width: 80px;
      height: 50px;
      object-fit: cover;
      border-radius: 4px;
      background: var(--input-background);
    }

    .table-title {
      font-weight: 600;
      color: var(--text-color);
      margin-bottom: 0.25rem;
    }

    .table-url {
      font-size: 0.75rem;
      color: var(--muted-text-color);
      max-width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .category-badge {
      background: var(--tertiary-color);
      color: var(--nav-link-color);
      padding: 0.2rem 0.6rem;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: capitalize;
    }

    .actions-cell {
      text-align: right;
      white-space: nowrap;
      width: 120px;
    }

    .icon-btn {
      background: transparent;
      border: none;
      padding: 0.5rem;
      border-radius: 6px;
      cursor: pointer;
      margin-left: 0.5rem;
      transition: background 0.2s, color 0.2s;
    }

    .edit-btn { color: var(--muted-text-color); }
    .edit-btn:hover { background: rgba(143, 122, 255, 0.1); color: var(--primary-color); }

    .delete-btn { color: var(--muted-text-color); }
    .delete-btn:hover { background: rgba(217, 83, 79, 0.1); color: #ff6b6b; }

    .empty-state {
      text-align: center;
      padding: 3rem !important;
      color: var(--muted-text-color);
      font-style: italic;
    }
  `]
})
export class AdminComponent implements OnInit {
  projects: Project[] = [];
  currentProject: Partial<Project> = {};
  techStackInput: string = '';
  editingProject = false;
  uploading = false;

  constructor(
    private projectService: ProjectService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getProjects().subscribe(res => {
      this.projects = res.projects;
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.uploading = true;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const base64Data = e.target.result;
        const fileName = `${Date.now()}-${file.name}`;
        this.projectService.uploadImage(fileName, base64Data).subscribe({
          next: (res) => {
            this.currentProject.imageUrl = res.url;
            this.uploading = false;
          },
          error: () => {
            alert('Image upload failed');
            this.uploading = false;
          }
        });
      };
      reader.readAsDataURL(file);
    }
  }

  saveProject() {
    this.currentProject.techStack = this.techStackInput.split(',').map(s => s.trim());
    
    if (this.editingProject) {
      this.projectService.updateProject(this.currentProject as Project).subscribe(() => {
        this.loadProjects();
        this.resetForm();
      });
    } else {
      this.projectService.createProject(this.currentProject).subscribe(() => {
        this.loadProjects();
        this.resetForm();
      });
    }
  }

  editProject(project: Project) {
    this.editingProject = true;
    this.currentProject = { ...project };
    this.techStackInput = project.techStack.join(', ');
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  deleteProject(id: number) {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject(id).subscribe(() => {
        this.loadProjects();
      });
    }
  }

  resetForm() {
    this.currentProject = {};
    this.techStackInput = '';
    this.editingProject = false;
  }
}
