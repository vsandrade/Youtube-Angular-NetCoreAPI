import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import { Professor } from '../../models/Professor';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subject, Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProfessorService } from '../../services/professor.service';
import { takeUntil } from 'rxjs/operators';
import { Util } from '../../util/util';
import { Disciplina } from '../../models/Disciplina';
import { Router } from '@angular/router';
import { Aluno } from '../../models/Aluno';
import { AlunoService } from '../../services/aluno.service';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html'
})
export class ProfessoresComponent {

  public titulo = 'Professores';

}
