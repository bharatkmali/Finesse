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
    // console.log(expense)
    this.firebase.collection("expencess").add(expense)
   
  }

  getexpense(){
    // return this.expencess
    return this.firebase.collection("expencess").snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  delexpense(i){
  //  this.expencess.splice(index,1)
    this.firebase.collection("expencess").doc(i).delete()
  }
  editexpense(index,update){
    // this.expencess[index]=update
    this.firebase.collection("expencess").doc(index).update(update)
  }
  getupdate(id)
  {
    // return this.expencess[index]
    return this.firebase.collection("expencess").doc(id).valueChanges()
  }
}
