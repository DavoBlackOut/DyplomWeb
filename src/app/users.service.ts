import { Injectable } from '@angular/core';
import { User } from './Models/Account';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ResponseText } from './Models/ResponseText';
import { Message } from './Models/Message';
import { SearchModel } from './Models/SearchModel';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(filter: SearchModel): Observable<Array<User>> {
    let link = '/api/users/getUsers?';

    if (filter) {
      if (filter.searchString) {
        link = link + 'searchstring=' + filter.searchString;
      }

      if (filter.country) {
        link = link + '&Country=' + filter.country.countryId;
      }
    }

    return this.http.get<Array<User>>(link);
  }

  getDialog(user: User, page = 0): Observable<Array<Message>> {
    return this
      .http
      .get<Array<Message>>
      ('/api/users/getDialog?Id=' + user.userId + '&page=' + page);
  }

  sendMessage(message: Message): Observable<Message> {
    const body = { GetterId: message.getterId, Text: message.text };

    return this
      .http
      .post<Message>('/api/users/sendMessage', body);
  }

}
