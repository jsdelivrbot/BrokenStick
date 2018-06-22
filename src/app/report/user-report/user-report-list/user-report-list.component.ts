import { UserReport } from '../user-report.model';
import { Router, ActivatedRoute } from '@angular/router'; 
import { UserReportService } from '../../service/user-report.service';
import {Component, OnInit, Input} from '@angular/core';
@Component({
  selector: 'app-user-report-list',
  templateUrl: './user-report-list.component.html',
  styleUrls: ['./user-report-list.component.css']
})
export class UserReportListComponent implements OnInit {

reports: UserReport[];
  
  constructor(private reportService: UserReportService, 
  	private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
   this.reportService.reportsChanged.subscribe(
     (reports: UserReport[]) => {
      this.reports = reports; 
     })
  this.reports = this.reportService.getReports(); 
  }

  onReport(){
  	this.router.navigate(['report'], {relativeTo: this.route})
  }


}
