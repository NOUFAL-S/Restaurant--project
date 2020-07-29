import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  name: {string,required};
  email: string;
  message: string;
  
  

  constructor() { }

  ngOnInit(): void {
    
  }
/**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    const allInfo = `Thanks ${this.name}.We will Contact YOU`;
    alert(allInfo); 
    
  }
}
