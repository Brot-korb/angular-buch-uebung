import { Component, OnInit, Input, Output } from '@angular/core';
import {EventEmitter, ChangeDetectionStrategy} from '@angular/core';

import {Stock} from '../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class StockItemComponent {

    @Input() public stock: Stock;
    @Output() private toggleFavorite: EventEmitter<Stock>;

    constructor() {
      this.toggleFavorite = new EventEmitter<Stock>();
    }

    onToggleFavorite(event) {
      this.toggleFavorite.emit(this.stock);
    }

    changeStockPrice() {
      this.stock.price += 5;
    }

}



//Auskommentiert ab Kaptiel 4
/*implements OnInit {

  public stocks: Array<Stock>;

  constructor() { }

  ngOnInit() {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80),
      new Stock('Second Stock Company', 'SSC', 10, 20),
      new Stock('Last Stock Company', 'LSC', 876, 765)
      ];
  }

  toggleFavorite(event, index) {
    console.log('Alpha', index, event);
    this.stocks[index].favorite = !this.stocks[index].favorite;
  }

  trackStockByCode(index, stock){
    return stock.code
  }
  }
  */

