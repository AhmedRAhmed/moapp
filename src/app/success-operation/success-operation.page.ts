import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-success-operation',
  templateUrl: './success-operation.page.html',
  styleUrls: ['./success-operation.page.scss'],
})
export class SuccessOperationPage implements OnInit {

  constructor(private router: Router, private activeRoute: ActivatedRoute) { }
  opType = '';
  comp = false;
  sugg = false;
  proj = false;
  data = false;
  pass = false;
  ngOnInit() {
    this.opType = this.activeRoute.snapshot.params.opType
    if (this.opType == 'comp') {
      this.comp = true
      setTimeout(() => {
        this.router.navigateByUrl('/tabs/tab2')
      }, 2000)
    } else if (this.opType == 'sugg') {
      this.sugg = true
      setTimeout(() => {
        this.router.navigateByUrl('/tabs/tab2')
      }, 2000)
    } else if (this.opType == 'proj') {
      this.proj = true
      setTimeout(() => {
        this.router.navigateByUrl('/tabs/tab2')
      }, 2000)
    } else if (this.opType == 'pass') {
      this.pass = true
      setTimeout(() => {
        this.router.navigateByUrl('/tabs/tab4')
      }, 2000)
    } else if (this.opType == 'data') {
      this.data = true
      setTimeout(() => {
        this.router.navigateByUrl('/tabs/tab4')
      }, 2000)
    }
    //   this.activeRoute.queryParams.subscribe((params) => {
    // });
  }

}
