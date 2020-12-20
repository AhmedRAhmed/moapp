import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  loading = true
  feed: any;
  articles: any = [];
  constructor(private newsService: NewsService, private router: Router) {
    console.log(this.router.routerState.snapshot.url)
    this.callAPI()
  }

  callAPI() {
    this.newsService.getnews2().subscribe((news) => {
      console.log(news)
      this.feed = news;
      this.articles = this.feed
      if(this.articles!=[]){this.loading = false}
    });
  }

  doRefresh(event) {
  this.articles = [];
    console.log('Begin async operation');
    this.callAPI()
    if(this.articles !=[]){
      this.loading = true
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    }
  }

  viewArticle(articleId) {
    console.log(articleId)
    this.router.navigate(['/tabs/view-article', articleId])
    // this.router.navigateByUrl('/tabs/view-article');

  }
}
