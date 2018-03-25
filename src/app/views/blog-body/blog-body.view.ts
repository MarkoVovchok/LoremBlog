import { Component, OnInit, ViewChild } from '@angular/core';
import { FakeInfoService } from '../../services/fake-info/fake-info.service';
import { NgForm } from '@angular/forms';
import { User } from '../user-card/user-card.view';
import { UserService } from '../../services/user-service/user.service';
import { PostService } from '../../services/post-service/post.service';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Component({
  selector: 'blog-body',
  templateUrl: './blog-body.view.html'

})
export class BlogBodyView implements OnInit {

  posts: Post[];
  users: User[];

  constructor(private userService: UserService, private postService: PostService) { }

  ngOnInit() {
    this.posts = [];
    this.users = [];
    this.getAllPosts();
    this.getAllUsers();
  }

  getAllPosts(): void {
    this.postService.getAllPosts().subscribe(
      (data: Post[]) => {
        for (let i = 0; i < 10; i++) {
          this.posts[i] = data[i];
        }
      },
      (error) => {
        console.log(error);
      })
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
      }
    )
  }

  getUsername(userId: number): string {
    for (let user of this.users) {
      if (user.id === userId) {
        return user.username;
      }
      else return "anonymous";
    }
  }


}
