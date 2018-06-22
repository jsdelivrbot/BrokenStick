import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router, ActivatedRoute } from '@angular/router'; 
import { CarouselService } from '../carousel/carousel.service';
import { TCarousel } from '../carousel/carousel.model';
=======

>>>>>>> 96911c554a5d2c5e490b720523c328313a65f0bd
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

<<<<<<< HEAD
   mybool:boolean;
   thumbs: TCarousel[];

  constructor(private carouselService: CarouselService, 
  	private router: Router, private route: ActivatedRoute) {

 console.log(this.router.url);
 }


ngOnInit(){

  

}
}



=======
  constructor() { }

  ngOnInit() {
  }

}
>>>>>>> 96911c554a5d2c5e490b720523c328313a65f0bd
