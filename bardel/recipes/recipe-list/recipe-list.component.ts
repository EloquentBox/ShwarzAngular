import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple recipe', 'https://www.kitchensanctuary.com/wp-content/uploads/2018/02/Slow-Cooker-Healthier-SYn-Free-Chicken-Rogan-Josh-Recipe-square-FS-300x300.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
