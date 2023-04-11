import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ProductService {  
    private apiUrl = 'assets/womenProduct.json';
   
    constructor(private http: HttpClient) {}
      getProducts() {
        return this.http.get(this.apiUrl);
      }
      saveData(key: string, data: any) {
        let dataString = JSON.stringify(data);
        localStorage.setItem(key, dataString);
      }
}