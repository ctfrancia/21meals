import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {

  private _headers: any = {
    'X-Mashape-Key': 'T6ktKcav9pmshTnqzzMoFJaHuajep1jjG7YjsnkoBciCcmwCKD'
  };

  private _recipesBaseURL: string = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes';
  private _foodBaseURL: string = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food';

  constructor(private _http: HttpClient) {
  }

  getRecipes(type: string = "random", params) {
    return this._http.get(`${this._recipesBaseURL}/${type}`, { params, headers: this._headers });
  }

  getRecipeDetailsById(id: number) {
    return this._http.get(`${this._recipesBaseURL}/${id}/information`, { headers: { ...this._headers } });
  }

  getNutritionById(id: number) {
    return this._http.get(`${this._recipesBaseURL}/${id}/nutritionWidget`, { headers: { ...this._headers }, responseType: 'text' });
  }


  getFoodVideos(type: string, params) {
    return this._http.get(`${this._foodBaseURL}/${type}/`, { params, headers: this._headers });
  }

}
