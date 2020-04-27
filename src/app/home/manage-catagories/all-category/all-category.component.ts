import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/categories.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements OnInit {
   items=[]
  constructor(public service:CategoriesService) { }

  ngOnInit(): void {
    this.items=this.service.getallcategory() 
  }
  
  deletebutton(i){
    this.service.deletecat(i)
  }

}
