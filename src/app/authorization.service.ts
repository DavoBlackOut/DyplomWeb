import { Injectable } from '@angular/core';
import { Account } from './Models/Account';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ResponseText } from './Models/ResponseText';
import { CookieService } from 'angular2-cookie/services/cookies.service';

declare var Sha256: any;

@Injectable()
export class AuthorizationService {

  constructor(private http: HttpClient,
    private cookieService: CookieService) { }

  loginAccount(account: Account): Observable<Account> {
    const body = { login: account.login, password: Sha256.hash(account.password) };

    return this.http.post<Account>('/api/Accounts/Login', body);
  }

  getAccount(id?: number): Observable<Account> {
    return this.http.get<Account>('/api/accounts/getAccount' + (id === null ? '' : '?id=' + id));
  }

  updateAccount(account: Account): Observable<Account> {
    const body = { password: Sha256.hash(account.password),
      name: account.name, surname: account.surname, email: account.email, countryId: account.countryId };

    return this.http.put<Account>('/api/Accounts/UpdateAccount', body);
  }

  signOut(): void {
    this.cookieService.remove('AccountId');

    this.http.delete('/api/accounts/signOut');
  }

}
