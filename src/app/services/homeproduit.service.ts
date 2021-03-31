import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from '../process-httpmsg.service';
import { Homeproduit } from '../shared/homeproduit';


@Injectable({
  providedIn: 'root'
})
export class HomeproduitService {

  constructor(private http: HttpClient, private ProcessHTTPMsgService: ProcessHTTPMsgService) { }

  getHomeProduit(): Observable<Array<Homeproduit>> {
    return this.http.get<Array<Homeproduit>>(baseURL + 'homeproduit')
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));
  }
  
  getBestSell(): Observable<Array<Homeproduit>> {
    return this.http.get<Array<Homeproduit>>(baseURL + 'bestsell')
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));
  }

  deleteProduct(id: string): Observable<void> {
    return this.http
      .delete<void>(baseURL + 'homeproduit/' + id)
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));
  }

}
