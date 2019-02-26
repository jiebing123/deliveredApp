import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html',
  host:{
    'class':'app-header'
  }
})
export class HeaderComponent {

  @Input() mineHeader='mine';
  @Input() headerTitle='';
  @Input() searchTxt;
  searchText;

  constructor(public navCtrl:NavController) {
    
  }

  ngOnInit(){
    this.searchText=this.searchTxt;
  }

  go_back(){
    this.navCtrl.pop();
  }

}
