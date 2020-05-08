import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/service/auth.service';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {
 constructor(public firebase:AngularFirestore,public auth:AuthService) {}
categories=[]



addcat(category){
//  this.categories.push(category) 
//  console.log(this.categories)
let newcategory={category,uid:this.auth.getuid()}
this.firebase.collection("categories").add(newcategory)

}

getallcategory(){
  // return this.categories
  return this.firebase.collection("categories",ref=>ref.where("uid","==",this.auth.getuid())).snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as any;
      const id = a.payload.doc.id;
      return { id, ...data };
      
    }))
  );
}

editcat(index,newcategroy){
  //  this.categories[index]=newcategroy
  this.firebase.collection("categories").doc(index).update(newcategroy)
}
 
deletecat(i){
// this.categories.splice(index,1)
this.firebase.collection("categories").doc(i).delete()
}

// getcategory(index){
//   return this.categories[index]
// }

getcategory(id){
  return this.firebase.collection("categories").doc(id).valueChanges()

}
}
