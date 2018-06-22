import { Component, OnInit } from '@angular/core';
import { TCarousel } from '../../carousel/carousel.model';
import { Router, ActivatedRoute } from '@angular/router'; 
import { CarouselService } from '../../carousel/carousel.service';

@Component({
  selector: 'app-signs',
  templateUrl: './signs.component.html',
  styleUrls: ['./signs.component.css']
})
export class SignsComponent implements OnInit {

 signs: TCarousel[];
<<<<<<< HEAD
  signsChanged: TCarousel[];
=======
  thumbsChanged: TCarousel[];
>>>>>>> 96911c554a5d2c5e490b720523c328313a65f0bd
  
  constructor(private carouselService: CarouselService, 
  	private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
<<<<<<< HEAD
   this.carouselService.signsChanged.subscribe(
    (signs: TCarousel[]) => {
      this.signs = signs; 
    }
    ) 
=======
   
>>>>>>> 96911c554a5d2c5e490b720523c328313a65f0bd
  this.signs = this.carouselService.getSigns(); 
  }
 
}
