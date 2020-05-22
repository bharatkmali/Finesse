import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email
  password
constructor(public auth:AuthService) { }
 
  ngOnInit(): void {
  }
  
  onSubmit(userdata:NgForm){
    this.auth.signin(this.email,this.password)
    console.log(userdata.value)
  }

  resetpassword(){
    this.auth.resetPassword(this.email)
    alert("please check your email and click the link then create a newPassword")
    console.log(this.email)
  }
  google(){
    this.auth.signupwithgoogle()
  }
}
