import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-complaints',
  templateUrl: './all-complaints.page.html',
  styleUrls: ['./all-complaints.page.scss'],
})
export class AllComplaintsPage implements OnInit {
  backText = 'go back'
  complaints: any=[
    {id:'1', title:'عنوان الشكوى رقم 1', creationDate:'10/03/2020'},
    {id:'2', title:'عنوان الشكوى رقم 2', creationDate:'12/09/2020'},
    {id:'3', title:'عنوان الشكوى رقم 3', creationDate:'10/11/2020'},
    {id:'4', title:'عنوان الشكوى رقم 4', creationDate:'02/12/2020'},
]
  constructor(private router: Router) { }

  ngOnInit() {
  }
  viewComplaint(complaintId){
    console.log(complaintId)
    this.router.navigateByUrl('/tabs/view-complaint');
  }
}
