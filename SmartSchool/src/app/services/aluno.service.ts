import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Aluno } from '../models/Aluno';

import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AlunoService extends SharedService {

  baseURL = `${environment.mainUrlAPI}aluno`;

  constructor(private http: HttpClient) {
    super();
  }

  alunos$ = this.http.get<Aluno[]>(this.baseURL)
    .pipe(
      catchError(this.handleError)
    );

  getById(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.baseURL}/${id}`);
  }

  getByDisciplinaId(id: number): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.baseURL}/ByDisciplina/${id}`);
  }

  post(aluno: Aluno) {
    return this.http.post(this.baseURL, aluno);
  }

  put(aluno: Aluno) {
    return this.http.put(`${this.baseURL}/${aluno.id}`, aluno);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}
