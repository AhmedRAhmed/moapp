import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  cardClicked = false;
  constructor(private router: Router) {}

  goAdd(type){
    switch (type) {
      case 1:
        this.cardClicked = true;
          this.router.navigateByUrl('/tabs/send-complaint');
          console.log("شكوى");
          break;
      case 2:
          this.router.navigateByUrl('/tabs/send-proposal');
          console.log("اقتراح");
          break;
      case 3:
          this.router.navigateByUrl('/tabs/send-project');
          console.log("طلب مشروع");
          break;
      
  }
    
  }

}
