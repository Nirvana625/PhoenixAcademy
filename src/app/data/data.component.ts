import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  person;
  errText;
  errMsg;


  constructor(private test:TestService) { }

  ngOnInit(): void {
    this.test.getData().subscribe(param=>{
      this.person=param;
      console.log(this.person);
    },
    (err)=>{
      this.errText=err;
      // this.errMsg=this.errText;
      console.log(this.errText,"errText")})
  
 
}
}

