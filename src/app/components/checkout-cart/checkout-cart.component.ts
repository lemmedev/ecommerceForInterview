import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.css']
})
export class CheckoutCartComponent implements OnInit {

  mainOuterItems = [];
  checkoutItems = [];

  constructor(private dataService: DataService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.mainOuterItems = this.dataService.getMain();
    this.checkoutItems = this.dataService.getMain().filter(item => {
      return item.addToCart;
    });
    console.log('add to cartss ', this.checkoutItems);
  }

}
