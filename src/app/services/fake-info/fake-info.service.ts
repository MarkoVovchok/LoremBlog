import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../views/blog-body/blog-body.view';
import { User } from '../../views/user-card/user-card.view';


@Injectable()
export class FakeInfoService {

  constructor(private http: HttpClient) { }

  getFakeArticles(): Observable<Post[]> {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }

  postFakeArticle(post: Post): Observable<Post> {
    return this.http.post<Post>("https://jsonplaceholder.typicode.com/posts", post);
  }

  getMyFakePost(postId:number): Observable<Post> {
    return this.http.get<Post>("https://jsonplaceholder.typicode.com/posts/" + postId);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>("https://jsonplaceholder.typicode.com/users/" + userId);
  }

  getUserPosts(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
  }



}
