import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticePage } from './notice';
import { ShareModule } from '../../../app/share.module';

@NgModule({
  declarations: [
    NoticePage,
  ],
  imports: [
    IonicPageModule.forChild(NoticePage),
    ShareModule
  ],
  exports:[
    NoticePage
  ]
})
export class NoticePageModule {}
