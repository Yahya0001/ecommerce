import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from '../process-httpmsg.service';
import { Slide } from '../shared/slide';

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  constructor(private http: HttpClient, private ProcessHTTPMsgService: ProcessHTTPMsgService) { }
  getSlide(): Observable<Array<Slide>> {
    return this.http.get<Array<Slide>>(baseURL + 'slides')
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));
  }
}
