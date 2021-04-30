import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Images} from './app.form';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(private http: HttpClient) { }

  getImages(currentDate, previousDate): Observable<HttpResponse<Images>> {
    const url = `https://api.nasa.gov/planetary/apod?api_key=hDs4awltW49xPaZDXHHp9hA7WgMUAEtavlTbV6Ly&thumbs=true&start_date=${previousDate}&end_date=${currentDate}`;
    return this.http.get<Images>(url, { observe: 'response' });
  }
}