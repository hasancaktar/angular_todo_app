import { Component } from '@angular/core';
import { Model } from './models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sd_angular';
  model = new Model
  getUser(){
  return this.model.user
  }
  getItems(){
    return this.model.items
  }
}

