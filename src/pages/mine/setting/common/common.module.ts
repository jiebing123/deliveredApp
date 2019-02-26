import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommonPage } from './common';
import { ShareModule } from '../../../../app/share.module';

@NgModule({
  declarations: [
    CommonPage,
  ],
  imports: [
    IonicPageModule.forChild(CommonPage),
    ShareModule
  ],
  exports:[
    CommonPage
  ]
})
export class CommonPageModule {}
