import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { apiConstants } from "./constants/apiConstants";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(apiConstants.BASE_URL + 'products')
    }

    getProductItem(id: number): Observable<Product> {
        return this.http.get<Product>(apiConstants.BASE_URL + `products/${id}`)
    }

}