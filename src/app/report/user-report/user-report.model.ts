
export class UserReport {
public fname: string; 
public lname: string; 
public address1: string; 
public address2: string; 
public city: string; 
public state: string; 
public zip: string; 
public country: string; 
public date: string; 

  constructor(fname: string, lname: string, address1: string, address2: string, city: string, state: string,
  	zip: string, country: string, date: string){
    this.fname = fname; 
    this.lname = lname;
    this.address1 = address1; 
    this.address2 = address2; 
    this.city = city; 
    this.state = state; 
    this.zip = zip; 
    this.country = country; 
    this.date = date; 
  }
}
