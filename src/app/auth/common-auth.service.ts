import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class CommonAuthService {

  constructor(private http: HttpClient) { }

  loggedIn = false;
  SERVER_API_URL="";
  registerUser(form: any):Observable<any>
  {
    return this.http.post('http://localhost:8080/register',form.value);
  }
   isAuthonticated(){
  	const promise = new Promise(
  		(resolve,reject) => {
  			setTimeout(() => {
          let t = localStorage.getItem('token');
          if(t){
            this.loggedIn = true;
            resolve(this.loggedIn);
          }else{
            this.loggedIn = false;
            reject();
          }
        },800);
  		});

  	return promise;
  }

  logIn(form: any): Observable<any>{
    return this.http.post('http://localhost:8080/login', JSON.stringify(form.value));
  }

  logout(token: any): Observable<any>{
    return this.http.post(this.SERVER_API_URL + 'api/logout', {'token': token});
  }

}
