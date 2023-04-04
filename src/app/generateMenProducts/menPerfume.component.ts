import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { MenProduct } from '../createMenProducts/menProduct.model';

@Component({
    selector: 'app-menPerfumes',
    templateUrl: './menPerfumes.component.html',
    styleUrls: ['../generateProducts/generatePerfume.component.css']
})


export class MenPerfumes{
    //Sets the quantity variable to 0
    @Input() quantity: number = 0;
    @Input() menProduct!: MenProduct;
   
    constructor(private cartService: CartService, private router:Router ){}
    //Adds 1 to the quantity variable
    addProduct() {
        this.quantity += 1;
      }
   
    addProductToCart(quantity: number){
        //An if statement that checks if the number of the product the user selected is greater than 0
        if (quantity > 0) {
            this.cartService.addProductToCart(this.menProduct, this.quantity);
            //Send it to the cart page immediately
            this.router.navigateByUrl('/cart');
        }
    }
}