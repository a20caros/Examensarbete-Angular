import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Product } from '../createProducts/product.model';
import { ProductService } from '../createProducts/products.service';
import {Router } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
    selector: 'app-createProducts',
    templateUrl: './generatePerfumes.component.html',
    styleUrls: ['./generatePerfume.component.css']
})


export class WriteProducts implements OnInit {
//fetching a list of products for women
  products:Product[] = [];
  constructor(private productService:ProductService, private cartService: CartService, private router:Router ){}
  //Called when the component is initialized and used to retrieve the products to assign to the women Products array
  ngOnInit(): void {
    this.productService.getProducts().pipe(
        map((data: any) => {
          return data.map((item: any) => {
            const product: Product = {
              id: item.id,
              name: item.name,
              price: item.price,
              size: item.size,
              smell: item.smell,
              img: item.img,
            }
            return product;
          });
          
        })
        ).subscribe((products: Product[]) => {
            this.products = products;
            this.productService.saveData('myProducts', products);
    });
   
  }

}