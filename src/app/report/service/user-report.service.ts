import {Injectable} from '@angular/core'; 
import {Subject } from 'rxjs/Subject'; 
import { UserReport } from '../user-report/user-report.model';
import { Router, ActivatedRoute } from '@angular/router'; 

@Injectable()

export class UserReportService {
    reportsChanged = new Subject<UserReport[]>();
    
	private reports: UserReport[] = [

    new UserReport('Strawberry', 'Dacri', '123 Address Lane', '','Stockbridge','MI','49285','USA','Today_Date'),
    new UserReport('Cherry', 'Dacri', '123 Address Lane', '','Stockbridge','MI','49285','USA','Today_Date'),
    new UserReport('Orange', 'Dacri', '123 Address Lane', '','Stockbridge','MI','49285','USA','Today_Date'),
    new UserReport('Grape', 'Dacri', '123 Address Lane', '','Stockbridge','MI','49285','USA','Today_Date'),
    new UserReport('Mango', 'Dacri', '123 Address Lane', '','Stockbridge','MI','49285','USA','Today_Date'),
    new UserReport('Peach', 'Dacri', '123 Address Lane', '','Stockbridge','MI','49285','USA','Today_Date'),
    new UserReport('Apple', 'Dacri', '123 Address Lane', '','Stockbridge','MI','49285','USA','Today_Date'),
    
    ];

    	constructor(){}

    	getReports() {
    	return this.reports.slice(); 
    	}
        getReport(index: number){
            return this.reports[index]; 
        }

        addRow(report: UserReport){ 
        this.reports.push(report);
        this.reportsChanged.next(this.reports.slice());
        console.log(report); 
      }
       
    	
}

