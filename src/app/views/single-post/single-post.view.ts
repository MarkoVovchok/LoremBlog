import { Component, OnInit } from '@angular/core';
import { Post } from '../blog-body/blog-body.view';
import { PostService } from '../../services/post-service/post.service';
import { UserService } from '../../services/user-service/user.service';
import { User } from '../user-card/user-card.view';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'single-post',
  templateUrl: './single-post.html'
})

export class SinglePostView implements OnInit {

  post: Post;
  user: User;

  constructor(private postService: PostService, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = { email: undefined, id: 0, name: undefined, username: undefined };
    this.post = { body: undefined, id: 0, title: undefined, userId: 0 };
    this.initPost();
  }

  initPost() {
    this.postService.getPost(Number(this.route.snapshot.paramMap.get('id'))).subscribe(
      (post: Post) => {
        this.post = post;
        this.initUser();
      }
    );
  }

  initUser() {
    this.userService.getUser(this.post.userId).subscribe(
      (user: User) => {
        this.user = user;
      }
    )
  }
}
