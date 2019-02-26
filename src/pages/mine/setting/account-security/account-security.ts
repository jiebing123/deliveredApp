import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name:'account-security'
})
@Component({
  selector: 'page-account-security',
  templateUrl: 'account-security.html',
})
export class AccountSecurityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountSecurityPage');
  }

}
