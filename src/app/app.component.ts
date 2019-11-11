import { Component, OnInit } from '@angular/core';

import {Stock} from './model/stock';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
  
})
export class AppComponent implements OnInit  {
  title = 'Stock market App';

  public stock: Stock;
  private counter: number= 1;

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company - ' + this.counter++, 'TSC', 85, 80);
  }

  onToggleFavorite(stock: Stock) {
    this.stock.favorite = !this.stock.favorite;
  }

  changeStockObject() {
    this.stock = new Stock('Test Stock Company - ' + this.counter++, 'TSC', 85, 80);
  }

  changeStockPrice() {
    this.stock.price += 10;
  }

}

