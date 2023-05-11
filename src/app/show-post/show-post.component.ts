import { Post } from './../models/post';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {

  myPost: Post | null = null 

  constructor(private router: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
      this.router.params.subscribe((params: any) => this.getPost(params.id))
  }

  getPost(id: number) {
    this.postService.getOnePost(id).subscribe(post => this.myPost = post)
  }

}
