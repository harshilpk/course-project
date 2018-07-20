import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { AuthService } from './auth/auth.service';
import { ApiKey } from '../../api-key';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  // const token = '';

  constructor(private authService: AuthService,
              private apikeys : ApiKey){}

// checkState(){
//   if(localStorage.getItem('loggedIn')){
//     return authService.isAUthenticated()
//   }
// }


  ngOnInit(){
    firebase.initializeApp({
      apiKey: this.apikeys.apiKey,
      authDomain: this.apikeys.authDomain
    });

    // console.log(localStorage.getItem('loggedIn'));
    // let user = firebase.auth().currentUser;
    // if(user){
    //   console.log('user already signed In');
    // }else{
    //   console.log('user not signed IN');
    // }

  }



  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
