import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ItemsListItem } from '../models/items-list-items';


@Component({
  selector: 'app-items-list-item',
  templateUrl: './items-list-item.component.html',
  styleUrls: ['./items-list-item.component.css']
})
export class ItemsListItemComponent implements OnInit {

  @Input() item: ItemsListItem;

  @Output()
  onItemClick: EventEmitter<ItemsListItem> = new EventEmitter<ItemsListItem>();

  @Output()
  onAddToCartClick: EventEmitter<ItemsListItem> = new EventEmitter<ItemsListItem>();

  @Output()
  onHandleWishlist: EventEmitter<ItemsListItem> = new EventEmitter<ItemsListItem>();

  ngOnInit() {
    // console.log('<><><', this.item);
  }

  public addToCartText = 'Add To Cart';
  // public currencySymbol = AppConst.DEFAULT_CURRENCY_SYMBOL;

  constructor() { }

  handleCardClick(event) {
    if (event.target.id !== 'items-list-item__add-card' && event.target.textContent !== this.addToCartText) {
      this.onItemClick.emit(this.item);
    }
  }

  handleWishlist() {
    console.log('child method clicked wishlist');
    this.onHandleWishlist.emit(this.item);
  }

  handleAddToCardClick() {
    console.log('child method clicked add to card');
    this.onAddToCartClick.emit(this.item);
  }

}

