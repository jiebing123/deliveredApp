import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search';
import { ShareModule } from '../../../app/share.module';

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPage),
    ShareModule
  ],
  exports:[
    SearchPage
  ]
})
export class SearchPageModule {}
