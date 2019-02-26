import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticeListPage } from './notice-list';
import { ShareModule } from '../../../../app/share.module';

@NgModule({
  declarations: [
    NoticeListPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticeListPage),
    ShareModule
  ],
  exports:[
    NoticeListPage
  ]
})
export class NoticeListPageModule {}
