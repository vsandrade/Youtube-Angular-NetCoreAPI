import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Professor } from '../models/Professor';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SharedService } from './shared.service';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService extends SharedService  {

  baseURL = `${environment.mainUrlAPI}professor`;

  constructor(private http: HttpClient) {
    super();
   }

  professores$ = this.http.get<Professor[]>(this.baseURL)
    .pipe(
      catchError(this.handleError)
    );

  getById(id: number): Observable<Professor> {
    return this.http.get<Professor>(`${this.baseURL}/${id}`);
  }

  getByAlunoId(id: number): Observable<Professor[]> {
    return this.http.get<Professor[]>(`${this.baseURL}/ByAluno/${id}`);
  }

  post(professor: Professor) {
    return this.http.post(this.baseURL, Professor);
  }

  put(professor: Professor) {
    return this.http.put(`${this.baseURL}/${professor.id}`, Professor);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}
