import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { ShareModule } from '../../shared/share.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModule
  ],
  declarations: [PerfilComponent]
})
export class PerfilModule { }
