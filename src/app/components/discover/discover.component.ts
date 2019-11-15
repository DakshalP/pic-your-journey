import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  images: Object;
  selectedImg: Object;
  outlet: String = 'loading';
  steps: boolean[] = [false, false, false];
  btnText: String = "Begin";

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.images = this._http.get();
    console.log(this.images);
  }

  step1() {
    if(this.steps[0]) {
      location.reload();
    }
    this.steps[0] = true;
    this.outlet = 'imageSelect';
    this.btnText = "Restart";
  }

  step2(image: Object) {
    console.log(image['url']);
    this.steps[1] = true;
    this.selectedImg = image;
    this.scrollMax();
  }

  //improve this to better scroll to bottom of page
  //extra (not needed) feature for Chrome, may not work on other browsers
  scrollMax() {
    setTimeout(() => {
      window.scrollBy({ 
        top: 1000,
        left: 0, 
        behavior: 'smooth' 
      });
    }, 100)
  }

}