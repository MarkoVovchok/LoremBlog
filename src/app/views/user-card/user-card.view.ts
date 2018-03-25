import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { FakeInfoService } from '../../services/fake-info/fake-info.service';
import { Post } from '../blog-body/blog-body.view';
import { PictureGeneratorService } from '../../services/picture-generator/picture-generator.service';
import { UserService } from '../../services/user-service/user.service';
import { PostService } from '../../services/post-service/post.service';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string
}

@Component({
  selector: 'user-card',
  templateUrl: './user-card.html'
})

export class UserCardView implements OnInit {

  imgSrc: string;
  userPosts: Post[];
  user: User;

  constructor(private route: ActivatedRoute,
    private router: Router, private userService: UserService, private postService: PostService) { }

  ngOnInit() {
    this.imgSrc = "https://picsum.photos/894/180/?random";
    this.userPosts = [];
    this.user = { email: '', id: 0, name: '', username: '' }
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.userService.getUser(Number(params.get('id')))).subscribe(
      (user: User) => {
        this.user = user;
        this.imgSrc = 'https://picsum.photos/894/180/?random';
      }
      )
  }

  showPosts() {
    this.userService.getUserPosts(this.user.id).subscribe(
      (data: Post[]) => {
        this.userPosts = data;
      })
  }

  showPreviousUser() {
    if (this.user.id > 1) {
      this.userPosts = [];
      this.router.navigate(['/card/' + (this.user.id - 1)]).catch(
        () => {
          this.router.navigate(['/**']);
        }
      );
    }
    else alert("No such user!")
  }

  showNextUser() {
    if (this.user.id < 10) {
      this.userPosts = [];
      this.router.navigate(['/card/' + (this.user.id + 1)]).catch(
        () => {
          this.router.navigate(['/blabla']);
        });
    }
    else alert('no such user!!');
  }
}
