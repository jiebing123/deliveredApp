import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'products-counting',
  templateUrl: 'products-counting.html'
})
export class ProductsCountingComponent {

  productsNumber=0;
  @Output() private counting=new EventEmitter<any>();

  constructor() {
    
  }

  btn_add(){
    this.productsNumber++;
    this.counting.emit(this.productsNumber);
  }

  btn_minus(){
    if(this.productsNumber>0){
      this.productsNumber--;
      this.counting.emit(this.productsNumber);
    }
  }

}
