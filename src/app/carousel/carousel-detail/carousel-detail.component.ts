
import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; 
import { TCarousel } from '../carousel.model';
import { CarouselService } from '../carousel.service';

@Component({
  selector: 'app-carousel-detail',
  templateUrl: './carousel-detail.component.html',
  styleUrls: ['./carousel-detail.component.css']
})
export class CarouselDetailComponent implements OnInit {
	thumb: TCarousel; 
  id: number; 

   constructor(private carouselService: CarouselService, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){ 
  this.route.params
  .subscribe(
    (params: Params) => {
      this.id = +params['id']; 
      this.thumb = this.carouselService.getThumb(this.id); 
    }
    );

  }

  }

