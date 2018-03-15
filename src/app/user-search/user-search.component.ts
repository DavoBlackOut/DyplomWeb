import { Component, OnInit } from '@angular/core';
import { SearchModel } from '../Models/SearchModel';
import { UsersService } from '../users.service';
import { User } from '../Models/Account';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  filter: SearchModel;
  users: Array<User>;
  selectedUser: User;

  status: string;

  constructor(private usersService: UsersService,
    private countriesService: CountriesService) {
    this.filter = new SearchModel();
    this.status = '1';
    this.selectedUser = new User();

    this.users = new Array<User>();

    this.onFilterChange();
  }

  ngOnInit() {
  }

  onFilterChange() {
    this.usersService.getUsers(this.filter).subscribe(data => {
      this.users = data;
      this.users.forEach(user => {
        this.countriesService.getCountry(user.countryId).subscribe(country => user.country = country);
      });
    });
  }

  scrolling() {
    this.status = this.status + '1';
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

}
