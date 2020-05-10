import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email
  password
  

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

  // onSubmit(signup){
  //   console.log(signup)

  // }
  signup(){
    this.auth.signup(this.email,this.password)

  }

  google(){
    this.auth.signupwithgoogle()
  }
}
