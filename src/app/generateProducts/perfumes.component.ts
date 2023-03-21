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
    @Input() product!: Product;
    products:Product[] = [];
    constructor(private cartService: CartService, private router:Router ){}


   
    addProductToCart(){
        this.cartService.addProductToCart(this.product);
        this.router.navigateByUrl('/cart');
    }
}