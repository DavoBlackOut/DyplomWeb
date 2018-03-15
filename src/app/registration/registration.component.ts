import { Component, OnInit } from '@angular/core';
import { Account } from '../Models/Account';
import { RegistrationService } from '../registration.service';
import { CountriesService } from '../countries.service';
import { Country } from '../Models/Country';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  account: Account;

  status: string;

  countries: Array<Country>;

  constructor(private registrationService: RegistrationService,
    private countriesService: CountriesService) {
    this.account = new Account();

    this.countriesService.getCountries().subscribe(data => this.countries = data);
  }

  ngOnInit() {
  }

  registerSubmit(): void {
    this.registrationService.registerAccount(this.account).subscribe(data => this.status = data.response);
  }

}
