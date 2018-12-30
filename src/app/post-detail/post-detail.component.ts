import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts/posts.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: any;
  id: number;
  constructor(private postservice: PostsService , private  route: ActivatedRoute ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['postId'];
    this.postservice.getPostByUserId(this.id).subscribe( post => this.post = post);

  }
}
