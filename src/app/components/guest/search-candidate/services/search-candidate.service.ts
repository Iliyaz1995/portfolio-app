import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from "angularfire2/database";
import 'rxjs/Rx'

@Injectable()
export class SearchCandidateService {

  constructor(private http:HttpClient, private db: AngularFireDatabase) { }

  getCandidates(){
    return this.db.object('candidates').valueChanges().map(res=>res)
  }

}
