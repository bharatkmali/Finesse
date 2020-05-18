import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CategoriesService } from 'src/app/categories.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  udata=[]
  google:any
  slideChangeMessage = '';
  constructor(public firebase:AngularFirestore,public service:CategoriesService,public afauth:AngularFireAuth) { 
    this.service.userdata().subscribe(result=>{
      this.udata=result[0].uname
      console.log(this.udata)
      console.log(result[0].uname)
   })
   this.afauth.authState.subscribe(res=>{
     this.google=res
     console.log(res)
     console.log(this.google)
   })
  }
  

  ngOnInit(): void {
  
}

 
slides = [
  {image: 'assets/image/expensive-management1.png'},
  {image: 'assets/image/notebook-and-pen-beside-red-mug-on-gray-surface-3774057.jpg'},
  {image: 'assets/image/financial-reports-datapine.png'}
];

log(event: number) {
  this.slideChangeMessage = `Slide has been switched: ${event}`;
}

}