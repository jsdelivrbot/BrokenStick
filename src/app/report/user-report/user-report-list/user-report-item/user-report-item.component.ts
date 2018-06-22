import {UserReport} from '../../user-report.model';
import {Component, OnInit, Input} from '@angular/core';
import { UserReportService } from '../../../service/user-report.service';

@Component({
  selector: 'app-user-report-item',
  templateUrl: './user-report-item.component.html',
  styleUrls: ['./user-report-item.component.css']
})
export class UserReportItemComponent implements OnInit {

   @Input() report: UserReport;
   @Input() index: number

  ngOnInit() {
  }
 
}
