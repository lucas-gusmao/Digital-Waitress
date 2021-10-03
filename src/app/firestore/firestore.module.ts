import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { firebaseConfig } from 'src/firebase.config';
import { AngularFireModule } from '@angular/fire'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig.firebase)
  ]
})
export class FirestoreModule { }
