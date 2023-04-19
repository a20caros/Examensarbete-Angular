import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ProductService {  
    //Get the josn-file
    private apiUrl = 'assets/womenProducts.json';
   
    constructor(private http: HttpClient) {}
      getProducts() {
        return this.http.get(this.apiUrl);
      }
      saveData(key: string, data: any) {
        //Save the products in localStorage so the script can retrieve it
        let dataString = JSON.stringify(data);
        localStorage.setItem(key, dataString);
      }
}