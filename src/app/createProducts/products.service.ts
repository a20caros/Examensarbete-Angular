import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    /*private productsKey = 'products';
    private getProductName(): string {
        let productHeading = ' ';
        const character = 'ABCDEFGHIJKLMNOPRSTUV';
        for (let i = 0; i < 6; i++) {
          productHeading += character.charAt(Math.floor(Math.random() * character.length));
        }
        return productHeading;
    }
    private getproductPrice(): number {
        const maxPrice = 1000;
        const minPrice = 100;
        const productPrice = minPrice + (Math.floor(Math.random() * (maxPrice-minPrice)));
        return productPrice;
    }
    private getProductSize(): number {
        const maxSize = 3;
        const minSize = 10;
        const productSize = minSize + (Math.floor(Math.random() * (maxSize-minSize)));
        return productSize;
    }
    private getProductSmell(): string{
        const smellArray =['vanilj','rosor','citrusfrukter','mandel','päron','äpple'];
        const productSmell = smellArray[(Math.random() * smellArray.length) | 0]
        return 'Doft av ' + productSmell;
    }
    private getProdutImg(): string{
        const productImgArray = ['assets/images/pexels-daria-liudnaya-8166972.jpg','assets/images/pexels-daria-liudnaya-8166566.jpg', 'assets/images/pexels-karolina-grabowska-8361478.jpg', 'assets/images/pexels-karolina-grabowska-8361487.jpg','assets/images/pexels-daria-liudnaya-8166972.jpg', 'assets/images/pexels-hanna-auramenka-8553210.jpg',  'assets/images/pexels-dids-1190829.jpg', 'assets/images/pexels-daria-liudnaya-8166613.jpg'];
        const productImg = productImgArray[(Math.random()*productImgArray.length) | 0];
        return productImg;
    }
    private generateProductId(): string {
        const time = Date.now().toString(36); 
        const randomCharacters = Math.random().toString(36).substring(2, 8); 
        return time + "-" + randomCharacters;
    }
    generatePerfumes(): Product[] {
        const productArray: Product[] = [];
        for (let i = 0; i < 10; i++) {
            const PRODUCT: Product = {
                name: this.getProductName(),
                price: this.getproductPrice(),
                size: this.getProductSize(),
                smell: this.getProductSmell(),
                img: this.getProdutImg(),
                id: this.generateProductId()
            };
            productArray.push(PRODUCT);
            
        }
        return productArray;
    }*/
    /*generatePerfumes(): Product[] {
        const productArray: Product[] = [];
        const PRODUCT = [{ "id":"lfuwryxt-0t199j","name":"MEUHVU","price":671,"size":6,"smell":"Doft av mandel"},{"id":"lfuwryxt-y5vf8v","name":"OGIOUV","price":383,"size":9,"smell":"Doft av vanilj"},{"id":"lfuwryxt-cvfslb","name":"MCLGVR","price":626,"size":5,"smell":"Doft av citrusfrukter"},{"id":"lfuwryxt-4efalb","name":"HUUHOL","price":902,"size":3,"smell":"Doft av äpple"},{"id":"lfuwryxt-bqmt6k","name":"RKELLU","price":272,"size":8,"smell":"Doft av äpple"},{"id":"lfuwryxt-h2kxxm","name":"PTBKGS","price":218,"size":9,"smell":"Doft av mandel"},{"id":"lfuwryxt-ghbd33","name":"OMNPCB","price":520,"size":8,"smell":"Doft av mandel"},{"id":"lfuwryxt-v3jdzf","name":"ICFEFN","price":850,"size":3,"smell":"Doft av rosor"},{"id":"lfuwryxt-3nh74k","name":"RTFMTI","price":453,"size":6,"smell":"Doft av äpple"},{"id":"lfuwryxt-lpzqtv","name":"OFJICI","price":360,"size":6,"smell":"Doft av äpple"}];
        productArray.push(PRODUCT);
        return productArray;
    }*/
       /* savePerfumesToLocalStorage(): void {
        const products =  this.generatePerfumes();
        const jsonPerfumes = JSON.stringify(products);
        localStorage.setItem('products', jsonPerfumes);
      }*/
      
      getPerfumesFromLocalStorage(): any[] {
        const jsonPerfumes = localStorage.getItem('producttt') ?? '[]';
        return JSON.parse(jsonPerfumes);
      }
}