import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts')
  }

  persistPost(data: Post): Observable<Post> {
    return this.http.post<Post>('http://localhost:3000/posts', data)
  }

  deletePost(id: number) {
    return this.http.delete(`http://localhost:3000/posts/${id}`)
  }
}
