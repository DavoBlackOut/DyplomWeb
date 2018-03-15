import { Injectable } from '@angular/core';
import { Account } from './Models/Account';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ResponseText } from './Models/ResponseText';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Injectable()
export class AuthorizationService {

  constructor(private http: HttpClient,
    private cookieService: CookieService) { }

  loginAccount(account: Account): Observable<Account> {
    const body = { login: account.login, password: account.password };

    return this.http.post<Account>('/api/accounts/login', body);
  }

  getAccount(): Observable<Account> {
    return this.http.get<Account>('/api/accounts/getAccount');
  }

  signOut(): void {
    this.cookieService.remove('AccountId');

    this.http.delete('/api/accounts/signOut');
  }

}
