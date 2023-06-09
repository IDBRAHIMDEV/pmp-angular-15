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
  edit: boolean = false

  ngOnInit(): void {
      this.retreivePosts()
  }

  myPost: Post = {
    title: '',
    body: '',
    active: true
  }

  posts: Post[] = []

  constructor(private postService: PostService) {}

  retreivePosts() {
    this.postService.getPosts().subscribe(response => this.posts = response)
  }

  savePost() {
    this.postService.persistPost(this.myPost).subscribe(response => {
      this.retreivePosts()
      this.initCourse()
    })
    
  }

  initCourse() {
    this.myPost = {
      title: '',
      body: '',
      active: true
    }

    this.showForm = false
    this.edit = false
  }

  toggleForm() {
    this.showForm = !this.showForm
  }

  destroyPost(id: number) {
    this.postService.deletePost(id).subscribe(() => this.retreivePosts())
  }

  editPost(post: Post) {
    this.myPost = post
    this.showForm = true
    this.edit = true
  }

  updatePost() {
    let { title, body, id, active } = this.myPost;

    if(id) {
      this.postService.updatePost(id, {title, body, active}).subscribe(response => {
        this.initCourse()
      })
    }
  }

  changeStatus(id: number | undefined, active: boolean = false) {
    this.postService.changeStatusPost(id, {active: !active}).subscribe(response => this.retreivePosts())
  }

  addPost(data: Post) {
    this.postService.persistPost(data).subscribe(response => {
      this.retreivePosts()
      this.initCourse()
    })
    
  }

  submitForm(form: any) {
    if(form.invalid) {
      alert('sir tan3ass')
      return
    }
    this.addPost(form.value)
  }

}
