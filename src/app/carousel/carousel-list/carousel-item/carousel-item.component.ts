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
   @Input() index: number

  ngOnInit() {
  }
 
}
