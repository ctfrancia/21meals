import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { isObject } from 'util';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe: any;
  @Input() summarised: boolean = true;

  instructions: boolean = false;
  nutritionDetailsOpen: boolean = false;
  nutritionalValue: any;
  recipeDetails: any;
  youtubesrc: any;

  constructor(private rs: RecipesService, private sanitizer: DomSanitizer) { }

  ngOnInit() {

    if (!isObject(this.recipe)) this.recipe = JSON.parse(this.recipe);

    if (this.recipe.youTubeId) {
      this.youtubesrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.recipe.youTubeId)
    }

    if (this.summarised && !this.recipe.youTubeId) {
      const regEx = /<\/?[^>]+(>|$)/g;

      this.rs.getRecipeDetailsById(this.recipe.id).subscribe(response => {
        this.recipe = response;
        //repoonse contains html tags regex to remove them
        return this.recipe.instructions = this.recipe.instructions.replace(regEx, '');
      });
    }

  }

  showInstructions() {
    this.instructions = !this.instructions;
  }

  getNutritionById(id) {
    this.rs.getNutritionById(id)
      .subscribe(response => {
        this.nutritionDetailsOpen = !this.nutritionDetailsOpen;
        this.nutritionalValue = response;
        console.log(this.nutritionalValue)
      })
  }

  isObject(obj) {
    return obj !== undefined && obj !== null && obj.constructor == Object;
  }
}

