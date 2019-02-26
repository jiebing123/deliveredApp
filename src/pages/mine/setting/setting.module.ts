import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingPage } from './setting';
import { ShareModule } from '../../../app/share.module';

@NgModule({
  declarations: [
    SettingPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingPage),
    ShareModule
  ],
  exports:[
    SettingPage
  ]
})
export class SettingPageModule {}
