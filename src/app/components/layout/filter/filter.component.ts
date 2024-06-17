import { Component } from '@angular/core';
import { Category } from '../../../models/category.model';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  categoriesList: Category[] = []

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories()
  }

  getAllCategories() {
    this.categoryService.getCategories().subscribe((res: any) => {
      this.categoriesList = res
    })
  }
}
