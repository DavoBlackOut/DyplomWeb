import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from './Models/Post';
import { Account } from './Models/Account';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(user: Account): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('/api/Posts/GetPosts' + (user === null ? '' : '?id=' + user.accountId));
  }

  sendPost(post: Post): Observable<Post> {
    const body = { content: post.content };

    return this.http.post<Post>('/api/Posts/SendPost', body);
  }

  deletePost(post: Post): Observable<any> {
    return this.http.delete('/api/Posts/DeletePost?Id=' + post.postId);
  }

}
