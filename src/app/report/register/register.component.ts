import { ActivatedRoute, Params, Router } from '@angular/router'; 
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm, } from '@angular/forms'; 
import {FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import {Subscription} from 'rxjs/Subscription'; 
import { UserReport } from '../user-report/user-report.model';
import { UserReportService } from '../service/user-report.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
//@ViewChild('f') slForm: NgForm; 
subscription: Subscription; 
  id: number; 
  regForm: FormGroup; 
  dateNum: number = Date.now();
  dateStr: string = this.dateNum.toString(); 


   constructor(private route: ActivatedRoute, private rpService: UserReportService, private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];  
        this.initForm(this.dateStr); 
      }
      )
  }

onSubmit(regForm: NgForm, dateStr: string){
    
   const value = regForm.value; 
    const newReport = new UserReport(this.regForm.value.fname, 
      this.regForm.value.lname, this.regForm.value.address1, 
    this.regForm.value.address2, this.regForm.value.state, 
    this.regForm.value.city, this.regForm.value.zip, this.regForm.value.country, 
    this.regForm.value.dateStr);
  
     this.rpService.addRow(newReport);
     
  	this.router.navigate(['/report']);  
  }

  private initForm(dateStr: string) {

    // let fname = ''; 
    // let lname = ''; 
    // let address1 = ''; 
    // let address2 = ''; 
    // let city = ''; 
    // let state = ''; 
    // let zip = ''; 
    // let date = dateStr; 
    // let reportArr = new FormArray([]); 

    //   const report = this.rpService.getReport(this.id); 
    //   fname = report.fname; 
    //   lname = report.lname; 
    //   address1 = report.address1; 
    //   address2 = report.address2; 
    //   city = report.city; 
    //   state = report.state; 
    //   zip = report.zip; 
    //   date = dateStr; 
  }
 }
