import {Subscription} from 'rxjs/Subscription'; 
import {Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  	 
  }
  onBack(){
  	this.router.navigate(['/report']); 
  }
}
