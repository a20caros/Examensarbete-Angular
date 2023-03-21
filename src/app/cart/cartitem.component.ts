import { Product } from "../createProducts/product.model";

export class CartItem{
    constructor(product:Product){
        this.product = product; 
    }
    product:Product;
}