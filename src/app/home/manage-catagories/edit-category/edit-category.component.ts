import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/categories.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  index
   category:{name:string,amount:string}={name:"",amount:""}
  constructor(public service:CategoriesService,public router:Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
  this.index=this.route.snapshot.paramMap.get("id")
  console.log(this.index)
  this.category=this.service.getcategory(this.index)
  console.log(this.category)

  }
   editbutton(){
     let editcategory={name:this.category.name,amount:this.category.amount}
     this.service.editcat(this.index,editcategory)
     this.category.name=""
     this.category.amount=""
     this.router.navigateByUrl("/Home/manage-catagories")


    }
}
