import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/services/professor.service';
import { Disciplina } from 'src/app/models/Disciplina';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html'
})
export class ProfessorListComponent {

  public titulo = 'Professores';

  public professores$ = this.professorService.professores$;

  constructor(private professorService: ProfessorService) {}

  disciplinaConcat(disciplinas: Disciplina[]) {
    return Util.nomeConcat(disciplinas);
  }

}
