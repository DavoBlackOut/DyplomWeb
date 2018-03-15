import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../Models/Account';
import { HttpClient } from 'selenium-webdriver/http';
import { AuthorizationService } from '../authorization.service';
import { Router } from '@angular/router';
import { ManageService } from '../manage.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  account: Account;

  userStatus: string;

  constructor(private authorizationService: AuthorizationService,
    private manageService: ManageService,
    private router: Router) {
    this.authorizationService.getAccount().subscribe(data => {
      this.account = data;
    });

    this.userStatus = 'User status';
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
      .subscribe(data => {
        if (data.response === 'OK') {
          window.location.reload();
        }
      });
  }

  saveStatus() {
    if (this.userStatus === 'aa') {
      this.userStatus = 'b';
    }
  }

}
