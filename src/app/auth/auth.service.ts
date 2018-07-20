import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{
token: string;
isloggedIn: boolean;

constructor(private router: Router){}

  signupUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(
      error => console.log(error)
    );
  }

  signinUser(email: string, password: string){


       firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => {
            this.token = token
            // console.log(token)
            localStorage.setItem('loggedIn', token)}
          )

          // isLoggedIn = localStorage.getItem('loggedIn');
          // console.log(isLoggedIn);
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  getToken(){
     firebase.auth().currentUser.getIdToken()
     .then(
       (token: string) => this.token = token
     )
      return this.token;
  }

  isAUthenticated(){
    // console.log(localStorage.getItem('loggedIn'));
    // return this.token != null || localStorage.getItem('loggedIn') == true;
    // return localStorage.getItem('loggedIn');

    return localStorage.getItem('loggedIn') != null;

  }

  logOut(){
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/signin']);
    localStorage.clear();
  }
}
