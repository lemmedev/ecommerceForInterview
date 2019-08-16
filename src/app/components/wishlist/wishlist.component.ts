import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  mainOuterItems = [];
  wishlist = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.mainOuterItems = this.dataService.getMain();
    this.wishlist = this.dataService.getMain().filter(item => {
      return item.wishlist;
    });
    console.log('add to cartss ', this.wishlist);
  }
  handleAddToCardClick(item) {
    console.log('child method clicked wishlist');
    item.addToCart = true;

  }


}
