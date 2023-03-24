import {Injectable } from '@angular/core';
import { Product } from '../createProducts/product.model';
import { CartItem } from './cartitem.component';
import { Cart } from './cartProducts.component';

@Injectable({
    providedIn: 'root'
})

export class CartService {
    //A private property named "cart", which contains an instance of the Cart class.
    private cart:Cart = new Cart();
    
    //The method takes two parameters: a product and quantity, and adds a new CartItem to the cart's items array.
    addProductToCart(product:Product, quantity: number= 1): void{
        const alreadyExistingItem = this.cart.items.find(item => item.product.id === product.id);
        if(alreadyExistingItem){
            alreadyExistingItem.quantity += quantity;
        }else{
        this.cart.items.push(new CartItem(product, quantity));
        }
    }
    //This method returns an instance of the Cart class (cart) containing all the items added.
    getProductCart():Cart{
        return this.cart;
    }
    //This method takes a product ID and filters out all cartitems objects that matching the ID from the cart's items array.
    removeProductFromCart(productId:string): void{
        this.cart.items =
        this.cart.items.filter(item => item.product.id != productId);
    }
}
