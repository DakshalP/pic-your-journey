import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  images: Object = [{
      url: "https://images.unsplash.com/photo-1569493086584-33e0b36f3145?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
    },
    {
      url: "https://images.unsplash.com/photo-1573755654354-4235c9ab1ac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80"
    },
    {
      url: "https://images.unsplash.com/photo-1573554394544-930a4cf6fc66?ixlib=rb-1.2.1&auto=format&fit=crop&w=2704&q=80"
    },
    {
      url: "https://images.unsplash.com/photo-1568495824441-a2052db83f64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=957&q=80"
    }]

  constructor(private http: HttpClient) { }

  get() {
    return this.images;
  }
}
