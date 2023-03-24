import { Product } from "../createProducts/product.model";
//Is a typescript class used to represent a product in the shopping cart.
export class CartItem{
    //The constructor has two parameters, product containing the products added to the shopping cart and Quantity which is the number of each product
    constructor(product:Product, public quantity: number = 1){
        this.product = product; 
    }
    product:Product;
}