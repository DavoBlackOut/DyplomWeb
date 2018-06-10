import { Component, OnInit } from '@angular/core';
import { Account } from '../Models/Account';
import { Country } from '../Models/Country';
import { AuthorizationService } from '../authorization.service';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  account: Account;
  status: string;
  countries: Array<Country>;

  constructor(private authorizationService: AuthorizationService,
  private countriesService: CountriesService) {
    this.authorizationService.getAccount().subscribe(data => {
      this.account = data;
    });
    this.countriesService.getCountries().subscribe(data => {
      this.countries = data;
    });
  }

  ngOnInit() {
  }

  public updateSubmit() {
    this.authorizationService.updateAccount(this.account).subscribe(data => {
      if (data != null) {
        alert('Successfull update');
        this.status = 'OK';
      } else {
        alert('Fail');
        this.status = 'Fail';
      }
    });
  }

}
