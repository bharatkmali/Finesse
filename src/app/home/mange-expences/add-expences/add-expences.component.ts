import { Component, OnInit } from '@angular/core';
import { ExpencesService } from 'src/app/expences.service';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/categories.service';

@Component({
  selector: 'app-add-expences',
  templateUrl: './add-expences.component.html',
  styleUrls: ['./add-expences.component.css']
})
export class AddExpencesComponent implements OnInit {

   categories=[]
  expense:{category:string,name:string,amount:string}={category:"",name:"",amount:""}

  constructor(public service:ExpencesService,public router:Router,public mycategory:CategoriesService) {
   }

  addbutton(){
    let newexpense={category:this.expense.category,name:this.expense.name,amount:this.expense.amount}
    this.service.add(newexpense)
    this.expense.name=""
    this.expense.amount=""
    this.expense.category=""
    this.router.navigateByUrl("/Home/mange-expences")
  }

  ngOnInit(): void {
    this.categories=this.mycategory.getallcategory()
  }
  

}
