import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpencesService {
   expencess=[]
   
  constructor(public firebase:AngularFirestore) { }

  add(expense){
    // this.expencess.push(expense)
    console.log(expense)
   
  }

  getexpense(){
    // return this.expencess
    this.firebase.collection("expencess").snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
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
