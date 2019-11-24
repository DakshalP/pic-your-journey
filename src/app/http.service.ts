import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as vars from './api-static-responses';
import * as config from 'src/app-env'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  //unsplash.com api key
  private apiKey: string = config.unsplashKey;
  //geocod.io api key 
  private locationApiKey: string = config.gecodeKey;
  apiUrl: string = 'https://api.unsplash.com/photos/random?client_id=' + this.apiKey;
  locationApiUrl: string = 'https://api.geocod.io/v1.4/reverse?api_key=' + this.locationApiKey;

  //for testing and debugging purposes
  imageStatic: Object[] = vars.imageStatic;

  constructor(private http: HttpClient) { }

  getStatic() {
    return this.imageStatic;
  }

  getPhotos(query: string, count = '30') {
    return this.http.get(this.apiUrl + '&query=' + query + "&count=" + count );
  }

  getLocation(lat: number, long: number) {
    return this.http.get(this.locationApiUrl + '&q=' + lat + ',' + long + "&limit=1");
  }
}
