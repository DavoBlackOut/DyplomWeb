import { Injectable } from '@angular/core';
import { Account } from './Models/Account';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ResponseText } from './Models/ResponseText';

declare var Sha256: any;

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) { }

  registerAccount(account: Account): Observable<ResponseText> {
    const body = { login: account.login,
      password: Sha256.hash(account.password),
      name: account.name,
      surname: account.surname,
      email: account.email,
      countryId: account.countryId
    };

    return this.http.post<ResponseText>('/api/accounts/register', body);
  }

}
