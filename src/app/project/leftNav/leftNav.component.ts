import { Component, OnInit } from '@angular/core';
import { TCarousel } from '../../carousel/carousel.model';
import { Router, ActivatedRoute } from '@angular/router'; 
import { CarouselService } from '../../carousel/carousel.service';

@Component({
  selector: 'app-leftNav',
  templateUrl: './leftNav.component.html',
  styleUrls: ['./leftNav.component.css']
})
export class leftNavComponent implements OnInit {
 	thumbs: TCarousel[];
  	thumbsChanged: TCarousel[];

  constructor(private carouselService: CarouselService, 
  	private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit() {}

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

   

