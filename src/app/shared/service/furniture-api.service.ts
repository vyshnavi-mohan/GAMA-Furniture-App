import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environments/environment.prod';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FurnitureApiService {

  constructor(private http: HttpClient) { }

  // Get Furniture List
  // getAllFurniture(): Observable<any> {
  //   let url = 'http://localhost:5300/inventory/';
  //   return this.http.get(url)
  //     .pipe(
  //       catchError(this.errorMgmt)
  //     )
  // }

  private parseResponse(obj){
    return Object.keys(obj).map(key => obj[key]);
    }
    getAllFurniture(){
    return this.http.get('http://localhost:5300/inventory')
    .pipe(map(r => this.parseResponse(r)))
    }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}
