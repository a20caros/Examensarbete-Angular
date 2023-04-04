import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { Product } from '../createProducts/product.model';

@Component({
    selector: 'app-perfumes',
    templateUrl: './perfumes.component.html',
    styleUrls: ['./generatePerfume.component.css']
})


export class Perfumes{
    //Sets the quantity variable to 0
    @Input() quantity: number = 0;
    @Input() product!: Product;
    
    constructor(private cartService: CartService, private router:Router ){}
    //Adds 1 to the quantity variable
    addProduct() {
        this.quantity += 1;
      }
     //An if statement that checks if the number of the product the user selected is greater than 0
    addProductToCart(quantity:number){
        if (quantity > 0) {
        this.cartService.addProductToCart(this.product, this.quantity);
         //Send it to the cart page immediately
        this.router.navigateByUrl('/cart');
        }
    }
    
}