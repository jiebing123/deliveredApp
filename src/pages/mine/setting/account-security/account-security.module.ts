import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountSecurityPage } from './account-security';
import { ShareModule } from '../../../../app/share.module';

@NgModule({
  declarations: [
    AccountSecurityPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountSecurityPage),
    ShareModule
  ],
  exports:[
    AccountSecurityPage
  ]
})
export class AccountSecurityPageModule {}
