import { TCarousel } from '../carousel.model';
import { Router, ActivatedRoute } from '@angular/router'; 
import { CarouselService } from '../carousel.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.css'], 
 
})
export class CarouselListComponent implements OnInit {
 
 thumbs: TCarousel[];
 thumbsSign: TCarousel[];
  
  constructor(private carouselService: CarouselService, 
  	private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  this.carouselService.thumbsChanged.subscribe(
    (thumbs: TCarousel[]) => {
      this.thumbs = thumbs; 
    }
    )  
  this.thumbs = this.carouselService.getThumbs(); 
  }

}