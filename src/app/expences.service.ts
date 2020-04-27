import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpencesService {
   expencess=[]
   
  constructor() { }

  add(expense){
    this.expencess.push(expense)
    console.log(expense)
  }

  getexpense(){
    return this.expencess
  }
  delexpense(index){
   this.expencess.splice(index,1)
  }
  editexpense(index,update){
    this.expencess[index]=update
  }
  getupdate(index)
  {
    return this.expencess[index]
  }
}
