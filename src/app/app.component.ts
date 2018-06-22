import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './api_rest/todo-data.service';
import { Todo } from './api_rest/todo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  title = 'BrokenStick Studio';
  loadedFeature = 'home'; 
  onNavigate(feature: string) {
    this.loadedFeature = feature; 
  }
}
export class ShoppingLst {
  id: number;
  name: string;

}

