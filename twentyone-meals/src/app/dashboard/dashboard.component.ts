import { MatGridList, MatGridTile } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  show: boolean = false;
  randomRecipes: any;
  ingredientRecipes: any;
  naturalQueryRecipes: any;
  caloricRecipes: any;
  caloricRecipesWeekly: any;
  foodVideoRecipes: any;


  formIngredients: FormGroup;
  formQuery: FormGroup;
  formDailyMealsByCalories: FormGroup;
  formWeeklyMealsByCalories: FormGroup;
  foodVideosQuery: FormGroup;

  constructor(private rs: RecipesService, private fb: FormBuilder) { }

  ngOnInit() {
    this.formIngredients = this.fb.group({ ingredients: '', number: '1' });
    this.formQuery = this.fb.group({ query: '', number: '1' });
    this.formDailyMealsByCalories = this.fb.group({ targetCalories: '' });
    this.formWeeklyMealsByCalories = this.fb.group({ targetCalories: '' });
    this.foodVideosQuery = this.fb.group({ query: '', number: '1' });

    this.formIngredients.valueChanges.subscribe((val) => console.log(val))
    this.formQuery.valueChanges.subscribe((val) => console.log(val))
    this.formDailyMealsByCalories.valueChanges.subscribe((val) => console.log(val))
    this.formWeeklyMealsByCalories.valueChanges.subscribe((val) => console.log(val))
    this.foodVideosQuery.valueChanges.subscribe((val) => console.log(val))


  }

  getRandomRecipes() {
    this.rs.getRecipes("random", { number: 4, tags: "vegan, main" })
      .subscribe(response => this.randomRecipes = response)
  }

  getIngredientRecipes() {
    this.rs.getRecipes("findByIngredients", { number: this.formIngredients.value.number, ingredients: this.formIngredients.value.ingredients })
      .subscribe(response => this.ingredientRecipes = response)
  }

  getRecipesByCaloricRequirement() {
    this.rs.getRecipes("mealplans/generate", { targetCalories: this.formDailyMealsByCalories.value.targetCalories, timeFrame: "day" })
      .subscribe(response => { this.caloricRecipes = response["meals"]; })
  }

  getRecipesByWeeklyCaloricRequirement() {
    this.rs.getRecipes("mealplans/generate", { targetCalories: this.formWeeklyMealsByCalories.value.targetCalories, timeFrame: "week" })
      .subscribe(response => {
        this.caloricRecipesWeekly = response["items"];
      })
  }

  getNaturalQueryRecipes() {
    this.rs.getRecipes("search", { query: this.formQuery.value.query, number: this.formQuery.value.number })
      .subscribe(response => {
        this.naturalQueryRecipes = response["results"]
      })
  }

  getFoodVideos() {
    this.rs.getFoodVideos("videos/search", { query: this.foodVideosQuery.value.query, number: this.foodVideosQuery.value.number })
      .subscribe(response => {
        this.foodVideoRecipes = response["videos"];
      })
  }
}
