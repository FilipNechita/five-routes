import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  product: any;
  client=['Vodafone'];

  constructor() { }

  ngOnInit(): void {
  }
receiveProduct($event:any){
  this.product=$event
}
}
