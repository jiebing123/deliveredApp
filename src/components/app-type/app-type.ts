import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-type',
  templateUrl: 'app-type.html'
})
export class AppTypeComponent {
  selectMenu;
  @Input() start:boolean=false;
  isAnimated:boolean;
  @Output() onFinish=new EventEmitter();
  menuList=0;

  constructor(public navCtrl: NavController) {
    this.isAnimated=this.start;
  }

  ngOnChanges(changes:OnChanges){
    if(changes['start']){
      this.isAnimated=this.start;
    }
  }

  close(){
    this.onFinish.next();
  }

  ngOnDestroy(){
    this.onFinish.complete();
  }
}
