import { Component, OnInit } from '@angular/core';
import { ExpencesService } from 'src/app/expences.service';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/categories.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-add-expences',
  templateUrl: './add-expences.component.html',
  styleUrls: ['./add-expences.component.css']
})
export class AddExpencesComponent implements OnInit {

   categories=[]
  expense:{category:any,name:string,date:string,amount:string}={category:"",name:"",date:"",amount:""}

  constructor(public service:ExpencesService,public router:Router,public mycategory:CategoriesService,public firebase:AngularFirestore,public auth:AuthService) {
   }

  addbutton(){
    let newexpense={category:this.expense.category,name:this.expense.name,date:this.expense.date,amount:this.expense.amount,uid:this.auth.getuid()}
    this.service.add(newexpense)
    this.expense.name=""
    this.expense.amount=""
    this.expense.date=""
    this.expense.category=""
    this.router.navigateByUrl("/managecontrol/mange-expences")
    console.log(newexpense)
   
  }

  ngOnInit(): void {
    // this.categories=this.mycategory.getallcategory()
    // this.categories=this.firebase.collection("categories").valueChanges().subscribe()
    this.mycategory.getallcategory().subscribe(result=>{
      this.categories=result
      console.log(this.categories)
    })

    
  }
  

}
