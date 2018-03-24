import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from './Models/Post';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(id?: number): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('/api/Posts/GetPosts' + (id === null ? '' : '?id=' + id));
  }

  sendPost(post: Post): Observable<Post> {
    const body = { content: post.content };

    return this.http.post<Post>('/api/Posts/SendPost', body);
  }

}
