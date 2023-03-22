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
    @Input() menProduct!: MenProduct;
    menProducts:MenProduct[] = [];
    constructor(private cartService: CartService, private router:Router ){}


   
    addProductToCart(){
        this.cartService.addProductToCart(this.menProduct);
        this.router.navigateByUrl('/cart');
    }
}