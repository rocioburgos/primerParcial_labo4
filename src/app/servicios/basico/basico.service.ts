import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicoService {
  private referencia:AngularFirestoreCollection<any>;
 
  constructor(private db: AngularFirestore) {
    this.referencia= this.db.collection<any>('coleccion_prueba');
   }


   public crearDocumento(data: any) { 

    return this.referencia.add(Object.assign({},data)); 
  }

  public obtenerDocumentos(){
   return this.referencia.valueChanges({idField: "doc_id"});
  }
}
