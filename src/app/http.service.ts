import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiKey: string = '';
  private locationApiKey: string = '';
  apiUrl: string = 'https://api.unsplash.com/photos/random?client_id=' + this.apiKey;
  locationApiUrl: string = 'https://api.geocod.io/v1.4/reverse?api_key=' + this.locationApiKey;

  imageStatic: Object[] = [
    {
      "id": "Dwu85P9SOIk",
      "created_at": "2016-05-03T11:00:28-04:00",
      "updated_at": "2016-07-10T11:00:01-05:00",
      "width": 2448,
      "height": 3264,
      "color": "#6E633A",
      "downloads": 1345,
      "likes": 24,
      "liked_by_user": false,
      "description": "A man drinking a coffee.",
      "exif": {
        "make": "Canon",
        "model": "Canon EOS 40D",
        "exposure_time": "0.011111111111111112",
        "aperture": "4.970854",
        "focal_length": "37",
        "iso": 100
      },
      "location": {
        "name": "Montreal, Canada",
        "city": "Montreal",
        "country": "Canada",
        "position": {
          "latitude": 45.4732984,
          "longitude": -73.6384879
        }
      },
      "current_user_collections": [ // The *current user's* collections that this photo belongs to.
        {
          "id": 206,
          "title": "Makers: Cat and Ben",
          "published_at": "2016-01-12T18:16:09-05:00",
          "updated_at": "2016-07-10T11:00:01-05:00",
          "cover_photo": null,
          "user": null
        },
        // ... more collections
      ],
      "urls": {
        "raw": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
        "full": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg",
        "regular": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
        "small": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max",
        "thumb": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max"
      },
      "links": {
        "self": "https://api.unsplash.com/photos/Dwu85P9SOIk",
        "html": "https://unsplash.com/photos/Dwu85P9SOIk",
        "download": "https://unsplash.com/photos/Dwu85P9SOIk/download",
        "download_location": "https://api.unsplash.com/photos/Dwu85P9SOIk/download"
      },
      "user": {
        "id": "QPxL2MGqfrw",
        "updated_at": "2016-07-10T11:00:01-05:00",
        "username": "exampleuser",
        "name": "Joe Example",
        "portfolio_url": "https://example.com/",
        "bio": "Just an everyday Joe",
        "location": "Montreal",
        "total_likes": 5,
        "total_photos": 10,
        "total_collections": 13,
        "instagram_username": "instantgrammer",
        "twitter_username": "crew",
        "links": {
          "self": "https://api.unsplash.com/users/exampleuser",
          "html": "https://unsplash.com/exampleuser",
          "photos": "https://api.unsplash.com/users/exampleuser/photos",
          "likes": "https://api.unsplash.com/users/exampleuser/likes",
          "portfolio": "https://api.unsplash.com/users/exampleuser/portfolio"
        }
      }
    },
    {
      "id": "Dwu85P9SOIk",
      "created_at": "2016-05-03T11:00:28-04:00",
      "updated_at": "2016-07-10T11:00:01-05:00",
      "width": 2448,
      "height": 3264,
      "color": "#6E633A",
      "downloads": 1345,
      "likes": 24,
      "liked_by_user": false,
      "description": "A man drinking a coffee.",
      "exif": {
        "make": "Canon",
        "model": "Canon EOS 40D",
        "exposure_time": "0.011111111111111112",
        "aperture": "4.970854",
        "focal_length": "37",
        "iso": 100
      },
      "location": {
        "name": "Montreal, Canada",
        "city": "Montreal",
        "country": "Canada",
        "position": {
          "latitude": 45.4732984,
          "longitude": -73.6384879
        }
      },
      "current_user_collections": [ // The *current user's* collections that this photo belongs to.
        {
          "id": 206,
          "title": "Makers: Cat and Ben",
          "published_at": "2016-01-12T18:16:09-05:00",
          "updated_at": "2016-07-10T11:00:01-05:00",
          "cover_photo": null,
          "user": null
        },
        // ... more collections
      ],
      "urls": {
        "raw": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
        "full": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg",
        "regular": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
        "small": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max",
        "thumb": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max"
      },
      "links": {
        "self": "https://api.unsplash.com/photos/Dwu85P9SOIk",
        "html": "https://unsplash.com/photos/Dwu85P9SOIk",
        "download": "https://unsplash.com/photos/Dwu85P9SOIk/download",
        "download_location": "https://api.unsplash.com/photos/Dwu85P9SOIk/download"
      },
      "user": {
        "id": "QPxL2MGqfrw",
        "updated_at": "2016-07-10T11:00:01-05:00",
        "username": "exampleuser",
        "name": "Joe Example",
        "portfolio_url": "https://example.com/",
        "bio": "Just an everyday Joe",
        "location": "Montreal",
        "total_likes": 5,
        "total_photos": 10,
        "total_collections": 13,
        "instagram_username": "instantgrammer",
        "twitter_username": "crew",
        "links": {
          "self": "https://api.unsplash.com/users/exampleuser",
          "html": "https://unsplash.com/exampleuser",
          "photos": "https://api.unsplash.com/users/exampleuser/photos",
          "likes": "https://api.unsplash.com/users/exampleuser/likes",
          "portfolio": "https://api.unsplash.com/users/exampleuser/portfolio"
        }
      }
    }
  ]

  //for testing and debugging purposes
  imagesNewJersey: Object[] = [{"id":"gzGrIlqC5Qg","created_at":"2019-05-14T10:43:19-04:00","updated_at":"2019-11-08T16:45:41-05:00","promoted_at":null,"width":3000,"height":4000,"color":"#090805","description":null,"alt_description":"man fishing on shore during golden hour","urls":{"raw":"https://images.unsplash.com/photo-1557844977-88c80d881c25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEwMTY5OX0","full":"https://images.unsplash.com/photo-1557844977-88c80d881c25?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEwMTY5OX0","regular":"https://images.unsplash.com/photo-1557844977-88c80d881c25?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMTY5OX0","small":"https://images.unsplash.com/photo-1557844977-88c80d881c25?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEwMTY5OX0","thumb":"https://images.unsplash.com/photo-1557844977-88c80d881c25?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEwMTY5OX0"},"links":{"self":"https://api.unsplash.com/photos/gzGrIlqC5Qg","html":"https://unsplash.com/photos/gzGrIlqC5Qg","download":"https://unsplash.com/photos/gzGrIlqC5Qg/download","download_location":"https://api.unsplash.com/photos/gzGrIlqC5Qg/download"},"categories":[],"likes":6,"liked_by_user":false,"current_user_collections":[],"user":{"id":"XtQoGA8YPI0","updated_at":"2019-11-18T11:43:42-05:00","username":"elizabeth_kay","name":"Elizabeth Kay","first_name":"Elizabeth","last_name":"Kay","twitter_username":null,"portfolio_url":null,"bio":null,"location":null,"links":{"self":"https://api.unsplash.com/users/elizabeth_kay","html":"https://unsplash.com/@elizabeth_kay","photos":"https://api.unsplash.com/users/elizabeth_kay/photos","likes":"https://api.unsplash.com/users/elizabeth_kay/likes","portfolio":"https://api.unsplash.com/users/elizabeth_kay/portfolio","following":"https://api.unsplash.com/users/elizabeth_kay/following","followers":"https://api.unsplash.com/users/elizabeth_kay/followers"},"profile_image":{"small":"https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32","medium":"https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64","large":"https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"},"instagram_username":null,"total_collections":0,"total_likes":0,"total_photos":29,"accepted_tos":true},"exif":{"make":"Canon","model":"Canon PowerShot G15","exposure_time":"1/500","aperture":"2.5","focal_length":"19.7","iso":80},"location":{"title":"Long Beach Island, New Jersey, USA","name":"Long Beach Island, New Jersey, USA","city":null,"country":"United States","position":{"latitude":39.641727,"longitude":-74.1885825}},"views":17589,"downloads":89},{"id":"3gRqM5HYZ7c","created_at":"2018-09-23T14:04:26-04:00","updated_at":"2019-11-14T00:02:43-05:00","promoted_at":"2018-09-24T09:04:13-04:00","width":2745,"height":4012,"color":"#161B06","description":"Using a Micro CT machine from New Jersey Institute of Technology (NJIT), this up close xray (showing detail down to 50 micron or 0.05mm) of an orchid shows the different densities in the flower, rather than the colors normally seen.  The colors added later are known as \u2018false colors\u2019 (and usually as \u2018photoshopped\u2019 in photography).","alt_description":"red petaled flower painting","urls":{"raw":"https://images.unsplash.com/photo-1537725816588-267752b47f0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEwMTY5OX0","full":"https://images.unsplash.com/photo-1537725816588-267752b47f0e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEwMTY5OX0","regular":"https://images.unsplash.com/photo-1537725816588-267752b47f0e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMTY5OX0","small":"https://images.unsplash.com/photo-1537725816588-267752b47f0e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEwMTY5OX0","thumb":"https://images.unsplash.com/photo-1537725816588-267752b47f0e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEwMTY5OX0"},"links":{"self":"https://api.unsplash.com/photos/3gRqM5HYZ7c","html":"https://unsplash.com/photos/3gRqM5HYZ7c","download":"https://unsplash.com/photos/3gRqM5HYZ7c/download","download_location":"https://api.unsplash.com/photos/3gRqM5HYZ7c/download"},"categories":[],"likes":145,"liked_by_user":false,"current_user_collections":[],"user":{"id":"hae8rLbohfw","updated_at":"2019-11-19T08:23:00-05:00","username":"cadop","name":"Mathew Schwartz","first_name":"Mathew","last_name":"Schwartz","twitter_username":null,"portfolio_url":"http://smart-art.org","bio":"Researcher and designer that likes photography and open source work.  Happy to share my photos and hope people find good use from them.","location":null,"links":{"self":"https://api.unsplash.com/users/cadop","html":"https://unsplash.com/@cadop","photos":"https://api.unsplash.com/users/cadop/photos","likes":"https://api.unsplash.com/users/cadop/likes","portfolio":"https://api.unsplash.com/users/cadop/portfolio","following":"https://api.unsplash.com/users/cadop/following","followers":"https://api.unsplash.com/users/cadop/followers"},"profile_image":{"small":"https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32","medium":"https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64","large":"https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"},"instagram_username":null,"total_collections":10,"total_likes":0,"total_photos":305,"accepted_tos":true},"exif":{"make":null,"model":null,"exposure_time":null,"aperture":null,"focal_length":null,"iso":null},"location":{"title":"New Jersey Institute of Technology, Newark, United States","name":"New Jersey Institute of Technology, Newark, United States","city":"Newark","country":"United States","position":{"latitude":40.7423345,"longitude":-74.1793409}},"views":369324,"downloads":2803},{"id":"8eAH2kAhoZc","created_at":"2019-03-18T17:35:17-04:00","updated_at":"2019-10-18T05:06:42-04:00","promoted_at":null,"width":5184,"height":3456,"color":"#0E1014","description":"Central Railroad of New Jersey Terminal","alt_description":"panoramic grayscale photo of building facing body of water","urls":{"raw":"https://images.unsplash.com/photo-1552944843-5d12123b2450?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEwMTY5OX0","full":"https://images.unsplash.com/photo-1552944843-5d12123b2450?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEwMTY5OX0","regular":"https://images.unsplash.com/photo-1552944843-5d12123b2450?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMTY5OX0","small":"https://images.unsplash.com/photo-1552944843-5d12123b2450?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEwMTY5OX0","thumb":"https://images.unsplash.com/photo-1552944843-5d12123b2450?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEwMTY5OX0"},"links":{"self":"https://api.unsplash.com/photos/8eAH2kAhoZc","html":"https://unsplash.com/photos/8eAH2kAhoZc","download":"https://unsplash.com/photos/8eAH2kAhoZc/download","download_location":"https://api.unsplash.com/photos/8eAH2kAhoZc/download"},"categories":[],"likes":1,"liked_by_user":false,"current_user_collections":[],"user":{"id":"jDhSA98CF2o","updated_at":"2019-11-03T17:22:24-05:00","username":"gautamkrishnan","name":"Gautam Krishnan","first_name":"Gautam","last_name":"Krishnan","twitter_username":"gkthegr8","portfolio_url":"https://www.gautamkrishnan.com","bio":"Use all my photos as you please, but credits will definitely be appreciated. Do let me know where you use my work, I'll be happy to promote your website/service \u2665\u203f\u2665 Travel more and keep working on something awesome! Please do follow me :)","location":"New York, NY","links":{"self":"https://api.unsplash.com/users/gautamkrishnan","html":"https://unsplash.com/@gautamkrishnan","photos":"https://api.unsplash.com/users/gautamkrishnan/photos","likes":"https://api.unsplash.com/users/gautamkrishnan/likes","portfolio":"https://api.unsplash.com/users/gautamkrishnan/portfolio","following":"https://api.unsplash.com/users/gautamkrishnan/following","followers":"https://api.unsplash.com/users/gautamkrishnan/followers"},"profile_image":{"small":"https://images.unsplash.com/profile-fb-1539815358-0f486a3fba0e.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32","medium":"https://images.unsplash.com/profile-fb-1539815358-0f486a3fba0e.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64","large":"https://images.unsplash.com/profile-fb-1539815358-0f486a3fba0e.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"},"instagram_username":"gautamkrishnan","total_collections":5,"total_likes":27,"total_photos":112,"accepted_tos":true},"exif":{"make":"Canon","model":"Canon EOS 600D","exposure_time":"1/320","aperture":"4.5","focal_length":"90.0","iso":400},"location":{"title":"Central Railroad of New Jersey Terminal, Jersey City, United States","name":"Central Railroad of New Jersey Terminal, Jersey City, United States","city":"Jersey City","country":"United States","position":{"latitude":null,"longitude":null}},"views":57704,"downloads":251},{"id":"-MY7-K4X5C0","created_at":"2018-10-21T19:22:39-04:00","updated_at":"2019-11-14T00:11:14-05:00","promoted_at":"2018-10-22T08:27:50-04:00","width":3300,"height":2258,"color":"#FCFCFC","description":"Micro X-ray of a tiny orchid plant.","alt_description":"white flower illustration","urls":{"raw":"https://images.unsplash.com/photo-1540164116753-0f3f75070f42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEwMTY5OX0","full":"https://images.unsplash.com/photo-1540164116753-0f3f75070f42?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEwMTY5OX0","regular":"https://images.unsplash.com/photo-1540164116753-0f3f75070f42?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMTY5OX0","small":"https://images.unsplash.com/photo-1540164116753-0f3f75070f42?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEwMTY5OX0","thumb":"https://images.unsplash.com/photo-1540164116753-0f3f75070f42?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEwMTY5OX0"},"links":{"self":"https://api.unsplash.com/photos/-MY7-K4X5C0","html":"https://unsplash.com/photos/-MY7-K4X5C0","download":"https://unsplash.com/photos/-MY7-K4X5C0/download","download_location":"https://api.unsplash.com/photos/-MY7-K4X5C0/download"},"categories":[],"likes":48,"liked_by_user":false,"current_user_collections":[],"user":{"id":"hae8rLbohfw","updated_at":"2019-11-19T08:23:00-05:00","username":"cadop","name":"Mathew Schwartz","first_name":"Mathew","last_name":"Schwartz","twitter_username":null,"portfolio_url":"http://smart-art.org","bio":"Researcher and designer that likes photography and open source work.  Happy to share my photos and hope people find good use from them.","location":null,"links":{"self":"https://api.unsplash.com/users/cadop","html":"https://unsplash.com/@cadop","photos":"https://api.unsplash.com/users/cadop/photos","likes":"https://api.unsplash.com/users/cadop/likes","portfolio":"https://api.unsplash.com/users/cadop/portfolio","following":"https://api.unsplash.com/users/cadop/following","followers":"https://api.unsplash.com/users/cadop/followers"},"profile_image":{"small":"https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32","medium":"https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64","large":"https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"},"instagram_username":null,"total_collections":10,"total_likes":0,"total_photos":305,"accepted_tos":true},"exif":{"make":null,"model":null,"exposure_time":null,"aperture":null,"focal_length":null,"iso":null},"location":{"title":"New Jersey Institute of Technology, Newark, United States","name":"New Jersey Institute of Technology, Newark, United States","city":"Newark","country":"United States","position":{"latitude":40.7423345,"longitude":-74.1793409}},"views":350457,"downloads":1945},{"id":"w5_8n-7B63k","created_at":"2019-11-02T12:59:06-04:00","updated_at":"2019-11-06T16:35:04-05:00","promoted_at":null,"width":3500,"height":2151,"color":"#5DACE5","description":"Asbury Park, New Jersey","alt_description":"time lapse photography of blue waves splashing","urls":{"raw":"https://images.unsplash.com/photo-1572713904798-24f296cc32b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEwMTY5OX0","full":"https://images.unsplash.com/photo-1572713904798-24f296cc32b1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEwMTY5OX0","regular":"https://images.unsplash.com/photo-1572713904798-24f296cc32b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMTY5OX0","small":"https://images.unsplash.com/photo-1572713904798-24f296cc32b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEwMTY5OX0","thumb":"https://images.unsplash.com/photo-1572713904798-24f296cc32b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEwMTY5OX0"},"links":{"self":"https://api.unsplash.com/photos/w5_8n-7B63k","html":"https://unsplash.com/photos/w5_8n-7B63k","download":"https://unsplash.com/photos/w5_8n-7B63k/download","download_location":"https://api.unsplash.com/photos/w5_8n-7B63k/download"},"categories":[],"likes":1,"liked_by_user":false,"current_user_collections":[],"user":{"id":"eZQksxNZO6k","updated_at":"2019-11-18T13:12:52-05:00","username":"asburydigital","name":"Tommy Fawcett","first_name":"Tommy","last_name":"Fawcett","twitter_username":"asbury_digital","portfolio_url":null,"bio":null,"location":"Asbury Park, New Jersey","links":{"self":"https://api.unsplash.com/users/asburydigital","html":"https://unsplash.com/@asburydigital","photos":"https://api.unsplash.com/users/asburydigital/photos","likes":"https://api.unsplash.com/users/asburydigital/likes","portfolio":"https://api.unsplash.com/users/asburydigital/portfolio","following":"https://api.unsplash.com/users/asburydigital/following","followers":"https://api.unsplash.com/users/asburydigital/followers"},"profile_image":{"small":"https://images.unsplash.com/profile-1570072372871-07d580e16bfdimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32","medium":"https://images.unsplash.com/profile-1570072372871-07d580e16bfdimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64","large":"https://images.unsplash.com/profile-1570072372871-07d580e16bfdimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"},"instagram_username":"asbury.digital","total_collections":0,"total_likes":22,"total_photos":10,"accepted_tos":true},"exif":{"make":"Canon","model":"Canon EOS REBEL T5","exposure_time":"1/1000","aperture":"5.6","focal_length":"55.0","iso":100},"location":{"title":"Asbury Park, NJ, USA","name":"Asbury Park, NJ, USA","city":"Asbury Park","country":"United States","position":{"latitude":40.2203907,"longitude":-74.0120817}},"views":4448,"downloads":16}]

  constructor(private http: HttpClient) { }

  getStatic() {
    return this.imagesNewJersey;
  }

  getPhotos(query: string, count = '30') {
    return this.http.get(this.apiUrl + '&query=' + query + "&count=" + count );
  }

  getLocation(lat: number, long: number) {
    return this.http.get(this.locationApiUrl + '&q=' + lat + ',' + long + "&limit=1");
  }
}
