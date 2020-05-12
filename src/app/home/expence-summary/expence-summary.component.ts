import { Component, OnInit } from '@angular/core';
import { ExpencesService } from 'src/app/expences.service';
import { CategoriesService } from 'src/app/categories.service';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/service/auth.service';
import { element } from 'protractor';

@Component({
  selector: 'app-expence-summary',
  templateUrl: './expence-summary.component.html',
  styleUrls: ['./expence-summary.component.css']
})
export class ExpenceSummaryComponent implements OnInit {
    summary:any
    category:any
    sum
    
  constructor(public service:ExpencesService,public firebase:AngularFirestore,public auth:AuthService,public mycategory:CategoriesService) { }

  ngOnInit(): void {
  
    this.mycategory.getallcategory().subscribe(result=>{
      this.category=result

    })
  }
  getexpense(category){
    // return this.expencess
    return this.firebase.collection("expencess",ref=>ref.where("uid","==",this.auth.getuid()).where("category","==",category)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe(result=>{
      this.summary=result
      this.sum =this.getsummary()
    })
  }
  
  onsubmitcat(event){
      console.log(event.target.value)
      this.getexpense(event.target.value)
      // this.sum=this.getsummary()
  }

  getsummary(){
    let sum =0;
    this.summary.forEach(element=>{
      sum=sum+element.amount
    })
    return sum
  }


  // getSum(column) : number {
  //   let sum = 0;
  //   for(let i = 0; i < this.summary.length; i++) {
  //     sum += parseFloat(this.summary[i][column]);
  //   }
  //   return sum;
  // }
//  filter( 'SumColumn', function(){
//     return function(item, columnToSum){
//       let sum = 0;
//       for (let i = 0; i < item.length; i++){
//           sum += parseFloat(item[i][columnToSum]) || 0;

//       }
//         return sum;
//     }
//   }


}
