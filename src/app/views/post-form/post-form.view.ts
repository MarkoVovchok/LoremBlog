import { Component, OnInit, ViewChild } from '@angular/core';
import { FakeInfoService } from '../../services/fake-info/fake-info.service';
import { NgForm } from '@angular/forms';
import { Post } from '../blog-body/blog-body.view';
import { User } from '../user-card/user-card.view';
import { PostService } from '../../services/post-service/post.service';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.html'
})
export class PostFormView implements OnInit {

  @ViewChild("postForm") postForm: NgForm;
  post: Post;
  users: User[];


  constructor(private userService: UserService, private postService: PostService) { }

  ngOnInit() {
    this.post = { body: "", title: "", id: 0, userId: 0 };
    this.users = [];
    this.initUsers();
  }

  postNew() {
    this.postService.post(this.post);
    this.postForm.reset();
  }

  initUsers() {
    this.userService.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
      },
      (erorr) => {
        console.log(erorr);
      }
    )
  }




}
