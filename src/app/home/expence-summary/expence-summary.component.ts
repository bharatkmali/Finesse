import { Component, OnInit } from '@angular/core';
import { ExpencesService } from 'src/app/expences.service';

@Component({
  selector: 'app-expence-summary',
  templateUrl: './expence-summary.component.html',
  styleUrls: ['./expence-summary.component.css']
})
export class ExpenceSummaryComponent implements OnInit {
    summary=[]
  constructor(public service:ExpencesService) { }

  ngOnInit(): void {
    this.service.getexpense().subscribe(result=>{
      this.summary=result
    })
    
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
