import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from '../process-httpmsg.service';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  constructor(private http: HttpClient, private ProcessHTTPMsgService: ProcessHTTPMsgService) { }
  
  getRegister(): Observable<Array<User>> {
    return this.http.get<Array<User>>(baseURL + 'register')
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));
  }

  updateProfil(postData: User, id:number) {
    return this.http.put<void>(baseURL + 'register/' + id,postData)
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));
  }
}
