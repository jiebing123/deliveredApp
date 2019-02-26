import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountSafePage } from './account-safe';
import { ShareModule } from '../../../../app/share.module';

@NgModule({
  declarations: [
    AccountSafePage,
  ],
  imports: [
    IonicPageModule.forChild(AccountSafePage),
    ShareModule
  ],
  exports:[
    AccountSafePage
  ]
})
export class AccountSafePageModule {}
