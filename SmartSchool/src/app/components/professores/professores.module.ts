import { NgModule } from '@angular/core';

import { ProfessoresComponent } from './professores.component';
import { ProfessorAlunosComponent } from './professor-alunos/professor-alunos.component';
import { ProfessorDetalheComponent } from './professor-detalhe/professor-detalhe.component';
import { ShareModule } from '../../shared/share.module';
import { ProfessorListComponent } from './professor-list/professor-list.component';

@NgModule({
  declarations: [
    ProfessoresComponent,
    ProfessorAlunosComponent,
    ProfessorListComponent,
    ProfessorDetalheComponent
  ],
  imports: [
    ShareModule
  ]
})
export class ProfessoresModule { }
