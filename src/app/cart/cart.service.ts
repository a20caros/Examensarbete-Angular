import {Injectable } from '@angular/core';
import { Product } from '../createProducts/product.model';
import { CartItem } from './cartitem.component';
import { Cart } from './cartProducts.component';

@Injectable({
    providedIn: 'root'
})

export class CartService {
    private cart:Cart = new Cart();
    

    addProductToCart(product:Product): void{
        this.cart.items.push(new CartItem(product));
    }
    getProductCart():Cart{
        return this.cart;
    }
    
}
