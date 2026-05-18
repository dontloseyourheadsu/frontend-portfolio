import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Project } from '../models/projects/project-model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = '/.netlify/functions/get-projects';
  private adminApiUrl = '/.netlify/functions/admin-projects';
  private uploadApiUrl = '/.netlify/functions/upload-image';

  private projectsSubject = new BehaviorSubject<any>(null);
  projects$ = this.projectsSubject.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) {}

  getProjects(category?: string, page: number = 1, limit: number = 10): Observable<any> {
    let url = `${this.apiUrl}?page=${page}&limit=${limit}`;
    if (category) {
      url += `&category=${category}`;
    }
    return this.http.get<any>(url).pipe(
      tap(res => {
        // Only update the global stream if it's a general fetch (not filtered by category)
        if (!category && page === 1) {
          this.projectsSubject.next(res);
        }
      })
    );
  }

  refreshProjects() {
    this.getProjects().subscribe();
  }

  // Admin CRUD operations
  private getAuthHeaders(): Observable<HttpHeaders> {
    return from(this.authService.getToken()).pipe(
      switchMap(token => {
        return [new HttpHeaders({
          'Authorization': `Bearer ${token}`
        })];
      })
    );
  }

  createProject(project: Partial<Project>): Observable<Project> {
    return this.getAuthHeaders().pipe(
      switchMap(headers => this.http.post<Project>(this.adminApiUrl, project, { headers })),
      tap(() => this.refreshProjects())
    );
  }

  updateProject(project: Project): Observable<Project> {
    return this.getAuthHeaders().pipe(
      switchMap(headers => this.http.put<Project>(this.adminApiUrl, project, { headers })),
      tap(() => this.refreshProjects())
    );
  }

  deleteProject(id: number): Observable<void> {
    return this.getAuthHeaders().pipe(
      switchMap(headers => this.http.delete<void>(`${this.adminApiUrl}?id=${id}`, { headers })),
      tap(() => this.refreshProjects())
    );
  }

  uploadImage(name: string, base64Data: string): Observable<any> {
    return this.getAuthHeaders().pipe(
      switchMap(headers => this.http.post<any>(this.uploadApiUrl, { name, data: base64Data }, { headers }))
    );
  }
}
