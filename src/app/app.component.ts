import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { AuthService } from './auth/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  // const token = '';

  constructor(private authService: AuthService){}

// checkState(){
//   if(localStorage.getItem('loggedIn')){
//     return authService.isAUthenticated()
//   }
// }


  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBR4tBAQny_lB9naytwnXZO4nPbm1Plsh4",
      authDomain: "course-project-160ee.firebaseapp.com"
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
