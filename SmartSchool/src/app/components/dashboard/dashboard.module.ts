import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { ShareModule } from '../../shared/share.module';

@NgModule({
  imports: [
    ShareModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
