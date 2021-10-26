import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: string='App for credit cards'
  @Output() productEvent= new EventEmitter<string>();
  constructor() { }

  sendProduct(){
    this.productEvent.emit(this.product)
 }
  ngOnInit(): void {
  }

}
