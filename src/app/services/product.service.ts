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

    getProductsPage(): Observable<Product[]> {
        return this.http.get<Product[]>(apiConstants.BASE_URL + `products?offset=${this.offset = this.offset + 10}&limit=10`)
    }

    getByName(text: string): Observable<Product> {
        return this.http.get<Product>(apiConstants.BASE_URL + `products/?title=${text}`)
    }

    getByCategory(id: number): Observable<any> {
        return this.http.get(apiConstants.BASE_URL + `products/?categoryId=${id}`)
    }

}