import { NgModule } from '@angular/core';
import { AlunosComponent } from './alunos.component';
import { AlunoProfessoresComponent } from './aluno-professores/aluno-professores.component';
import { ShareModule } from '../../shared/share.module';

@NgModule({
  declarations: [
    AlunosComponent,
    AlunoProfessoresComponent
  ],
  imports: [
    ShareModule
  ]
})
export class AlunosModule { }
