import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlunosModule } from './components/alunos/alunos.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProfessoresModule } from './components/professores/professores.module';
import { PerfilModule } from './components/perfil/perfil.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { ShareModule } from './shared/share.module';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      AlunosModule,
      ProfessoresModule,
      PerfilModule,
      DashboardModule,
      NgxSpinnerModule,
      ShareModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
