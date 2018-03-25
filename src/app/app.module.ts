import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { PicturesCarouselComponent } from './components/pictures-carousel/pictures-carousel.component';
import { PictureGeneratorService } from './services/picture-generator/picture-generator.service';
import { FakeInfoService } from './services/fake-info/fake-info.service';
import { FooterView } from './views/footer/footer.view';
import { HeaderView } from './views/header/header.view';
import { BlogBodyView } from './views/blog-body/blog-body.view';
import { PostFormView } from './views/post-form/post-form.view';
import { NotFoundView } from './views/not-found/not-found.component';
import { UserCardView } from './views/user-card/user-card.view';
import { PostService } from './services/post-service/post.service';
import { UserService } from './services/user-service/user.service';
import { BootstrapModule } from './config/bootstrap.module';
import { SinglePostView } from './views/single-post/single-post.view';


@NgModule({
  declarations: [
    AppComponent,
    FooterView,
    PicturesCarouselComponent,
    HeaderView,
    BlogBodyView,
    PostFormView,
    NotFoundView,
    UserCardView,
    SinglePostView,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BootstrapModule,
    RouterModule.forRoot([
      { path: 'create', component: PostFormView },
      { path: 'posts', component: BlogBodyView },
      { path: 'posts/:id', component: SinglePostView },
      { path: 'card/:id', component: UserCardView },
      { path: '', redirectTo: '/posts', pathMatch: 'full' },
      { path: '**', component: NotFoundView }
    ])
  ],
  providers: [PictureGeneratorService, FakeInfoService, UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
