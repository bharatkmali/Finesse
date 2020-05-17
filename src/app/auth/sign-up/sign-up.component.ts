import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { CategoriesService } from 'src/app/categories.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  udata:{uname:string,email:string,password:string}={uname:"",email:"",password:""}

  constructor(public auth:AuthService,public service:CategoriesService) { }

  ngOnInit(): void {
  }

  // onSubmit(signup){
  //   console.log(signup)

  // }
  signup(){
     let newudata={uname:this.udata.uname,email:this.udata.email,password:this.udata.password}
    //  this.service.userdata(newudata)
     this.auth.signup(newudata)
     
    
  }

  google(){
    this.auth.signupwithgoogle()
  }
}
