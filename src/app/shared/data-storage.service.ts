import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService{

  constructor(private http: Http, private recipeService: RecipeService,
              private authService: AuthService ) {}

  storeRecipes(){
    const token =  this.authService.getToken();
    return this.http.put('https://course-project-160ee.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    // let tk= '';
   const token =  this.authService.getToken();
  //   .then(
  //     (token: string) => {
  //       tk = token;
  //     }
  //   }
  // );
    return this.http.get('https://course-project-160ee.firebaseio.com/recipes.json?auth=' + token).
    map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for(let recipe of recipes){
          if(!recipe['ingredients']){
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )
    .subscribe(
      (response) => {
        this.recipeService.setRecipes(response);
      }
    );
  }
}
