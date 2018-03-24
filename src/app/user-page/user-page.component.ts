import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../Models/Account';
import { HttpClient } from 'selenium-webdriver/http';
import { AuthorizationService } from '../authorization.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ManageService } from '../manage.service';
import { CountriesService } from '../countries.service';
import { PostsService } from '../posts.service';
import { Post } from '../Models/Post';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  account: Account;
  newPost: Post;

  userStatus: string;

  readonly id = +this.route.snapshot.paramMap.get('id');

  constructor(private authorizationService: AuthorizationService,
    private manageService: ManageService,
    private countriesService: CountriesService,
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute) {

    this.authorizationService.getAccount(this.id).subscribe(data => {
      this.account = data;
      this.countriesService.getCountry(this.account.countryId).subscribe(country => this.account.country = country);
      this.postsService.getPosts(this.id).subscribe(Posts => this.account.Posts = Posts);
    });

    this.userStatus = 'User status';
    this.newPost = new Post();
  }

  ngOnInit() {
  }

  signOut(): void {
    this.authorizationService.signOut();

    document.cookie = '';

    this.router.navigateByUrl('Account');
  }

  fileChange(event) {
    this
      .manageService
      .changePhoto(event)
      .subscribe();

    window.location.reload();
  }

  saveStatus() {
    if (this.userStatus === 'aa') {
      this.userStatus = 'b';
    }
  }

  sendPost() {
    this.postsService.sendPost(this.newPost).subscribe(data => {
      this.account.Posts.unshift(data);

      this.newPost = new Post();
    });
  }

}
