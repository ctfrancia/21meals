import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private _headers: any = {
    'Content-Type': 'application/json',
  };

  constructor(private _http: HttpClient) {}

  saveRecipesToDB(recipes: object[]) {
    console.log(JSON.stringify(recipes));
    try {
      this._http
        .post('http://localhost:3001/recipes/downloadedRecipes', recipes, {
          headers: this._headers,
        })
        .subscribe(() => console.log('hi'));
    } catch (err) {
      console.log('error ', err);
    }
  }

  getRecipesFromDB() {
    return this._http.get('http://localhost:3001/recipes/downloadedRecipes');
  }
}
