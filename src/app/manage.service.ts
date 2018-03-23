import { Injectable } from '@angular/core';
import { Account } from './Models/Account';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ResponseText } from './Models/ResponseText';

@Injectable()
export class ManageService {

  constructor(private http: HttpClient) { }

  changePhoto(event: any): Observable<any> {
    const fileList: FileList = event.target.files;
    const file: File = fileList[0];

    const formData: FormData = new FormData();
    formData.append('Photo', file, file.name);

    return this.http.post('/api/Accounts/changePhoto', formData);
  }

}
