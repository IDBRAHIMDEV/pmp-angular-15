import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from '../models/post';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts')
        .pipe(map(posts => posts.map(post => {
          return {id: post.id, title: post.title.toUpperCase(), 
                  body: post.body.substring(0, 3), active: post.active}
        })))
  }

  persistPost(data: Post): Observable<Post> {
    return this.http.post<Post>('http://localhost:3000/posts', data)
  }

  deletePost(id: number) {
    return this.http.delete(`http://localhost:3000/posts/${id}`)
  }

  updatePost(id: number, data: any): Observable<Post> {
    return this.http.put<Post>(`http://localhost:3000/posts/${id}`, data)
  }

  changeStatusPost(id: number | undefined, data: any) {
    return this.http.patch(`http://localhost:3000/posts/${id}`, data)
  }
}
