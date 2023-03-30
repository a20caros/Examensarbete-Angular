import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Product } from '../createProducts/product.model';
import { ProductService } from '../createProducts/products.service';
import {Router } from '@angular/router';


@Component({
    selector: 'app-createProducts',
    templateUrl: './generatePerfumes.component.html',
    styleUrls: ['./generatePerfume.component.css']
})


export class WriteProducts implements OnInit {
  products:Product[] = [];
  constructor(private productService:ProductService, private cartService: CartService, private router:Router ){}

  ngOnInit(): void {
      this.products = this.productService.getPerfumesFromLocalStorage();
  }
 
  /*addToCart(index: number){
    const product = this.products[index];
    this.cartService.addProductToCart(this.product);
    this.router.navigateByUrl('/cart');
  }*/

}