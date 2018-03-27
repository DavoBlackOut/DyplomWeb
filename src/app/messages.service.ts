import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './Models/Account';

@Injectable()
export class MessagesService {

  constructor(private http: HttpClient) { }

  getUnreadedMessagesCount(): Observable<number> {
    return this.http.get<number>('/api/Messages/GetUnreadedMessagesCount');
  }

  getUnreadedMessagesCountFromUser(user: User): Observable<number> {
    return this.http.get<number>('/api/Messages/GetUnreadedMessagesCountFromUser?id=' + user.userId);
  }

}
