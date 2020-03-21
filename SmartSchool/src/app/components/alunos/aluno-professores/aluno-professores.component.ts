import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Professor } from 'src/app/models/Professor';
import { Util } from '../../../util/util';
import { Disciplina } from 'src/app/models/Disciplina';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-professores',
  templateUrl: './aluno-professores.component.html'
})
export class AlunoProfessoresComponent implements OnInit {

  @Input() public professores: Professor[];
  @Output() closeModal = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  disciplinaConcat(disciplinas: Disciplina[]) {
    return Util.nomeConcat(disciplinas);
  }

  professorSelect(prof: Professor) {
    this.closeModal.emit(null);
    this.router.navigate(['/professor', prof.id]);
  }

}
