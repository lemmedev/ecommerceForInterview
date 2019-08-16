import { Component, OnInit } from '@angular/core';
import { ItemsListItem } from '../models/items-list-items';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  // public itemsList: Array<ItemsListItem>;
  public itemsList;
  public isLoading = false;
  public isError = false;
  public outerArr = [];


  constructor(private itemsProvider: DataService, private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    this.itemsProvider.getItemsList()
      .subscribe(itemsListC => {
        console.log('item is : component', itemsListC);
        this.itemsList = itemsListC;
        this.isLoading = false;
        for (const iterator of this.itemsList) {
          console.log('single obj', iterator);
          const obj = new ItemsListItem(iterator);
          this.outerArr.push(obj);
        }
        this.itemsProvider.setMain(this.outerArr);
      });
    console.log('objjjj', this.outerArr);




  }

  highToLow() {
    this.outerArr.sort((item1: ItemsListItem, item2: ItemsListItem) => {
      if (item1.price < item2.price) {
        return 1;
      } else {
        return -1;
      }
    });
    this.itemsProvider.setMain(this.outerArr);
    // console.log('hightolow', this.outerArr.sort((item1, item2) => item2.price - item1.price));
  }

  lowToHigh() {
    this.outerArr.sort((item1: ItemsListItem, item2: ItemsListItem) => {
      if (item2.price < item1.price) {
        return 1;
      } else {
        return -1;
      }
    });
    this.itemsProvider.setMain(this.outerArr);
    console.log('lowToHigh', this.itemsList.sort((item1, item2) => item1.price - item2.price));
  }

  handleItemClick(item: ItemsListItem) {
    console.log('item clicked is ', item);
    // this.router.navigate(['items>>>', item.categoryId]);
  }

  handleWishlist(item: ItemsListItem) {
    // item['wishlist'] = true;
    item.wishlist = true;
    this.itemsProvider.setMain(this.outerArr);
    console.log('wishlistparent ', item);
  }

  handleAddToCardClick(item: ItemsListItem) {
    // item['addToCart'] = true;
    item.addToCart = true;
    this.itemsProvider.setMain(this.outerArr);
    console.log('add item ', item);

  }
}
