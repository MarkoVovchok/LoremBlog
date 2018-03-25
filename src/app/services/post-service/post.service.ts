import { Injectable } from '@angular/core';
import { FakeInfoService } from '../fake-info/fake-info.service';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../views/blog-body/blog-body.view';

@Injectable()
export class PostService {

  constructor(private fake: FakeInfoService) { }

  getAllPosts(): Observable<Post[]> {
    return this.fake.getFakeArticles();
  }

  post(post: Post): Observable<Post> {
    return this.fake.postFakeArticle(post);
  }

  getPost(postId:number): Observable<Post> {
    return this.fake.getMyFakePost(postId);
  }
}
