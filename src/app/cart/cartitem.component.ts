import { Product } from "../createProducts/product.model";

export class CartItem{
    constructor(product:Product, public quantity: number = 1){
        this.product = product; 
    }
    product:Product;
}