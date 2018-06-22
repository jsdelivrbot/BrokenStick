import { Component, OnInit } from '@angular/core';
import { TCarousel } from '../../carousel/carousel.model';
import { Router, ActivatedRoute } from '@angular/router'; 
import { CarouselService } from '../../carousel/carousel.service';

@Component({
  selector: 'app-whatif',
  templateUrl: './whatif.component.html',
  styleUrls: ['./whatif.component.css']
})
export class WhatifComponent implements OnInit {

  whatifs: TCarousel[];
<<<<<<< HEAD
  whatifsChanged: TCarousel[];
=======
  thumbsChanged: TCarousel[];
>>>>>>> 96911c554a5d2c5e490b720523c328313a65f0bd
  
  constructor(private carouselService: CarouselService, 
  	private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
   
<<<<<<< HEAD
   this.carouselService.whatifsChanged.subscribe(
    (whatifs: TCarousel[]) => {
      this.whatifs = whatifs; 
    }
    ) 
  this.whatifs = this.carouselService.getWhatIfs(); 
  }
 
  }
=======
  this.whatifs = this.carouselService.getWhatIf(); 
  }
 


}
>>>>>>> 96911c554a5d2c5e490b720523c328313a65f0bd
