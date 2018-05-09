import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SearchCandidateService } from './services/search-candidate.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { searchData } from './services/search-candidate.interface';
import { AngularFireDatabase } from "angularfire2/database";


@Component({
  selector: 'app-search-candidate',
  templateUrl: './search-candidate.component.html',
  styleUrls: ['./search-candidate.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class SearchCandidateComponent implements OnInit {

  
  searchForm:FormGroup;
   
  constructor(private db: AngularFireDatabase, private SCR:SearchCandidateService) { 
    this.searchForm = new FormGroup({
      'search': new FormControl('', Validators.required)
    });
  }
  
userData:any;

  ngOnInit() {
    this.SCR.getCandidates().subscribe((res) => {
      this.userData = res;
      console.log(this.userData);
    })
  }
  
}
