import {TCarousel} from '../../carousel.model';
import {Component, OnInit, Input} from '@angular/core';
import {CarouselService } from '../../carousel.service'; 

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {
  @Input() thumb: TCarousel;
<<<<<<< HEAD
  @Input() whatifs: TCarousel; 
  @Input() signs: TCarousel; 
  
=======
>>>>>>> 96911c554a5d2c5e490b720523c328313a65f0bd
   @Input() index: number

  ngOnInit() {
  }
 
}
