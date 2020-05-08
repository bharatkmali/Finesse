import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService implements CanActivate{
  status=false
  constructor(public router:Router,public auth:AuthService) { }

  canActivate(): boolean {
      if(this.auth.loggedin()){
        return true
      }else{

        this.router.navigateByUrl("/auth")
        return false
      }
  }
}
