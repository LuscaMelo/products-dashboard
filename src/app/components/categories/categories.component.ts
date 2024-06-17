import { Component } from '@angular/core';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
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
