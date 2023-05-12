import { CategoryResponse } from './../models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>('http://localhost:5000/api/v1/categories')
  }
}
