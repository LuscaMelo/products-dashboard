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

  search: string = ''

  productList: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this.productService.getProducts().subscribe((res: any) => {
      this.productList = res
      console.log(this.productList)
    })
  }


}
