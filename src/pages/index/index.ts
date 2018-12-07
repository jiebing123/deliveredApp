import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Content, Item, Grid, ModalController, App } from 'ionic-angular';

@IonicPage({
  name:'index'
})

@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  @ViewChild(Content) content:Content;
  @ViewChild(Slides) slides:Slides;
  @ViewChild('bought_show') bought_show:ElementRef;
  @ViewChild('search_div') search_div:Item;
  searchTop:number = 0;
  @ViewChild('row_type') row_type:ElementRef;
  gridTop:number=0;
  isUp=0;
  selectMenu=0;
  type;
  animationStart:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public zone:NgZone,public modalCtrl:ModalController,public appCtrl:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
    
    var div=this.bought_show.nativeElement;
    var childrenWidth=div.children[0].clientWidth + 20;
    var dtLength=div.children.length;
    div.setAttribute('style','width:' + (childrenWidth * dtLength -20) + 'px');
  }

  contentScroll(){
    var contentTop=this.content.scrollTop;

    if(this.searchTop<=0 && contentTop >= this.search_div._elementRef.nativeElement.offsetTop){
      this.searchTop=this.search_div._elementRef.nativeElement.offsetTop;
      this.search_div._elementRef.nativeElement.setAttribute('style','position:fixed;top:0');
      this.slides._elementRef.nativeElement.setAttribute('style','margin-top:' + (this.search_div._elementRef.nativeElement.clientHeight + 16) + 'px');
    }

    var top=this.row_type.nativeElement.offsetTop - 52;
    if(this.gridTop<=0 && contentTop >= top){
      this.gridTop=top;
      this.row_type.nativeElement.setAttribute('style','position:fixed;top:52px');
      this.row_type.nativeElement.nextElementSibling.setAttribute('style','margin-top:' + this.row_type.nativeElement.clientHeight + 'px');
    }

    this.clearPosition(contentTop);

    var isUp=0;
    if(this.content.directionY=='up' && contentTop>100){
      isUp=1;
    }else if(contentTop<=100){
      isUp=0;
    }

    this.zone.run(()=>{
      this.isUp=isUp;
    })

  }

  clearPosition(_contentTop){
    var contentTop=_contentTop || this.content.scrollTop;

    if(contentTop < this.searchTop){
      this.searchTop=0;
      this.search_div._elementRef.nativeElement.setAttribute('style','position:static;top:initial;');
      this.slides._elementRef.nativeElement.setAttribute('style','margin-top:16px');
    }

    if(contentTop < this.gridTop){
      this.gridTop=0;
      this.row_type.nativeElement.setAttribute('style','position:static;top:initial;');
      this.row_type.nativeElement.nextElementSibling.setAttribute('style','margin-top:0');
    }
  }

  go_up(){
    this.content.scrollToTop();
    this.clearPosition(0);
  }

  btn_type(type){
    this.content.scrollTo(0,(this.row_type.nativeElement.offsetTop - 52),200);
    this.type=type;
    if(type!='long'){
      this.animationStart=true;
    }
  }

  close(){
    this.animationStart=false;
  }

}
