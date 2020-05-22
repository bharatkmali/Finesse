import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';






@Injectable({
  providedIn: 'root'
  
})
export class AuthService 
{
  uid=null
  alldata=null
  emailverify:boolean
  email:boolean = true
  code:any
  newpassword:any
  constructor(public router:Router,public afauth:AngularFireAuth, public firebase:AngularFirestore) { 
    this.afauth.authState.subscribe(result=>{
     if(result){
     
      this.router.navigateByUrl("/managecontrol")
      this.uid=result.uid
      this.emailverify = result.emailVerified
     }
    })
  }

  

  signin(email,password){
    this.afauth.signInWithEmailAndPassword(email,password).then(result=>{
      this.uid=result.user.uid
      this.emailverify = result.user.emailVerified
      this.router.navigateByUrl("/managecontrol")
      console.log(this.emailverify)
    }).catch(err=>{
      alert(err)
    }) 
  }
  loggedin(){
    if(this.uid){
      if(this.emailverify == this.email){
        return true
      }else
      {
        alert("please go to verify email")
        return false
       
      }
    }
  }
  logout(){

    this.router.navigateByUrl("/auth")
    this.afauth.signOut()
    this.uid=null
  }
  signup(udata){
    this.afauth.createUserWithEmailAndPassword(udata.email,udata.password).then(result=>{
      let newuid=result.user.uid
      this.emailverify = result.user.emailVerified
      this.uid=result.user.uid
      this.alldata={newuid,...udata}
      this.firebase.collection("udata").add(this.alldata)
      this.SendVerificationMail()
     
    
    }).catch(err=>{
      alert(err)
    })
    }

    resetPassword(email: string) {
      return this.afauth.sendPasswordResetEmail(email)
        .then(result =>{
          

        }).catch((error) => console.log(error))
    

        
    }
    getuid(){
      return this.uid
    }
    signupwithgoogle(){
      this.afauth.signInWithPopup(new auth.GoogleAuthProvider());
     }
    

    SendVerificationMail(){
      this.afauth.currentUser.then(res=>{
        res.sendEmailVerification().then(result=>{
         
          
          
        
      }).catch(err=>{
        alert(err)
      })
      
    })
  }
}
