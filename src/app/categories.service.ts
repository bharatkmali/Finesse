import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {
  constructor() {}
categories=[]



addcat(category){
 this.categories.push(category) 
 console.log(this.categories)

}

getallcategory(){
  return this.categories
}

editcat(index,newcategroy){
   this.categories[index]=newcategroy
}
 
deletecat(index){
this.categories.splice(index,1)
}

getcategory(index){
  return this.categories[index]
}

}
