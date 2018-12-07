import { NgModule } from '@angular/core';
import { IonicModule,IonicPageModule } from 'ionic-angular';
import { DeliveredTypePage } from './delivered-type';

@NgModule({
  declarations: [
    DeliveredTypePage,
  ],
  imports: [
    IonicModule,
    IonicPageModule.forChild(DeliveredTypePage),
  ],
})
export class DeliveredTypePageModule {}
