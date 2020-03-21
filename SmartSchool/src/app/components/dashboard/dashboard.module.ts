import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ShareModule } from '../../shared/share.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
