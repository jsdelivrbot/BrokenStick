import { ActivatedRoute, Params, Router } from '@angular/router'; 
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm, } from '@angular/forms'; 
import {FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import {Subscription} from 'rxjs/Subscription'; 

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],

})
export class JavascriptComponent implements OnInit {

  subscription: Subscription; 
  id: number; 
  jScriptForm: FormGroup; 
  prime: number; 
  bool: boolean; 
  jscript: string; 

   constructor(private route: ActivatedRoute, private router: Router) {
    
    }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];  
      //  this.initForm(this.dateStr); 
      }
      )
  }


isPrime(jscript: string){ 
  
  this.prime; 
  this.bool = false; 

  this.jScriptForm = new FormGroup({
      jscript: new FormControl()

  });
  this.prime = parseInt(this.jscript);
    console.log(this.prime); 

	var divisor = 2; 

	while (this.prime> divisor){
		if(this.prime % divisor == 0){  
			this.bool = false; 
      return this.bool; 

		}
		else
			divisor++;
    this.bool = true; 
    return this.bool; 
	}
  
console.log(this.bool); 

}

 
}
