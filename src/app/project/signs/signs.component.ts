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
  thumbsChanged: TCarousel[];
  
  constructor(private carouselService: CarouselService, 
  	private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
   
  this.signs = this.carouselService.getSigns(); 
  }
 
}
