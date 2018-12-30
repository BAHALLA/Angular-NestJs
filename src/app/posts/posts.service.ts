import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private readonly url_post = 'http://localhost:5000/posts';
  constructor(private http: HttpClient ) { }
  getPosts(): Observable<any> {
    return this.http.get(this.url_post);
  }
  getPostByUserId(id: number) {
    return this.http.get(this.url_post + '/' + id);
  }
}
