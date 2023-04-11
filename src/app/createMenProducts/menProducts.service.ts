import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ProductMenService {
    private apiUrl = 'assets/menProduct.json';
   
    constructor(private http: HttpClient) {}
      getProducts() {
        return this.http.get(this.apiUrl);
      }
      saveData(key: string, data: any) {
        let menDataString = JSON.stringify(data);
        localStorage.setItem(key, menDataString);
      }
     
}