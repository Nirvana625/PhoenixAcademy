import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../test.service';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  formValue;
  userResponse;
  errText;
  errMsg;

  constructor(private formService:TestService, private storeService:StorageService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm =new FormGroup({
      email: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required)
    })
  }
  loginData(){
    console.log("The submitted value is: ",this.loginForm.value);
    this.formValue=this.loginForm.value;
    //this.formService.logData(this.formValue).subscribe((param)=>{},(err)=>{})
    this.formService.logData(this.formValue).subscribe((param)=>{
      this.userResponse=param;
      console.log("User response: ", this.userResponse);
      alert(this.userResponse.message);

      this.storeService.setData(this.userResponse.data.adminId,
        this.userResponse.data.firstname,
        this.userResponse.data.lastname,
        this.userResponse.data.token);

        this.router.navigate(['/profile']);
    },
    (err)=>{
        this.errText=err;
        this.errMsg=this.errText.error.message;
        console.log(this.errMsg,"errText");
    }
    )
  }

}