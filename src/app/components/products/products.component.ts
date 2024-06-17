import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { FilterComponent } from '../layout/filter/filter.component';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavbarComponent, FilterComponent, CommonModule, RouterLink, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  productList: Product[] = []
  allProducts: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this.productService.getProducts().subscribe((res: any) => {
      this.productList = res
      this.allProducts = this.productList
    })
  }

  searchProduct(e: Event): void {
    const target = e.target as HTMLInputElement
    const value = target.value

    if (value === '') {
      this.productList = this.allProducts
    } else {
      this.productList = this.productList.filter(product => {
        return product.title.includes(value)
      })
    }

  }


}
