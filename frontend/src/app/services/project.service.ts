import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../shared/project-card/project-card';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = '/.netlify/functions/get-projects';

  constructor(private http: HttpClient) { }

  getProjects(category?: string): Observable<Project[]> {
    let params = new HttpParams();
    if (category) {
      params = params.set('category', category);
    }
    return this.http.get<Project[]>(this.apiUrl, { params });
  }
}
