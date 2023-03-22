import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { CartItem } from './cartitem.component';
import { Cart } from './cartProducts.component';
@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{
    cart!: Cart;
    constructor (private cartService: CartService) { this.setProductCart()}

    setProductCart(){
        this.cart= this.cartService.getProductCart();
    }
    ngOnInit(): void {
        
    }
    
    removeProductFromCart(cartitem: CartItem){
        this.cartService.removeProductFromCart(cartitem.product.id);
        this.setProductCart();
    }
    
}