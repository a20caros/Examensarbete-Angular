import {Injectable } from '@angular/core';
import { Product } from '../createProducts/product.model';
import { CartItem } from './cartitem.component';
import { Cart } from './cartProducts.component';

@Injectable({
    providedIn: 'root'
})

export class CartService {
    private cart:Cart = new Cart();
    

    addProductToCart(product:Product, quantity: number= 1): void{
        this.cart.items.push(new CartItem(product, quantity));
        console.log(quantity);
    }
    getProductCart():Cart{
        return this.cart;
    }
    removeProductFromCart(productId:string): void{
        this.cart.items =
        this.cart.items.filter(item => item.product.id != productId);
    }
}
