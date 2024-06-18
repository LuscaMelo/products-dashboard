import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { apiConstants } from "./constants/apiConstants";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    offset: number = 0

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(apiConstants.BASE_URL + `products?offset=${this.offset}&limit=10`)
    }

    getProductItem(id: number): Observable<Product> {
        return this.http.get<Product>(apiConstants.BASE_URL + `products/${id}`)
    }

    getProductsPage() {
        return this.http.get<Product[]>(apiConstants.BASE_URL + `products?offset=${this.offset = this.offset + 10}&limit=10`)
    }

    getByName(text: string) {
        return this.http.get<Product>(apiConstants.BASE_URL + `products/?title=${text}`)
    }

}