import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { TodoDataService } from './api_rest/todo-data.service';
import { Todo } from './api_rest/todo';
=======

>>>>>>> 96911c554a5d2c5e490b720523c328313a65f0bd


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< HEAD
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
=======
  styleUrls: ['./app.component.css']
>>>>>>> 96911c554a5d2c5e490b720523c328313a65f0bd
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

