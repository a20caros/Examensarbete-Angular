import { Component, AfterViewInit  } from '@angular/core';
import { CartService } from './cart.service';
import { CartItem } from './cartitem.component';
import { Cart } from './cartProducts.component';
@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})

export class CartComponent implements AfterViewInit  {

    //Declares a property named cart of type Cart, "non-null assertion operator" (!),must not be assigned a value when declared but must be assigned a value before it is used
    cart!: Cart;
    //The cartService service is injected into the component
    constructor (private cartService: CartService) { 
        //when the component is created, the setProductCart() method is called
        this.setProductCart()
    }
    //Assigns the cart property to an object returned by the getProductCart() method of CartService.
    setProductCart(){
        this.cart= this.cartService.getProductCart();
    }
    ngOnInit(): void {
       
    }
    ngAfterViewInit() {
        // Checks if cartiem's ​​id has been printed and then stops time
        if (document.getElementById("cartitems") !== null) {
          let stopTime = Date.now();
          console.log('slut '+ stopTime);
          //Sets the stop time in local storage
          window.localStorage.setItem('stopTime',String(stopTime) );
        } 
      }
    //receives a CartItem as parameter and removes the product belonging to cartitem's productid from the cart by calling the removeProductFromCart() method of CartService.
    removeProductFromCart(cartitem: CartItem){
        this.cartService.removeProductFromCart(cartitem.product.id);
        //Updates the cart property with the new state of the cart by calling the setProductCart() method.
        this.setProductCart();
    }
    
   
    
      
    
}