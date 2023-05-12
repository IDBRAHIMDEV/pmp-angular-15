import { Category } from './../../models/category';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  categories: Category[] | null = null

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
      this.retreiveCategories()
  }

  retreiveCategories() {
    return this.categoryService.getCategories().subscribe(res => this.categories = res.categories)
  }

}
