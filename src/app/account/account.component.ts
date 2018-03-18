import { Component, OnInit } from '@angular/core';
import { Account } from '../Models/Account';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization.service';
import { MessageWebSocketService } from '../message-web-socket.service';
import { Subject } from 'rxjs/Subject';
import { Message } from '../Models/Message';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: Account;

  constructor(private location: Location,
    private router: Router,
    private authorizationService: AuthorizationService) {
    this.account = new Account();
  }

  ngOnInit() {
  }

  loginAccount(): void {
    this.authorizationService.loginAccount(this.account).subscribe(data => {
      if (data !== null) {
        this.account = data;

        this.router.navigateByUrl('UserPage');
      }
    });
  }

}
