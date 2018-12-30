import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {HomeComponent} from './home/home.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {PostsComponent} from './posts/posts.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ContactComponent} from './contact/contact.component';
import {AuthService} from './auth/auth.service';
import {AuthComponent} from './auth/auth.component';
import {AuthGarde} from './auth/auth.garde';

const routes: Routes = [
  {path: '',  canActivate: [AuthGarde], component: HomeComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'home',  canActivate: [AuthGarde], component: HomeComponent},
  {path: 'users',  canActivate: [AuthGarde], component: UsersComponent},
  {path: 'users/:userId', component: UserDetailComponent},
  {path: 'posts',  component: PostsComponent},
  {path: 'posts/:postId', component: PostDetailComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
