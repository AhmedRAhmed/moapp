import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
vots:any=[
  {id:'1', title:'للمهتمين قمنا بوضع لوريم  القياسي الأسفل', subject:'للمهتمين',endDate:'25/12/2020'},
  {id:'2', title:'قمنا بوضع نص لوريم إبسوم  الأسفل للمهتمين', subject:'للمهتمين',endDate:'30/12/2020'},
  {id:'3', title:'للمهتمين قمنا  نص لوريم إبسوم القياسي ', subject:'للمهتمين',endDate:'02/01/2021'},
  {id:'2', title:'قمنا بوضع نص لوريم إبسوم  الأسفل للمهتمين', subject:'للمهتمين',endDate:'30/12/2020'}
]
  constructor(private router: Router) {}
  viewVote(voteId){
    console.log(voteId)
    this.router.navigateByUrl('/tabs/view-vote')
  }
}
