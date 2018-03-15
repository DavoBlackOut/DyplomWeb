import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Language } from './Models/Language';
import { ResponseText } from './Models/ResponseText';
import { User } from './Models/Account';

@Injectable()
export class LanguageService {

  constructor(private http: HttpClient) { }

  getLanguages(): Observable<Array<Language>> {
    return this
      .http
      .get<Array<Language>>('/api/languages/getLanguages');
  }

  // For first time for self
  getKnownLanguages(user?: User): Observable<Array<Language>> {
    let link = '/api/languages/getKnownLanguages';

    if (user) {
      link = link + '?Id=' + user.userId;
    }

    return this
      .http
      .get<Array<Language>>(link);
  }

  // For first time for self
  getLearnLanguages(user?: User): Observable<Array<Language>> {
    let link = '/api/languages/getLearnLanguages';

    if (user) {
      link = link + '?Id=' + user.userId;
    }

    return this
      .http
      .get<Array<Language>>(link);
  }

  getRestLanguages(): Observable<Array<Language>> {
    return this
      .http
      .get<Array<Language>>('/api/languages/getRestLanguages');
  }

  addLearnLanguages(language: Language): Observable<Language> {
    return this
      .http
      .put<Language>('/api/languages/addLearnLanguage', language);
  }

  addKnownLanguages(language: Language): Observable<Language> {
    return this
      .http
      .put<Language>('/api/languages/addKnownLanguage', language);
  }

  remove(language: Language): Observable<ResponseText> {
    return this
      .http
      .delete<ResponseText>('/api/languages/remove?id=' + language.languageId);
  }
}
