import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../../models/category.model';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../../services/category.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  @Output() filterName = new EventEmitter();
  @Input() productList!: Product[]

  categoriesList: Category[] = []
  filteredProducts!: Product[]

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories()
  }

  getAllCategories() {
    this.categoryService.getCategories().subscribe((res: any) => {
      this.categoriesList = res
    })
  }

  filterProducts(filter: string) {
    this.sendFilter(filter)
  }

  sendFilter(filter: string) {
    this.filterName.emit(filter)
  }
}
