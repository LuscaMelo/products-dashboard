import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { apiConstants } from "./constants/apiConstants";

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get(apiConstants.BASE_URL + 'products')
    }

}