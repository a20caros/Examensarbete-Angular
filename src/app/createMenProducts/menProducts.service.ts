import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ProductMenService {
    //Get the josn-file
    private apiUrl = 'assets/menProduct.json';
   
    constructor(private http: HttpClient) {}
      getProducts() {
        //Returns the data in a HTTP GET request
        return this.http.get(this.apiUrl);
      }
      saveData(key: string, data: any) {
        //Save the products in localStorage so the script can retrieve it
        let menDataString = JSON.stringify(data);
        localStorage.setItem(key, menDataString);
      }
     
}