import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Vehicle, VehicleDetails } from './car-list.models';

@Injectable({
  providedIn: 'root'
})
export class CarListService {
  vehicleApiUrl = 'https://itg-prd-recruit.appspot.com/api/vehicles/';


  constructor( private http: HttpClient
    ) { }

  getVehicleList(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.vehicleApiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getVehicleDetails(vehicleId: string): Observable<VehicleDetails> {
    return this.http.get<VehicleDetails>(this.vehicleApiUrl + vehicleId)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('A client-side or network error occurred:', error.error.message);
    } else {
      console.error(`Error code  : ${error.status}, ` + `error detail : ${error.error}`);
    }
    return throwError('Undefined error; please try again later.');
  }
}
