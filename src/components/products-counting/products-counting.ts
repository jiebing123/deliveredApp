import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'products-counting',
  templateUrl: 'products-counting.html'
})
export class ProductsCountingComponent {

  @Input() productsNumber:number=0;
  @Input() totalNum?:number;
  @Output() private counting=new EventEmitter<any>();

  constructor() {
    this.productsNumber =0 || this.productsNumber;
    this.totalNum =100 || this.totalNum;
  }

  btn_add(){
    if(this.productsNumber < this.totalNum){
      this.productsNumber++;
      var numbers={num:this.productsNumber,ops:'add'};
      this.counting.emit(numbers);
    }
  }

  btn_minus(){
    if(this.productsNumber>0){
      this.productsNumber--;
      var numbers={num:this.productsNumber,ops:'minus'};
      this.counting.emit(numbers);
    }
  }

}
