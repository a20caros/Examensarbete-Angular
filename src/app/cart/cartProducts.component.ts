import { CartItem } from "./cartitem.component";
export class Cart{
    //Items is an array of cartitem objects
    items:CartItem[] = [];
    //A function that calculates the total price for all products in the cart
    get cartTotalPrice(): number{
        //Sets the total value to zero when no product is added
        let cartTotalPrice = 0; 
        //A for loop that loops through all the cartitem items in Items Arrayen and multiply it by the number of the product and assigns it to the Carttotal Price variable
        this.items.forEach(item =>{
            cartTotalPrice += item.product.price * item.quantity;
        });
        return cartTotalPrice;
    }
}