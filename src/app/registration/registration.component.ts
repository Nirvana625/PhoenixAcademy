import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../test.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  loginForm:FormGroup;
  formValue;
  userResponse;

  constructor(private formService:TestService) { }

  ngOnInit(): void {
    this.loginForm =new FormGroup({
      fname: new FormControl(null,[Validators.required]),
      lname: new FormControl(null,Validators.required),
      email: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required)
    })
    
  }
  loginData(){
    console.log("The submitted value is: ",this.loginForm.value);
    this.formValue=this.loginForm.value;
    this.formService.regData(this.formValue).subscribe(param=>{
      this.userResponse=param;
      console.log("User response: ", this.userResponse);
    })
  }

}
