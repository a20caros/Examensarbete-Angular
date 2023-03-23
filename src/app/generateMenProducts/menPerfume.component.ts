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
    @Input() quantity: number = 0;
    @Input() menProduct!: MenProduct;
    menProducts:MenProduct[] = [];
    constructor(private cartService: CartService, private router:Router ){}


   
    addProductToCart(quantity: number){
        //An if statement that checks if the number of the product the user selected is greater than 0
        if (quantity > 0) {
            this.cartService.addProductToCart(this.menProduct, this.quantity);
            this.router.navigateByUrl('/cart');
        }else{
            alert('Välj minst en produkt i antal för att kunna lägga till produtken i kundvagnen!')
        }
    }
}