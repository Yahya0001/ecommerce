import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // note add this header for CORS pass
    let token = localStorage.getItem('token');
    let headers = null;
    console.log('zrzerzerzer')
    if(token){
      headers = new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`,
      });
    }else{
      headers = new HttpHeaders({
        'Content-Type' : 'application/json'
    });
    }
    const requestChange = req.clone({headers});
    //console.log(requestChange);
    return next.handle(requestChange);
  }
}
