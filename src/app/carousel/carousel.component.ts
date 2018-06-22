import { Component, OnInit } from '@angular/core';
import { TCarousel } from '../carousel/carousel.model';
import { Router, ActivatedRoute } from '@angular/router'; 
import { CarouselService } from '../carousel/carousel.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'], 
 
})
export class CarouselComponent implements OnInit {
 // To create the image carousel for the site
  
  thumbs: TCarousel[];
  thumbsChanged: TCarousel[];
  
  constructor(private carouselService: CarouselService, 
<<<<<<< HEAD
  	private router: Router, private route: ActivatedRoute) {
    this.navLink();
     }

  ngOnInit() {
   
  }
  navLink(){
   
    if(this.router.url === '/project') {
    this.thumbs = this.carouselService.getThumbs();    
    }
    else if(this.router.url === '/project/whatif') {
    this.thumbs = this.carouselService.getWhatIfs();    
    }
    else if(this.router.url === '/project/signs') {
    this.thumbs = this.carouselService.getSigns();    
    }
    return this.thumbs; 
  }
    
 }  
=======
  	private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
   
  this.thumbs = this.carouselService.getThumbs(); 
  }
 }
>>>>>>> 96911c554a5d2c5e490b720523c328313a65f0bd
