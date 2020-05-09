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


}
