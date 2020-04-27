import { Component, OnInit } from '@angular/core';
import { ExpencesService } from 'src/app/expences.service';

@Component({
  selector: 'app-all-expences',
  templateUrl: './all-expences.component.html',
  styleUrls: ['./all-expences.component.css']
})
export class AllExpencesComponent implements OnInit {
  items=[]
  constructor(public service:ExpencesService) { }

  ngOnInit(): void {
    this.items=this.service.getexpense()
  }
  deletebutton(i){
   this.service.delexpense(i)
   }

}
