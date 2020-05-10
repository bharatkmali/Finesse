import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
// import { auth } from 'firebase';




@Injectable({
  providedIn: 'root'
  
})
export class AuthService {
  uid=null

  
  constructor(public router:Router,public afauth:AngularFireAuth) { 
    this.afauth.authState.subscribe(result=>{
     if(result){
      console.log(result)
      this.router.navigateByUrl("/managecontrol")
      this.uid=result.uid
     }
    })
  }

  

  signin(email,password){
    this.afauth.signInWithEmailAndPassword(email,password).then(result=>{
      this.uid=result.user.uid
      this.router.navigateByUrl("/managecontrol")

    }).catch(err=>{
      alert(err)
    }) 
  }
  loggedin(){
    if(this.uid){
      return true
    }else{
      return false
    }
  }
  logout(){

    this.router.navigateByUrl("/auth")
    this.afauth.signOut()
    this.uid=null
  }
  signup(email,password){
    this.afauth.createUserWithEmailAndPassword(email,password).then(result=>{
      console.log(result.user.uid)
      this.uid=result.user.uid
      this.router.navigateByUrl("/managecontrol")
    }).catch(err=>{
      alert(err)
    })
    }
    getuid(){
      return this.uid
    }
    signupwithgoogle(){
      this.afauth.signInWithPopup(new auth.GoogleAuthProvider());
     }
    //  signinwithfacebook(){
    //    return new Promise<any>((resolve, reject) => {
    //      let provider = new this.afauth.auth.FacebookAuthProvider();
    //      this.afauth.auth
    //     .signInWithPopup(provider)
    //     .then(res => {
    //        resolve(res);
    //      }, err => {
    //        console.log(err);
    //        reject(err);
    //      })
    //    })
    // signinwithfacebook(){
    //   this.afauth.signInWithPopup(new auth.FacebookAuthProvider())
    // }

}