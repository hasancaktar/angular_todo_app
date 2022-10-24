import { Component } from '@angular/core';
import { Model, Todo } from './models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sd_angular';
  model = new Model
  isDisplay:boolean = false
  getUser(){
  return this.model.user
  }
  getItems(){
    if(this.isDisplay){
      return this.model.items
    }
    return this.model.items.filter((item: { action: any; })=>!item.action);
  }
  addItem(value: string){
    if(value!=""){
      this.model.items.push(new Todo(value,false))
    }
  }
}

