import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from './recipe'

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  @Input() selected:Recipe;

  constructor() { }

  ngOnInit() {
  }

}
