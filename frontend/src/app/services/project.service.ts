import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/projects/project-model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = '/.netlify/functions/get-projects';

  constructor(private http: HttpClient) { }

  getProjects(category?: string, page: number = 1, limit: number = 10): Observable<{ projects: Project[], pagination: { page: number, limit: number, total: number } }> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    if (category) {
      params = params.set('category', category);
    }

    return this.http.get<{ projects: Project[], pagination: { page: number, limit: number, total: number } }>(this.apiUrl, { params });
  }
}
