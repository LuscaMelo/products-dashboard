import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { FilterComponent } from '../layout/filter/filter.component';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavbarComponent, FilterComponent, CommonModule, RouterLink, FormsModule, InfiniteScrollModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  productList!: Product[]
  allProducts: Product[] = []

  canShow: boolean = false
  placeholder: number[] = [0, 1, 2, 3, 4, 5]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts()
    this.canShow = true
  }

  getAllProducts() {
    this.productService.getProducts().subscribe((res: Product[]) => {
      this.productList = res
      this.canShow = false
    })
  }

  searchProduct(e: Event): void {
    const target = e.target as HTMLInputElement
    const value = target.value

    this.productService.getByName(value).subscribe((res: any) => {
      this.productList = res
    })
  }

  filterProducts(filterId: number) {
    this.productService.getByCategory(filterId).subscribe((res: any) => {
      this.productList = res
      console.log(res)
    })
  }

  getNextPage() {
    this.productService.getProductsPage().subscribe((res: any) => {
      const products: Product[] = res
      const nextPage = this.productList.concat(products)
      this.productList = nextPage
    })
  }

  onScroll() {
    this.getNextPage()
  }
}
