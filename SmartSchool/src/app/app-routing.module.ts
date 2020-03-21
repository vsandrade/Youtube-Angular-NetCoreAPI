import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ProfessoresComponent } from './components/professores/professores.component';
import { AlunosComponent } from './components/alunos/alunos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ProfessorDetalheComponent } from './components/professores/professor-detalhe/professor-detalhe.component';
import { ProfessorListComponent } from './components/professores/professor-list/professor-list.component';

const routes: Routes = [
  { path: 'alunos', component: AlunosComponent },
  { path: 'alunos/:id', component: AlunosComponent },
  { path: 'perfil', component: PerfilComponent },
  {
    path: 'professores',
    component: ProfessoresComponent,
    children: [
      { path: '', component: ProfessorListComponent },
      { path: 'detalhe/:id', component: ProfessorDetalheComponent },
    ]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
