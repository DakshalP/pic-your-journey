import { Component, OnInit, Output } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { StatesService } from 'src/app/states.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  images: Object[] = [];
  states: string[] = [];
  numStates: number = 4;
  count: string = '30';
  keywords: string[] = ['monument', 'canyon', 'national-park', 'waterfall', 'city', 'architecture']
  maxPicturesPerKeyword: number = 3;

  selectedImg: Object;
  selectedImgLocation;

  limitReached = false;
  timesAPIAccessed = 0;

  steps: boolean[] = [false, false, false];
  btnText: string = "Begin";

  constructor(private _http: HttpService, public _states: StatesService) { }

  ngOnInit() {
    this.getPictures();
  }

  /* Add pictures relating to each keyword to the images array. Pictures can only be from the US */
  getPictures() {
    if (!this.limitReached && this.timesAPIAccessed < 5) {
      this.timesAPIAccessed++;
      this.keywords.forEach(keyword => {
        this._http.getPhotos(keyword, this.count).subscribe(
          data => {
            console.log(data);
            this.addUSA(data);
            console.log(this.images);
          },
          error => {
            if (error['error'] === 'Rate Limit Exceeded') {
              this.limitReached = true;
              alert('The limit of images that we can fetch has been reached. This will reset in an hour, please come back then.')
            }
          }
        )
      })
    }
  }

  getStatic() {
    this.images = this._http.getStatic();
  }

  async addImgLocation(img: Object) {
    this._http.getLocation(img['location'].position.latitude, img['location'].position.longitude).subscribe(
      data => {
        this.addState(data);
      },
      error => {
        alert('Error: Sorry, we weren\'nt able to load the state that this image is from. Please reload/restart.')
      })
  }

  /* Add only pictures from the United States to the images array */
  addUSA(data: Object) {
    let pics = 0;
    for (let i = 0; i < parseInt(this.count); i++) {
      if (data[i].location.country === "United States" && data[i].location.position.latitude != null && pics < this.maxPicturesPerKeyword) {
        this.images.push(data[i]);
        pics++;
      }
    }
  }

  addState(data: Object) {
    //add state from data object to states array *at a random location*
    this.states.splice(this.getRandomInt(this.states.length), 0, this._states.abbrState(data['results'][0].address_components.state, 'name'))
    this.selectedImgLocation = data;
  }

  setStates() {
    this.addImgLocation(this.selectedImg)
    let state;
    while(this.states.length < this.numStates - 1) {
      state = this._states.randState();
      if(!(this.states.includes(state,0))) {
        this.states.push(state);
      }
    }
  }

  chooseState(state: String, element) {
    let rightState = this._states.abbrState(this.selectedImgLocation.results[0].address_components.state, 'name');
    if(state == rightState) {
      this.steps[2] = true;
      element.path[0].classList.remove('btn-gray')
    }
    else {
      element.path[0].classList.remove('btn-gray')
      element.path[0].classList.add('btn-wrong')
    }
  }

  step1() {
    if (this.steps[0]) {
      this.restart();
    }
    this.steps[0] = true;
    this.btnText = "Restart";
  }

  step2(image: Object) {
    // if (!this.steps[1]) {
    console.log(image['url']);
    this.steps[1] = true;
    this.selectedImg = image;
    this.setStates();
    this.scrollMax();
    // }
  }

  restart() {
    location.reload();
  }

  //findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
  
  //max of 3 will return ints 0,1,2 randomly
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
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