import { NgModule } from '@angular/core';

import { ProfessoresComponent } from './professores.component';
import { ProfessorAlunosComponent } from './professor-alunos/professor-alunos.component';
import { ProfessorDetalheComponent } from './professor-detalhe/professor-detalhe.component';
import { ShareModule } from '../../shared/share.module';

@NgModule({
  declarations: [
    ProfessoresComponent,
    ProfessorAlunosComponent,
    ProfessorDetalheComponent
  ],
  imports: [
    ShareModule
  ],
  exports: [

  ]
})
export class ProfessoresModule { }
