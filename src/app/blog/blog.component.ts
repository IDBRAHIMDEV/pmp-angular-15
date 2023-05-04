import { Post } from './../models/post';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  showForm: boolean = false

  ngOnInit(): void {
      this.retreivePosts()
  }

  myPost: Post = {
    title: '',
    body: ''
  }

  posts: Post[] = []

  constructor(private postService: PostService) {}

  retreivePosts() {
    this.postService.getPosts().subscribe(response => this.posts = response)
  }

  savePost() {
    this.postService.persistPost(this.myPost).subscribe(response => {
      this.posts = [response, ...this.posts]
      this.initCourse()
    })
    
  }

  initCourse() {
    this.myPost = {
      title: '',
      body: ''
    }

    this.showForm = false
  }

  toggleForm() {
    this.showForm = !this.showForm
  }

  destroyPost(id: number) {
    this.postService.deletePost(id).subscribe(() => this.retreivePosts())
  }

}
