import { Injectable } from '@angular/core';
import { FakeInfoService } from '../fake-info/fake-info.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../views/user-card/user-card.view';
import { Post } from '../../views/blog-body/blog-body.view';

@Injectable()
export class UserService {

  constructor(private fake: FakeInfoService) { }

  getUsers():Observable<User[]> {
    return this.fake.getUsers();
  }

  getUser(userId: number): Observable<User> {
    return this.fake.getUser(userId);
  }

  getUserPosts(userId: number): Observable<Post[]> {
    return this.fake.getUserPosts(userId);
  }
}
