import { Component, OnInit } from '@angular/core';
import { SearchModel } from '../Models/SearchModel';
import { UsersService } from '../users.service';
import { User } from '../Models/Account';
import { LanguageService } from '../language.service';
import { Language } from '../Models/Language';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  filter: SearchModel;
  users: Array<User>;
  languages: Array<Language>;
  selectedUser: User;

  status: string;

  constructor(private usersService: UsersService,
    private languageService: LanguageService) {
    this.filter = new SearchModel();
    this.status = '1';
    this.selectedUser = new User();

    this.users = new Array<User>();

    this.languageService.getLanguages().subscribe(data => this.languages = data);

    this.onFilterChange();
  }

  ngOnInit() {
  }

  onFilterChange() {
    this.usersService.getUsers(this.filter).subscribe(data => {
      this.users = data;

      this.users.forEach(user => {
        this.languageService.getKnownLanguages(user).subscribe(languages => user.knownLanguages = languages);
      });
    });
  }

  scrolling() {
    this.status = this.status + '1';
  }

  selectUser(user: User) {
    this.selectedUser = user;

    this.languageService.getLearnLanguages(this.selectedUser).subscribe(data => this.selectedUser.learnLanguages = data);
  }

}
