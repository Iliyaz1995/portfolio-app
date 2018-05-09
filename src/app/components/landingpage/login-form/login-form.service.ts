import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import 'rxjs/Rx'

@Injectable()
export class LoginFormService {
candidatesCol:AngularFirestoreCollection<any>
candidates: AngularFirestoreDocument<any>

    constructor(private http: HttpClient, private afs: AngularFirestore) { 
        this.candidatesCol = this.afs.collection('candidates')
    }

    addCandidates(userData) {
        return this.candidatesCol.doc(userData.username).set(userData)
    }
    
    getCandidates(){
        return this.candidatesCol;
    }
    // xample(){
    //     return this.candidatesCol.doc('iliyaz1995').update({'password': 1455858555555})
    // }
}
