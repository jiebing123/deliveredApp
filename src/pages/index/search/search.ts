import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name:'search'
})
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  private listenFunc;
  @ViewChild('hirstorySearch') hirstorySearch:ElementRef;
  searchTxt:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private renderer:Renderer2) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.start();
  }

  private start(){
    if(this.listenFunc=this.hirstorySearch.nativeElement.querySelectorAll('label').length>0){
      this.listenFunc=this.hirstorySearch.nativeElement.querySelectorAll('label').forEach(item => {
        this.renderer.listen(item,'click',(e) => {
          console.log(e);
          this.searchTxt=e.target.innerText;
        });
      })
    }
  }

  private stop(){
    this.listenFunc='';
    this.searchTxt='';
  }

  ionViewDidLeave(){
    this.stop();
  }

}
