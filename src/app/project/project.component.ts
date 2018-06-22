import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { CarouselService } from '../carousel/carousel.service';
import { TCarousel } from '../carousel/carousel.model';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

   mybool:boolean;
   thumbs: TCarousel[];

  constructor(private carouselService: CarouselService, 
  	private router: Router, private route: ActivatedRoute) {

 console.log(this.router.url);
 }


ngOnInit(){

  

}
}



