import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-recipes-downloaded',
  templateUrl: './recipes-downloaded.component.html',
  styleUrls: ['./recipes-downloaded.component.css'],
})
export class RecipesDownloadedComponent implements OnInit {
  recipes: any;

  constructor(private dbs: DatabaseService) {}

  ngOnInit() {
    this.dbs.getRecipesFromDB().subscribe(response => {
      this.recipes = response;
    });
  }
}
