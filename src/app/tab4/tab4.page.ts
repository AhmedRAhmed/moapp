import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  logedOut = true

  constructor(private router: Router) {
    if(this.logedOut){
      this.router.navigateByUrl('/login');
    }
   }
  ngOnInit() {
  }
  lastIssues(){
    this.router.navigateByUrl('/tabs/all-complaints');
    console.log('view last issues');
  }

  editInfo(){
    this.router.navigateByUrl('/tabs/edit-info');
    console.log('go edit info');
  }

  editPass(){
    this.router.navigateByUrl('/tabs/change-pass');
    console.log('go edit password');
  }

  logout(){
    console.log('loged Out');
    this.router.navigateByUrl('/login');
  }

}
