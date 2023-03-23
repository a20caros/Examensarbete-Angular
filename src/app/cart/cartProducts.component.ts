import { CartItem } from "./cartitem.component";
export class Cart{
    items:CartItem[] = [];
    
    get cartTotalPrice(): number{
        let cartTotalPrice = 0; 
        this.items.forEach(item =>{
            cartTotalPrice += item.product.price * item.quantity;
        });
        return cartTotalPrice;
    }
}