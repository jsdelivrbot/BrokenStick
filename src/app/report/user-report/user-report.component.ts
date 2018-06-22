import {Subscription} from 'rxjs/Subscription'; 
import {Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { UserReport } from '../user-report/user-report.model';
import { UserReportService } from '../service/user-report.service';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.css']
})
export class UserReportComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  	 
  }
  onBack(){
  	this.router.navigate(['/register']); 
  }
}
