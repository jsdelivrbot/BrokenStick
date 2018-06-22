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
  signsChanged: TCarousel[];
  
  constructor(private carouselService: CarouselService, 
  	private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
   this.carouselService.signsChanged.subscribe(
    (signs: TCarousel[]) => {
      this.signs = signs; 
    }
    ) 
  this.signs = this.carouselService.getSigns(); 
  }
 
}
