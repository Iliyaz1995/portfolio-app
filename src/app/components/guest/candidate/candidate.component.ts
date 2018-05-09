import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchCandidateService } from '../search-candidate/services/search-candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.less']
})
export class CandidateComponent implements OnInit {

  constructor(private route: ActivatedRoute, private searchService: SearchCandidateService) { }
   userId;
   userData;
  


  ngOnInit() {
    this.route.params.subscribe((params) => {
      // console.log(params);
      this.userId = params.username;
    });

    // this.searchService.getCandidates(this.userId).subscribe((res)=>{
    //   this.userData = res['0'];
    // })
  }

}
