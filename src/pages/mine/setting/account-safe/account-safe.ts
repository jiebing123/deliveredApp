import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

@IonicPage({
    name:'account-safe'
})
@Component({
    selector: 'page-account-safe',
    templateUrl: 'account-safe.html',
})
export class AccountSafePage {

    alertAction:boolean=false;
    
    constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:ActionSheetController) {
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad AccountSafePage');
    }

}
