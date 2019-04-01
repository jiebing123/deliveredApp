import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderListPage } from './order-list';
import { ShareModule } from '../../../app/share.module';

@NgModule({
  declarations: [
    OrderListPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderListPage),
    ShareModule
  ],
})
export class OrderListPageModule {}
