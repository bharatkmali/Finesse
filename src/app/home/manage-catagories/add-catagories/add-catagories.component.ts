import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/categories.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-add-catagories',
  templateUrl: './add-catagories.component.html',
  styleUrls: ['./add-catagories.component.css']
})
export class AddCatagoriesComponent implements OnInit {

  category:{name:string,date:string}={name:"",date:""}
   
  constructor(public service:CategoriesService,public router:Router,public auth:AuthService) { 

  }
  addcategory(){
    let newcategory={name:this.category.name,date:this.category.date,uid:this.auth.getuid()}
    this.service.addcat(newcategory)
    this.category.name=""
    this.category.date=""
    this.router.navigateByUrl("/managecontrol/manage-catagories")
  
  }

 
  ngOnInit(): void {
  }

}
