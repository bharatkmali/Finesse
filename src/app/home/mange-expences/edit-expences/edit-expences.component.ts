import { Component, OnInit } from '@angular/core';
import { ExpencesService } from 'src/app/expences.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { CategoriesService } from 'src/app/categories.service';

@Component({
  selector: 'app-edit-expences',
  templateUrl: './edit-expences.component.html',
  styleUrls: ['./edit-expences.component.css']
})
export class EditExpencesComponent implements OnInit {
  categories=[]

  expense:{category:string,name:string,amount:string}={category:"",name:"",amount:""}
  index
  constructor(public service:ExpencesService,public router:Router,public route:ActivatedRoute,public mycategory:CategoriesService) { }

  ngOnInit(): void {
    this.index=this.route.snapshot.paramMap.get("id")
    console.log(this.index)
    this.expense=this.service.getupdate(this.index)
    this.categories=this.mycategory.getallcategory()
  
  }

  editbutton(){
    let update={category:this.expense.category,name:this.expense.name,amount:this.expense.amount}
    this.service.editexpense(this.index,update)
    this.expense.name=""
    this.expense.amount=""
    this.expense.category=""
    console.log(update)
    this.router.navigateByUrl("Home/mange-expences")

  }
}
