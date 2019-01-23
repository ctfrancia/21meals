import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { isObject } from 'util';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: any;
  @Input() summarised: boolean = true;
  @Input() onDownloadPage: boolean = false;

  instructions: boolean = false;

  nutritionDetailsOpen: boolean = false;
  nutritionalValue: any;
  recipeDetails: any;
  youtubesrc: any;

  constructor(private rs: RecipesService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (!isObject(this.recipe)) this.recipe = JSON.parse(this.recipe);

    if (this.recipe.youTubeId) {
      this.youtubesrc = this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/' + this.recipe.youTubeId,
      );
    }

    if (this.onDownloadPage) {
      this.recipe.id = this.recipe.recipe_json_details.id;
    }
    if (this.summarised && !this.recipe.youTubeId) {
      this.rs.getRecipeDetailsById(this.recipe.id).subscribe(response => {
        this.recipe = response;
      });
    }
  }

  showInstructions() {
    this.instructions = !this.instructions;
  }

  getNutritionById(id) {
    this.rs.getNutritionById(id).subscribe(response => {
      this.nutritionDetailsOpen = !this.nutritionDetailsOpen;
      this.nutritionalValue = response;
      console.log(this.nutritionalValue);
    });
  }

  addToMyRecipes() {
    console.log(
      'add this recipe to the recipes_loved table in the database',
      this.recipe,
    );
  }

  isObject(obj) {
    return obj !== undefined && obj !== null && obj.constructor == Object;
  }
}
