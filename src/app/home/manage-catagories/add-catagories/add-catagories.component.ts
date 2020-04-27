import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-catagories',
  templateUrl: './add-catagories.component.html',
  styleUrls: ['./add-catagories.component.css']
})
export class AddCatagoriesComponent implements OnInit {

  category:{name:string,amount:string}={name:"",amount:""}
   
  constructor(public service:CategoriesService,public router:Router) { 

  }
  addcategory(){
    let newcategory={name:this.category.name,amount:this.category.amount}
    this.service.addcat(newcategory)
    this.category.name=""
    this.category.amount=""
    this.router.navigateByUrl("/Home/manage-catagories")
  
  }

 
  ngOnInit(): void {
  }

}
