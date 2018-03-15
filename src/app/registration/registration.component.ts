import { Component, OnInit } from '@angular/core';
import { Account } from '../Models/Account';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  account: Account;

  status: string;

  constructor(private registrationService: RegistrationService) {
    this.account = new Account();
  }

  ngOnInit() {
  }

  registerSubmit(): void {
    this.registrationService.registerAccount(this.account).subscribe(data => this.status = data.response);
  }

}
