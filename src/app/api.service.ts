import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from './models/plant';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private baseUrl: string = 'trefle-api';
  private token: string = 'V952bBM8B4vQaa8iOL_CHVasxmPHWKrMW2AKXAEpRvY';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  }

  getPlant(endpoint: string): Observable<{ data: Plant[] }> {
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.baseUrl}/${endpoint}`, { headers });
  }

}
