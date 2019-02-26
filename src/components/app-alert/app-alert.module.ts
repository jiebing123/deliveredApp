import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppAlertComponent } from './app-alert';

@NgModule({
  declarations: [
    AppAlertComponent,
  ],
  imports: [
    IonicPageModule.forChild(AppAlertComponent),
  ],
  exports:[
    AppAlertComponent
  ]
})
export class AppAlertComponentModule {}
